// import firebase from './Firebase'
import "firebase/firestore"
import { useState, useEffect, useCallback } from 'react'
import './App.css'
import MainDisplay from './components/MainDisplay'
import SidePanel from './components/SidePanel'
import DisplayHistory from './components/DisplayHistory'
import {
  fetchKanjiList,
  fetchVocabularyList,
  fetchSentences,
  fetchInflexions,
  fetchKanji,
  fetchWord,
  fetchKanjiTraining,
  fetchVocabularyTraining,
} from './request'

function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState(false)
  const [imgPath, setImgPath] = useState('light')
  useEffect(() => {
    if (darkMode) setImgPath('dark')
    else setImgPath('light')
  }, [darkMode])

  // Listing data
  const [kanjisList, setKanjisList] = useState([])
  const [kanjiListOffset, setKanjisListOffset] = useState(0)
  const [vocabularyList, setVocabularyList] = useState([])
  const [vocabularyListOffset, setVocabularyListOffset] = useState(0)

  // Complementary data
  const [sentencesList, setSentencesList] = useState([])
  const [inflexions, setInflexions] = useState(undefined)

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
  const [kanji, setKanji] = useState(null)
  const [word, setWord] = useState(null)

  // Loading states
  const [loadingList, setLoadingList] = useState(false)
  const [loadingMainDisplay, setLoadingMainDisplay] = useState(false)

  // Fetch data callback
  const fetchData = useCallback(async () => {
    setLoadingList(true)
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
    setLoadingList(false)
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

  // Fetch sentences and inflexions
  const fetchSentencesData = useCallback(async () => {
    const resultSentences = await fetchSentences(word.id)
    setSentencesList(resultSentences)
    const resultInflexions = await fetchInflexions(word.id)
    setInflexions(resultInflexions)
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



  const [menuOpen, setMenuOpen] = useState(false)
  const [filterIndication, setFilterIndication] = useState(false)

  useEffect(() => {
    if (window.innerWidth > window.innerHeight) {
      setTimeout(() => {
        setMenuOpen(true)
      }, 1000)
    } else {
      setMenuOpen(true)
    }
  }, [])

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

  // Main display value handling

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

  const changeCurrentKanjiById = useCallback(async (id, fromHistory) => {
    setLoadingMainDisplay(true)
    const result = await fetchKanji(id)
    setWord(null)
    setKanji(result)
    setOpenedHistory(fromHistory)
    setLoadingMainDisplay(false)
  }, [])
  const changeCurrentWordById = useCallback(async (id, fromHistory) => {
    setLoadingMainDisplay(true)
    const result = await fetchWord(id)
    setKanji(null)
    setWord(result)
    setOpenedHistory(fromHistory)
    setLoadingMainDisplay(false)
  }, [])

  // Training mode

  const [trainingMode, setTrainingMode] = useState(0)
  const [allDisplayed, setAllDisplayed] = useState(true)

  // Start the training
  // Changes trainingMode
  const toggleTraining = (type) => {
    setMenuOpen(type === 0)
    setTrainingMode(type)
    setAllDisplayed(true)
    setFilterIndication(false)
  }

  // Removing current displayed element from its corresponding array of ids
  // Changes filteredKanjis and filteredWords
  const nextTrainingElement = () => {
    if (trainingMode === 1) {
      if (filteredKanjis.length > 0 && kanji) setFilteredKanjis((arr) => arr
        .filter((el) => el.id !== kanji.id))
      else getTrainingKanji()
    }
    if (trainingMode === 2) {
      if (filteredWords.length > 0 && word) setFilteredWords((arr) => arr
        .filter((el) => el.id !== word.id))
      else getTrainingVocabulary()
    }
  }

  // Fetching array of ids corresponding to the state filters
  // Triggered with level, grammar and collecton
  // Changes filteredKanjis and filteredWords
  const getTrainingKanji = useCallback(async () => {
    const resultKanji = await fetchKanjiTraining(
      level,
      grammar,
      collection
    )
    setFilteredKanjis(resultKanji)
  }, [
    level,
    grammar,
    collection
  ])
  const getTrainingVocabulary = useCallback(async () => {
    const resultVocabulary = await fetchVocabularyTraining(
      level,
      grammar,
      collection
    )
    setFilteredWords(resultVocabulary)
  }, [
    level,
    grammar,
    collection
  ])

  // The proper fetching function is executed (functions above)
  // Triggered with trainingMode
  useEffect(() => {
    if (trainingMode === 1) getTrainingKanji()
    if (trainingMode === 2) getTrainingVocabulary()
  }, [trainingMode, getTrainingKanji, getTrainingVocabulary])

  // A random id is picked and the corresponding element is fetched
  // Triggered with filteredKanjis and filteredWords
  useEffect(() => {
    if (trainingMode === 1) {
      if (filteredKanjis.length > 0) {
        setWord(null)
        const newKanjiId = filteredKanjis[Math.floor(Math.random()*filteredKanjis.length)]
        changeCurrentKanjiById(newKanjiId.id)
      } else setKanji(undefined)
    }
  }, [filteredKanjis, trainingMode, changeCurrentKanjiById])
  useEffect(() => {
    if (trainingMode === 2) {
      if (filteredWords.length > 0) {
        setKanji(null)
        const newWordId = filteredWords[Math.floor(Math.random()*filteredWords.length)]
        changeCurrentWordById(newWordId.id)
      } else setWord(undefined)
    }
  }, [filteredWords, trainingMode, changeCurrentWordById])

  return (
    <div id="App" className={darkMode ? 'dark' : 'light'}>
      <div onClick={() => window.location.reload(false)} id="logoContainer" className={kanji === null && word === null && !loadingMainDisplay ? 'full' : 'clickable'}>
        <img src={`/img/${imgPath}/Logo1.png`} alt='logo' />
        <img src={`/img/${imgPath}/Logo2.png`} alt='logo' />
        <img src={`/img/${imgPath}/Logo3.png`} alt='logo' />
      </div>
      {(kanji === null && word === null && !loadingMainDisplay) && <div id="introText" className={searchExecuted ? "lowOpacity" : ""}>
        <p>
          Tetsudai a pour vocation d'assister l'étudiant en japonais durant son apprentissage de la langue,
          en lui fournissant un dictionnaire franco-japonais dont le contenu se veut à la fois complet et pertinent.
        </p>
      </div>}
      <MainDisplay
        // Theme switcher
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        imgPath={imgPath}
        historyDisplayed={displayHistory.length > 1}

        // Displayed element
        kanji={kanji}
        changeCurrentKanjiById={changeCurrentKanjiById}
        word={word}
        changeCurrentWordById={changeCurrentWordById}
        sentences={sentencesList}
        inflexions={inflexions}
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
      />
      <SidePanel 
        imgPath={imgPath}

        // Content
        kanjis={kanjisList}
        vocabulary={vocabularyList}
        changeCurrentKanjiById={changeCurrentKanjiById}
        changeCurrentWordById={changeCurrentWordById}
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
        loading={loadingList}
      />
      <DisplayHistory
        imgPath={imgPath}
        displayHistory={displayHistory}
        historyDisplayed={displayHistory.length > 1}
        kanji={kanji}
        word={word}
        changeCurrentKanjiById={changeCurrentKanjiById}
        changeCurrentWordById={changeCurrentWordById}
      />
    </div>
  )
}

export default App
