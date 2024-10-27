import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './App.css'
import MainDisplay from './components/mainDisplay/MainDisplay'
import SidePanel from './components/sidePanel/SidePanel'
import SideBar from './components/SideBar'
import {
  fetchKanjiList,
  fetchVocabularyList,
  fetchSentenceData,
  fetchKanji,
  fetchWord,
} from './request'
import DisplayHistory from "./components/DisplayHistory"
import LanguageContext from './contexts/Language';
import { localDictionnary } from './lib/dictionnary';

function App() {
  // Language
  const [language, setLanguage] = useState('en')
  useEffect(() => {
    const userLanguage = navigator.languages[0]?.split('-')?.[0]
    setLanguage(['fr', 'en'].includes(userLanguage) ? userLanguage : 'en')
  }, [])

  // Theme
  const [imgPath, setImgPath] = useState(null)
  useEffect(() => {
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)")
    const changeTheme = () => setImgPath(darkTheme.matches ? "dark" : "light")
    changeTheme()
    darkTheme.addEventListener("change", () => changeTheme())
  }, [])

  // Listing data
  const [kanjisList, setKanjisList] = useState([])
  const [kanjiListOffset, setKanjisListOffset] = useState(0)
  const [vocabularyList, setVocabularyList] = useState([])
  const [vocabularyListOffset, setVocabularyListOffset] = useState(0)

  // Complementary data
  const [sentencesList, setSentencesList] = useState([])

  // Filtering states
  const [collection, setCollection] = useState("0")
  const [level, setLevel] = useState("0")
  const [grammar, setGrammar] = useState("0")
  const [search, setSearch] = useState("")
  const [searchCopy, setSearchCopy] = useState(search)
  const [previousSearch, setPreviousSearch] = useState("")
  const [searchExecuted, setSearchExecuted] = useState(false)
  const [elementFetched, setElementFetched]  = useState(false)

  const [openFilter, setOpenFilter] = useState(false)

  const [searchTimer, setSearchTimer] = useState(undefined)
  const runSearchTimer = (search) => {
      setSearchTimer(setTimeout(() => {
          setSearch(search)
          setSearchExecuted(true)
          setOpenFilter(false)
      }, 500))
  }
  const handleSearch = (search) => {
      setSearchCopy(search)
      clearTimeout(searchTimer)
      runSearchTimer(search)
  }

  // Main display data
  const navigate = useNavigate()
  const params = useParams()
  const [kanji, setKanji] = useState(null)
  const [word, setWord] = useState(null)

  const [menuOpen, setMenuOpen] = useState(!params.element && !params.id)

  const changeCurrentKanjiById = useCallback(async (id) => {
    setElementFetched(true)
    const result = await fetchKanji(id, setLoadingMainDisplay)
    setWord(null)
    setKanji(result)
  }, [])
  const changeCurrentWordById = useCallback(async (id) => {
    setElementFetched(true)
    const result = await fetchWord(id, setLoadingMainDisplay)
    setKanji(null)
    setWord(result.word)
    setSentencesList(result.sentences)
  }, [])

  useEffect(() => {
    if (params?.element === 'kanji') changeCurrentKanjiById(params.id)
    if (params?.element === 'word') changeCurrentWordById(params.id)
  }, [params, changeCurrentKanjiById, changeCurrentWordById])

  // Loading states
  const [loadingKanjiList, setLoadingKanjiList] = useState(false)
  const [loadingVocabularyList, setLoadingVocabularyList] = useState(false)
  const [loadingMainDisplay, setLoadingMainDisplay] = useState(false)

  // Fetch data callback
  const fetchKanjiAndSetState = useCallback(async () => {
    const resultKanji = await fetchKanjiList(
      level,
      grammar,
      collection,
      search,
      0,
      setLoadingKanjiList
    )
    setKanjisList(resultKanji)
  }, [
    level,
    grammar,
    collection,
    search
  ])
  const fetchVocabularyAndSetState = useCallback(async () => {
    if (!!search && previousSearch === search) return
    setPinnedSentence(undefined)
    const resultVocabulary = await fetchVocabularyList(
      level,
      grammar,
      collection,
      search,
      0,
      setLoadingVocabularyList
    )
    setVocabularyList(resultVocabulary.results)
    if (resultVocabulary.sentence) {
      fetchSentence({
        elements: resultVocabulary.sentence
      })
    }
  }, [
    level,
    grammar,
    collection,
    search,
    previousSearch
  ])

  // Fetch more data callbacks
  const fetchMoreKanjiAndSetState = useCallback(async () => {
    const resultKanji = await fetchKanjiList(
      level,
      grammar,
      collection,
      search,
      kanjiListOffset,
      setLoadingKanjiList
    )
    if (!!!resultKanji) return
    setKanjisList((arr) => [ ...arr, ...resultKanji ])
  }, [
    level,
    grammar,
    collection,
    search,
    kanjiListOffset
  ])
  const fetchMoreVocabularyAndSetState = useCallback(async () => {
    const resultVocabulary = await fetchVocabularyList(
      level,
      grammar,
      collection,
      search,
      vocabularyListOffset,
      setLoadingVocabularyList
    )
    if (!!!resultVocabulary) return
    setVocabularyList((arr) => [ ...arr, ...resultVocabulary.results ])
  }, [
    level,
    grammar,
    collection,
    search,
    vocabularyListOffset
  ])

  useEffect(() => {
    if (searchExecuted) {
      const kanjiContainer = document.getElementById('kanjisList')
      if (kanjiContainer) kanjiContainer.scrollTop = 0
      setKanjisListOffset(0)
      const vocabularyContainer = document.getElementById('vocabularyList')
      if (vocabularyContainer) vocabularyContainer.scrollTop = 0
      setVocabularyListOffset(0)
      
      fetchKanjiAndSetState()
      fetchVocabularyAndSetState()

      setPreviousSearch(search)

      localStorage.setItem('search', JSON.stringify({
        level,
        grammar,
        collection,
        search
      }))
    }
  }, [
    searchExecuted,
    level,
    grammar,
    collection,
    search,
    fetchKanjiAndSetState,
    fetchVocabularyAndSetState
  ])

  useEffect(() => {
    if (kanjiListOffset > 0) fetchMoreKanjiAndSetState()
    if (vocabularyListOffset > 0) fetchMoreVocabularyAndSetState()
  }, [
    fetchMoreKanjiAndSetState,
    fetchMoreVocabularyAndSetState,
    kanjiListOffset,
    vocabularyListOffset
  ])

  // History handling

  const [displayHistory, setDisplayHistory] = useState([])
  const [openedHistory, setOpenedHistory] = useState()

  useEffect(() => {
    setDisplayHistory(JSON.parse(localStorage.getItem('history')) || [])
  }, [])

  useEffect(() => {
    if ((kanji || word) && !openedHistory) {
      setDisplayHistory(prevState => {
        const newHistory = [ ...prevState.filter((e) => kanji ? e.kanji !== kanji.kanji : e.id !== word.id), kanji || word ]
        localStorage.setItem('history', JSON.stringify(newHistory))
        return newHistory
      })
    }
  }, [
    openedHistory,
    kanji,
    word
  ])

  // Pinned sentence
  const [pinnedSentence, setPinnedSentence] = useState()

  // Fetch sentence data
  const fetchSentence = async (sentence) => {
    const resultSentence = await fetchSentenceData(sentence)
    setPinnedSentence(resultSentence)
  }

  const [openHistory, setOpenHistory] = useState(false)

  const [touchXStart, setTouchXStart] = useState(0)
  const [touchXEnd, setTouchXEnd] = useState(0)
  const [touchYStart, setTouchYStart] = useState(0)
  const [touchYEnd, setTouchYEnd] = useState(0)

  const [scrolledAsSlide, setScrolledAsSlide] = useState(false)

  const slide = (slideLeft, slideRight) => {
    if (slideLeft) openHistory ? setOpenHistory(false) : setMenuOpen(true)
    if (slideRight) menuOpen ? setMenuOpen(false) : setOpenHistory(true)
  }

  const handleTouchStart = (e) => {
    if (e.target.scrollWidth > e.target.clientWidth) return
    setTouchXStart(e.targetTouches[0].clientX)
    setTouchYStart(e.targetTouches[0].clientY)
  }

  const handleTouchMove = (e) => {
    setTouchXEnd(e.targetTouches[0].clientX)
    setTouchYEnd(e.targetTouches[0].clientY)
  }

  const handleTouchEnd = () => {
    if (Math.abs(touchYStart - touchYEnd) < 100 && (!!kanji || !!word) && !!touchXEnd)
      slide(touchXStart - touchXEnd > 100, touchXStart - touchXEnd < -100)
    setTouchXEnd(0)
    setTouchYEnd(0)
  }

  const handleScroll = (e) => {
    if (e.target.scrollWidth > e.target.clientWidth) return
    const { deltaX, deltaY } = e
    if (Math.abs(deltaY) < 10 && Math.abs(deltaX) > 10 && (!!kanji || !!word) && !scrolledAsSlide) {
      slide(deltaX > 10, deltaX < -10)
      setScrolledAsSlide(true)
      setTimeout(() => setScrolledAsSlide(false), 1000)
    }
  }

  if (!imgPath) return

  return (
    <LanguageContext.Provider value={language}>
      <div
        id="App"
        className={imgPath}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleScroll}
      >
        {(kanji === null && word === null && !loadingMainDisplay) && <div id="introText" className={searchExecuted ? "" : "lowOpacity"}>
          <p>
            {localDictionnary[language].appDescription}
          </p>
        </div>}
        <MainDisplay
          // Theme switcher
          imgPath={imgPath}
          historyDisplayed={displayHistory.length > 1}

          // Displayed element
          setOpenedHistory={setOpenedHistory}
          kanji={kanji}
          changeCurrentKanjiById={(id) => navigate(`/kanji/${id}`)}
          word={word}
          changeCurrentWordById={(id) => navigate(`/word/${id}`)}
          sentences={sentencesList}
          pinnedSentence={pinnedSentence}
          handleSearch={handleSearch}
          setSearchExecuted={setSearchExecuted}
          elementFetched={elementFetched}
          loading={loadingMainDisplay}

          // Menu toggle
          setMenuOpen={setMenuOpen}

          // History is displayed
          openHistory={openHistory}
        />
        <SidePanel 
          imgPath={imgPath}

          // Content
          setOpenedHistory={setOpenedHistory}
          kanjis={kanjisList}
          vocabulary={vocabularyList}
          changeCurrentKanjiById={(id) => navigate(`/kanji/${id}`)}
          changeCurrentWordById={(id) => navigate(`/word/${id}`)}
          kanjiListOffset={kanjiListOffset}
          setKanjisListOffset={setKanjisListOffset}
          vocabularyListOffset={vocabularyListOffset}
          setVocabularyListOffset={setVocabularyListOffset}

          // Sentence
          pinnedSentence={pinnedSentence}

          // Current element
          currentElement={kanji || word}

          // Menu toggle
          open={menuOpen}
          setOpen={setMenuOpen}

          // Filters
          collection={collection}
          setCollection={setCollection}
          level={level}
          setLevel={setLevel}
          grammar={grammar}
          setGrammar={setGrammar}
          search={search}
          searchCopy={searchCopy}
          handleSearch={handleSearch}
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}

          searchExecuted={searchExecuted}
          setSearchExecuted={setSearchExecuted}
          loadingKanjiList={loadingKanjiList}
          loadingVocabularyList={loadingVocabularyList}
        />
        <SideBar
          imgPath={imgPath}
          historyDisplayed={displayHistory.length > 1}
          openHistory={openHistory}
          setOpenHistory={setOpenHistory}
          kanji={kanji}
          word={word}
          loadingMainDisplay={loadingMainDisplay}
          searchExecuted={searchExecuted}
        />
        <DisplayHistory
          imgPath={imgPath}
          kanji={kanji}
          word={word}
          displayHistory={displayHistory}
          openHistory={openHistory}
          setOpenHistory={setOpenHistory}
          setOpenedHistory={setOpenedHistory}
          changeCurrentKanjiById={(id) => navigate(`/kanji/${id}`)}
          changeCurrentWordById={(id) => navigate(`/word/${id}`)}
        />
      </div>
    </LanguageContext.Provider>
  )
}

export default App
