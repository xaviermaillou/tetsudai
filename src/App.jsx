// import firebase from './Firebase'
import "firebase/firestore"
import { useState, useEffect, useCallback } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate, useParams } from 'react-router-dom';
import './App.css'
import MainDisplay from './components/MainDisplay'
import SidePanel from './components/SidePanel'
import SideBar from './components/SideBar'
import {
  fetchKanjiList,
  fetchVocabularyList,
  fetchSentences,
  fetchKanji,
  fetchWord,
  fetchKanjiTraining,
  fetchVocabularyTraining,
} from './request'
import DisplayHistory from "./components/DisplayHistory"
import PinnedSentence from "./components/PinnedSentence";

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

  // Filtering states
  const [collection, setCollection] = useState(0)
  const [level, setLevel] = useState(0)
  const [grammar, setGrammar] = useState(0)
  const [search, setSearch] = useState("")
  const [searchExecuted, setSearchExecuted] = useState(false)

  // Main display data
  const navigate = useNavigate()
  const params = useParams()
  const [kanji, setKanji] = useState(null)
  const [word, setWord] = useState(null)

  const changeCurrentKanjiById = useCallback(async (id) => {
    setLoadingMainDisplay(true)
    const result = await fetchKanji(id)
    setWord(null)
    setKanji(result)
  }, [])
  const changeCurrentWordById = useCallback(async (id) => {
    setLoadingMainDisplay(true)
    const result = await fetchWord(id)
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

  // Stops lists loading animations
  // Triggered with kanjisList and vocabularyList
  useEffect(() => {
    setLoadingKanjiList(false)
  }, [kanjisList])
  useEffect(() => {
    setLoadingVocabularyList(false)
  }, [vocabularyList])

  // Fetch data callback
  const fetchData = useCallback(async () => {
    setLoadingKanjiList(true)
    setLoadingVocabularyList(true)
    const resultKanji = await fetchKanjiList(
      level,
      grammar,
      collection,
      search,
      0
    )
    setKanjisList(resultKanji)
    const resultVocabulary = await fetchVocabularyList(
      level,
      grammar,
      collection,
      search,
      0
    )
    setVocabularyList(resultVocabulary)
  }, [
    level,
    grammar,
    collection,
    search
  ])

  // Fetch more data callbacks
  const fetchMoreKanji = useCallback(async () => {
    const resultKanji = await fetchKanjiList(
      level,
      grammar,
      collection,
      search,
      kanjiListOffset
    )
    setKanjisList((arr) => [ ...arr, ...resultKanji ])
  }, [
    level,
    grammar,
    collection,
    search,
    kanjiListOffset
  ])
  const fetchMoreVocabulary = useCallback(async () => {
    const resultVocabulary = await fetchVocabularyList(
      level,
      grammar,
      collection,
      search,
      vocabularyListOffset
    )
    setVocabularyList((arr) => [ ...arr, ...resultVocabulary ])
  }, [
    level,
    grammar,
    collection,
    search,
    vocabularyListOffset
  ])

  // Fetch sentences
  const fetchSentencesData = useCallback(async () => {
    const resultSentences = await fetchSentences(word.id)
    setSentencesList(resultSentences)
  }, [word])

  useEffect(() => {
    if (searchExecuted) fetchData()
  }, [
    searchExecuted,
    fetchData,
    level,
    grammar,
    collection,
    search
  ])

  useEffect(() => {
    if (kanjiListOffset > 0) fetchMoreKanji()
    if (vocabularyListOffset > 0) fetchMoreVocabulary()
  }, [
    fetchMoreKanji,
    fetchMoreVocabulary,
    kanjiListOffset,
    vocabularyListOffset
  ])

  useEffect(() => {
    if (word) fetchSentencesData()
  }, [fetchSentencesData, word])

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

  // Stops main display loading animations
  // Triggered with kanji and word
  useEffect(() => {
    setLoadingMainDisplay(false)
  }, [kanji, word])

  // Training mode

  const [trainingMode, setTrainingMode] = useState(0)
  const [allDisplayed, setAllDisplayed] = useState(true)
  const [endingReason, setEndingReason] = useState(undefined)
  const [forceNext, setForceNext] = useState(false)

  // Menu handling (is here because needs training mode value)

  const [menuOpen, setMenuOpen] = useState(() => {
    if (window.innerWidth > window.innerHeight) {
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
      if (filteredKanjis.length === 1 && validated) {
        setEndingReason(2)
        setKanji(undefined)
      }
      if (filteredKanjis.length > 0 && kanji) {
        if (validated) setFilteredKanjis((arr) => arr
          .filter((el) => el.id !== kanji.id))
        else setForceNext(!forceNext)
      }
      else getTrainingKanji()
    }
    if (trainingMode === 2) {
      if (filteredWords.length === 1 && validated) {
        setEndingReason(2)
        setWord(undefined)
      }
      if (filteredWords.length > 0 && word) {
        if (validated) setFilteredWords((arr) => arr
          .filter((el) => el.id !== word.id))
        else setForceNext(!forceNext)
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredKanjis, trainingMode, forceNext])
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredWords, trainingMode, forceNext])

  const [openHistory, setOpenHistory] = useState(false)

  return (
    <div id="App" className={imgPath}>
      {(kanji === null && word === null && !loadingMainDisplay) && <div id="introText" className={searchExecuted ? "lowOpacity" : ""}>
        <p>
          Tetsudai a pour vocation d'assister l'étudiant en japonais durant son apprentissage de la langue,
          en lui fournissant un dictionnaire franco-japonais dont le contenu se veut à la fois complet et pertinent.
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
        setPinnedSentence={setPinnedSentence}
        loading={loadingMainDisplay}

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
        filterIndication={filterIndication}
        
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
      <PinnedSentence
        offset={menuOpen}
        word={word}
        changeCurrentWordById={(id) => navigate(`/word/${id}`)}
        pinnedSentence={pinnedSentence}
        setPinnedSentence={setPinnedSentence}
        imgPath={imgPath}
      />
    </div>
  )
}

export default App
