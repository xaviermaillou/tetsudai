// import firebase from './Firebase'
import "firebase/firestore"
import { useState, useEffect, useCallback } from 'react'
import './App.css'
import MainDisplay from './components/MainDisplay'
import SidePanel from './components/SidePanel'
import DisplayHistory from './components/DisplayHistory'
import axios from 'axios'
import { fetchKanji, fetchVocabulary, fetchSentences } from './request'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [imgPath, setImgPath] = useState('light')
  useEffect(() => {
    if (darkMode) setImgPath('dark')
    else setImgPath('light')
  }, [darkMode])

  const [kanjisList, setKanjisList] = useState([])
  const [vocabularyList, setVocabularyList] = useState([])
  const [sentencesList, setSentencesList] = useState([])

  const [filteredKanjis, setFilteredKanjis] = useState([...kanjisList])
  const [filteredWords, setFilteredWords] = useState([...vocabularyList])

  const [searchExecuted, setSearchExecuted] = useState(false)

  const [collection, setCollection] = useState(0)
  const [level, setLevel] = useState(0)
  const [grammar, setGrammar] = useState(0)
  const [search, setSearch] = useState("")

  const [kanji, setKanji] = useState(null)
  const [word, setWord] = useState(null)

  const fetchKanjiData = useCallback(async () => {
    const result = await fetchKanji(level, grammar, collection, search)
    setKanjisList(result)
  }, [level, grammar, collection, search])

  const fetchVocabularyData = useCallback(async () => {
    const result = await fetchVocabulary(level, grammar, collection, search)
    setVocabularyList(result)
  }, [level, grammar, collection, search])

  const fetchSentencesData = useCallback(async () => {
    const result = await fetchSentences(word.id)
    setSentencesList(result)
  }, [word])

  useEffect(() => {
    fetchKanjiData()
    fetchVocabularyData()
  }, [fetchKanjiData, fetchVocabularyData, level, grammar, collection, search])

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

  const [valueChanged, setValueChanged] = useState(false)
  const [displayHistory, setDisplayHistory] = useState([])
  const [openedHistory, setOpenedHistory] = useState()
  const [trainingHistory, setTrainingHistory] = useState([])

  const prepareDisplayChange = () => {
    setValueChanged(true)
    if ((kanji || word) && !openedHistory) {
      const displayHistoryCopy = [ ...displayHistory ]
        .filter((e) => kanji ? e.kanji !== kanji.kanji : e.id !== word.id)
      displayHistoryCopy.push(kanji || word)
      setDisplayHistory(displayHistoryCopy)
    }
  }

  const changeCurrentKanjiById = (id) => {
    prepareDisplayChange()
    setWord(null)
    setKanji(kanjisList.find((item) => item.id === id))
  }
  const changeCurrentKanjiByKanji = (kanji, fromHistory) => {
    prepareDisplayChange()
    setWord(null)
    setKanji(kanjisList.find((item) => item.kanji === kanji))
    setOpenedHistory(fromHistory)
  }
  const changeCurrentWordById = (id, fromHistory) => {
    prepareDisplayChange()
    setKanji(null)
    setWord(vocabularyList.find((item) => item.id === id))
    setOpenedHistory(fromHistory)
  }
  const randomKanji = (type) => {
    prepareDisplayChange()
    const trainingHistoryCopy = [ ...trainingHistory ]
    if (type === 1) {
      setWord(null)
      let remainingFilteredKanjis = [ ...filteredKanjis ]
      trainingHistory.forEach((historyElement) => {
        if (historyElement.kanji) remainingFilteredKanjis = remainingFilteredKanjis
          .filter((remaining) => (remaining.kanji !== historyElement.kanji && (kanji ? remaining.kanji !== kanji.kanji : true)))
      })
      const newKanji = remainingFilteredKanjis[Math.floor(Math.random()*remainingFilteredKanjis.length)]
      setKanji(newKanji)
      if (newKanji) trainingHistoryCopy.push(newKanji)
      if (remainingFilteredKanjis.length > 0) setTrainingHistory(trainingHistoryCopy)
      else setTrainingHistory([])
    } 
    if (type === 2) {
      setKanji(null)
      let remainingFilteredWords = [ ...filteredWords ]
      trainingHistory.forEach((historyElement) => {
        if (historyElement.id) remainingFilteredWords = remainingFilteredWords
          .filter((remaining) => (remaining.id !== historyElement.id && (word ? remaining.id !== word.id : true)))
      })
      const newWord = remainingFilteredWords[Math.floor(Math.random()*remainingFilteredWords.length)]
      setWord(newWord)
      if (newWord) trainingHistoryCopy.push(newWord)
      if (remainingFilteredWords.length > 0) setTrainingHistory(trainingHistoryCopy)
      else setTrainingHistory([])
    }
    setOpenedHistory(false)
  }

  const [trainingMode, setTrainingMode] = useState(0)
  const [allDisplayed, setAllDisplayed] = useState(true)
  const toggleTraining = (type) => {
    setTrainingMode(type)
    setAllDisplayed(true)
    setFilterIndication(false)
    if (!!type) {
      setMenuOpen(false)
      randomKanji(type)
    }
  }

  useEffect(() => {
    setTrainingHistory([])
  }, [trainingMode])

  return (
    <div id="App" className={darkMode ? 'dark' : 'light'}>
      <div onClick={() => window.location.reload(false)} id="logoContainer" className={kanji === null && word === null ? 'full' : 'clickable'}>
        <img src={`/img/${imgPath}/Logo1.png`} alt='logo' />
        <img src={`/img/${imgPath}/Logo2.png`} alt='logo' />
        <img src={`/img/${imgPath}/Logo3.png`} alt='logo' />
      </div>
      {(kanji === null && word === null) && <div id="introText" className={searchExecuted ? "lowOpacity" : ""}>
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
        historyDisplayed={displayHistory.length > 0}

        // Displayed element
        kanji={kanji}
        changeCurrentKanjiByKanji={changeCurrentKanjiByKanji}
        word={word}
        changeCurrentWordById={changeCurrentWordById}
        sentences={sentencesList}
        valueChanged={valueChanged}
        setValueChanged={setValueChanged}

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
        randomKanji={randomKanji}
        toggleTraining={toggleTraining}
      />
      <SidePanel 
        imgPath={imgPath}

        // Content
        kanjis={kanjisList}
        vocabulary={vocabularyList}
        changeCurrentKanjiById={changeCurrentKanjiById}
        changeCurrentWordById={changeCurrentWordById}

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
      />
      <DisplayHistory
        imgPath={imgPath}
        displayHistory={displayHistory}
        kanji={kanji}
        word={word}
        changeCurrentKanjiByKanji={changeCurrentKanjiByKanji}
        changeCurrentWordById={changeCurrentWordById}
      />
    </div>
  )
}

export default App
