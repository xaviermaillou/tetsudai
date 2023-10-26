import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './App.css'
import MainDisplay from './components/mainDisplay/MainDisplay'
import SidePanel from './components/sidePanel/SidePanel'
import SideBar from './components/SideBar'
import {
  fetchKanjiList,
  fetchVocabularyList,
  fetchSentences,
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
  const [imgPath, setImgPath] = useState('light')
  useEffect(() => {
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)")
    if (darkTheme.matches) setImgPath("dark")
    else setImgPath("light")
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
  const [searchExecuted, setSearchExecuted] = useState(false)

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

  const [menuOpen, setMenuOpen] = useState(() => {
    if (window.innerWidth > 961) {
      setTimeout(() => {
        setMenuOpen(true)
      }, 1000)
    } else {
      if (!params.element && !params.id) return true
    }
  })

  const changeCurrentKanjiById = useCallback(async (id) => {
    const result = await fetchKanji(id, setLoadingMainDisplay)
    setWord(null)
    setKanji(result)
  }, [])
  const changeCurrentWordById = useCallback(async (id) => {
    const result = await fetchWord(id, setLoadingMainDisplay)
    setKanji(null)
    setWord(result)
  }, [])

  useEffect(() => {
    if (params?.element === 'kanji') changeCurrentKanjiById(params.id)
    if (params?.element === 'word') changeCurrentWordById(params.id)
  }, [params, changeCurrentKanjiById, changeCurrentWordById])

  // Loading states
  const [loadingKanjiList, setLoadingKanjiList] = useState(false)
  const [loadingVocabularyList, setLoadingVocabularyList] = useState(false)
  const [loadingMainDisplay, setLoadingMainDisplay] = useState(false)
  const [loadingSentences, setLoadingSentences] = useState(false)

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
      setSearchIsSentence(true)
      fetchSentence({
        elements: resultVocabulary.sentence
      })
    }
    else {
      setSearchIsSentence(false)
      setPinnedSentence(undefined)
    }
  }, [
    level,
    grammar,
    collection,
    search
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
    setVocabularyList((arr) => [ ...arr, ...resultVocabulary.results ])
  }, [
    level,
    grammar,
    collection,
    search,
    vocabularyListOffset
  ])

  // Fetch sentences
  const fetchWordSentences = useCallback(async () => {
    const resultSentences = await fetchSentences(word.id, setLoadingSentences)
    setSentencesList(resultSentences)
  }, [word])

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

  useEffect(() => {
    if (word) fetchWordSentences()
  }, [fetchWordSentences, word])

  // History handling

  const [displayHistory, setDisplayHistory] = useState([])
  const [openedHistory, setOpenedHistory] = useState()

  useEffect(() => {
    setDisplayHistory(JSON.parse(localStorage.getItem('history')) || [])
  }, [])

  useEffect(() => {
    if ((kanji || word) && !openedHistory) {
      const newHistory = [ ...displayHistory.filter((e) => kanji ? e.kanji !== kanji.kanji : e.id !== word.id), kanji || word ]
      setDisplayHistory(newHistory)
      localStorage.setItem('history', JSON.stringify(newHistory))
    }
  }, [
    openedHistory,
    kanji,
    word
  ])

  // Pinned sentence
  const [pinnedSentence, setPinnedSentence] = useState()
  const [searchIsSentence, setSearchIsSentence] = useState(false)

  // Fetch sentence data
  const fetchSentence = async (sentence) => {
    const resultSentence = await fetchSentenceData(sentence)
    setPinnedSentence(resultSentence)
  }

  const [openHistory, setOpenHistory] = useState(false)

  return (
    <LanguageContext.Provider value={language}>
      <div id="App" className={imgPath}>
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
          loading={loadingMainDisplay}
          loadingSentences={loadingSentences}

          // Height
          compressed={menuOpen}

          // Menu toggle
          setMenuOpen={setMenuOpen}
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
          searchIsSentence={searchIsSentence}

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
          setSearch={setSearch}
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
