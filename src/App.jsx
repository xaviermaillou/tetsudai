import { useState, useEffect, useCallback } from 'react'
import { useCookies } from 'react-cookie'
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
  fetchKanjiTraining,
  fetchVocabularyTraining,
} from './request'
import DisplayHistory from "./components/DisplayHistory"

function App() {
  // Theme
  const [cookies] = useCookies()
  const [imgPath, setImgPath] = useState('light')
  useEffect(() => {
    if (cookies.theme) setImgPath(cookies.theme)
  }, [cookies.theme])

  // Listing data
  const [kanjisList, setKanjisList] = useState([])
  const [kanjiListOffset, setKanjisListOffset] = useState(0)
  const [vocabularyList, setVocabularyList] = useState([])
  const [vocabularyListOffset, setVocabularyListOffset] = useState(0)

  // Complementary data
  const [sentencesList, setSentencesList] = useState([])

  // Training data
  const [filteredKanjis, setFilteredKanjis] = useState([])
  const [filteredWords, setFilteredWords] = useState([])
  const [filteredKanjisPutAside, setFilteredKanjisPutAside] = useState([])
  const [filteredWordsPutAside, setFilteredWordsPutAside] = useState([])

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
    if ((kanji || word) && !openedHistory) {
      setDisplayHistory((arr) => arr
        .filter((e) => kanji ? e.kanji !== kanji.kanji : e.id !== word.id))
      setDisplayHistory((arr) => [ ...arr, kanji || word ])
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

  // Training mode

  const [trainingMode, setTrainingMode] = useState(0)
  const [allDisplayed, setAllDisplayed] = useState(true)
  const [endingReason, setEndingReason] = useState(undefined)

  // Menu handling (is here because needs training mode value)

  const [menuOpen, setMenuOpen] = useState(() => {
    if (window.innerWidth > 961) {
      setTimeout(() => {
        setMenuOpen(true)
      }, 1000)
    } else {
      if (!params.element && !params.id) return true
    }
  })
  const [filterIndication, setFilterIndication] = useState(false)

  const checkTrainingFilters = () => {
    if (!menuOpen) {
      setMenuOpen(true)
      setTimeout(() => {
        setFilterIndication(true)
        setTimeout(() => {
          setFilterIndication(false)
        }, 300)
      }, 300)
    } else {
      setFilterIndication(true)
      setTimeout(() => {
        setFilterIndication(false)
      }, 300)
    }
  }

  // Start the training
  // Changes trainingMode
  const toggleTraining = (type) => {
    setMenuOpen(type === 0)
    setTrainingMode(type)
    setAllDisplayed(true)
    setFilterIndication(false)
    if (type === 1) getTrainingKanji()
    if (type === 2) getTrainingVocabulary()
  }

  // Fetching array of ids corresponding to the state filters
  // Triggered with level, grammar and collecton
  // Changes filteredKanjis and filteredWords
  const getTrainingKanji = useCallback(async () => {
    const result = await fetchKanjiTraining(
      level,
      grammar,
      collection
    )
    setFilteredKanjis(result)
    setFilteredKanjisPutAside([])
  }, [
    level,
    grammar,
    collection
  ])
  const getTrainingVocabulary = useCallback(async () => {
    const result = await fetchVocabularyTraining(
      level,
      grammar,
      collection
    )
    setFilteredWords(result)
    setFilteredWordsPutAside([])
  }, [
    level,
    grammar,
    collection
  ])

  useEffect(() => {
    if (trainingMode === 1) getTrainingKanji()
    if (trainingMode === 2) getTrainingVocabulary()
  }, [
    level,
    grammar,
    collection,
    getTrainingKanji,
    getTrainingVocabulary,
    trainingMode
  ])

  // Removing current displayed element from its corresponding array of ids
  // Changes filteredKanjis and filteredWords
  const nextTrainingElement = (validated) => {
    if (trainingMode === 1) {
      // Ending of training loop
      // if at least one element has been put aside, we restart the loop with the put aside element(s)
      // otherwhise we just end the training session
      if (filteredKanjis.length === 1 && filteredKanjisPutAside.length === 0 && validated) {
        setEndingReason(2)
        setKanji(undefined)
      }
      else if (filteredKanjis.length === 1 
        && (validated === true || validated === false)) {
        validated ?
        setFilteredKanjis(filteredKanjisPutAside)
          :
          setFilteredKanjis([ ...filteredKanjisPutAside, { id: kanji.id } ])
          setFilteredKanjisPutAside([])
      }

      else if (filteredKanjis.length > 0 && kanji
        && (validated === true || validated === false)) {
        setFilteredKanjis((arr) => arr
          .filter((el) => el.id !== kanji.id))
        if (!validated) setFilteredKanjisPutAside((arr) => (arr) => [...arr, { id: kanji.id }])
      }
      else getTrainingKanji()
    }
    if (trainingMode === 2) {
      // Ending of training loop
      // if at least one element has been put aside, we restart the loop with the put aside element(s)
      // otherwhise we just end the training session
      if (filteredWords.length === 1 && filteredWordsPutAside.length === 0 && validated) {
        setEndingReason(2)
        setWord(undefined)
      }
      else if (filteredWords.length === 1 
        && (validated === true || validated === false)) {
        validated ?
          setFilteredWords(filteredWordsPutAside)
          :
          setFilteredWords([ ...filteredWordsPutAside, { id: word.id } ])
        setFilteredWordsPutAside([])
      }

      else if (filteredWords.length > 0 && word
        && (validated === true || validated === false)) {
        setFilteredWords((arr) => arr
          .filter((el) => el.id !== word.id))
        if (!validated) setFilteredWordsPutAside((arr) => [...arr, { id: word.id }])
      }
      else getTrainingVocabulary()
    }
  }

  // A random id is picked and the corresponding element is fetched
  // Triggered with filteredKanjis and filteredWords
  useEffect(() => {
    if (trainingMode === 1) {
      if (filteredKanjis.length > 0) {
        const newKanjiId = filteredKanjis[Math.floor(Math.random()*filteredKanjis.length)]
        navigate(`/kanji/${newKanjiId.id}`)
      }
      else {
        setEndingReason(1)
        setKanji(undefined)
      }
    }
  // For some reason it requires to add "navigate" to the dependencies array, which causes an infinite loop
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredKanjis, trainingMode])
  useEffect(() => {
    if (trainingMode === 2) {
      if (filteredWords.length > 0) {
        const newWordId = filteredWords[Math.floor(Math.random()*filteredWords.length)]
        navigate(`/word/${newWordId.id}`)
      }
      else {
        setEndingReason(1)
        setWord(undefined)
      }
    }
  // For some reason it requires to add "navigate" to the dependencies array, which causes an infinite loop
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredWords, trainingMode])

  const [openHistory, setOpenHistory] = useState(false)

  return (
    <div id="App" className={imgPath}>
      {(kanji === null && word === null && !loadingMainDisplay) && <div id="introText" className={searchExecuted ? "" : "lowOpacity"}>
        <p>
          Tetsudai a pour vocation d'assister l'étudiant en <b>japonais</b> durant son apprentissage de la langue,
          en lui fournissant un <b>dictionnaire</b> focalisé sur l'<b>interconnexion</b> du vocabulaire et des kanji.
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

        // Filters
        collection={collection}
        level={level}
        grammar={grammar}
        checkTrainingFilters={checkTrainingFilters}

        // Training mode
        allDisplayed={allDisplayed}
        setAllDisplayed={setAllDisplayed}
        trainingMode={trainingMode}
        nextTrainingElement={nextTrainingElement}
        toggleTraining={toggleTraining}
        endingReason={endingReason}
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
        filterIndication={filterIndication}
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
        
        // Training mode
        trainingMode={trainingMode}
        toggleTraining={toggleTraining}

        searchExecuted={searchExecuted}
        setSearchExecuted={setSearchExecuted}
        loadingKanjiList={loadingKanjiList}
        loadingVocabularyList={loadingVocabularyList}
      />
      <SideBar
        imgPath={imgPath}
        displayHistory={displayHistory}
        historyDisplayed={displayHistory.length > 1}
        openHistory={openHistory}
        setOpenHistory={setOpenHistory}
        kanji={kanji}
        word={word}
        loadingMainDisplay={loadingMainDisplay}
        searchExecuted={searchExecuted}
      />
      <DisplayHistory
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
  )
}

export default App
