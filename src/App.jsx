import firebase from './Firebase';
import "firebase/firestore";
import { useState, useEffect } from 'react';
import './App.css';
import './themes/light.css';
import MainDisplay from './components/MainDisplay';
import SidePanel from './components/SidePanel';
import DisplayHistory from './components/DisplayHistory';
import { levels, sortByObjectKey, cutStringToArray } from "./lib/common";

function App() {
  const [kanjisList, setKanjisList] = useState([]);
  const [vocabularyList, setVocabularyList] = useState([]);
  const [sentencesList, setSentencesList] = useState([]);

  const [kanjisWithVocabulary, setKanjisWithVocabulary] = useState([]);
  const [vocabularyWithRelated, setVocabularyWithRelated] = useState([]);

  useEffect(() => {
    // Fetching kanjis
    firebase.firestore().collection('Kanjis').onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        doc,
      }));
      const sortedByFrecuencyData = data?.sort((a, b) => a.frequency - b.frequency);
      setKanjisList(sortByObjectKey(sortedByFrecuencyData, levels));
    });
    // Fetching vocabulary
    firebase.firestore().collection('Vocabulary').onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        doc,
      }));
      const sortedByFrecuencyData = data?.sort((a, b) => a.frequency - b.frequency);
      setVocabularyList(sortByObjectKey(sortedByFrecuencyData, levels));
    });
    // Fetching sentences
    firebase.firestore().collection('Sentences').onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        doc,
      }));
      setSentencesList(data);
    });
  }, []);

  useEffect(() => {
    const kanjisListCopy = [ ...kanjisList ];
    const vocabularyListCopy = [ ...vocabularyList ];
    kanjisListCopy.forEach((kanji) => {
      kanji.translationArray = cutStringToArray(kanji.translation);
      kanji.vocabulary = [];
      kanji.grammar = [];
      vocabularyListCopy.forEach((word) => {
        word.sentences = [];
        word.translationArray = cutStringToArray(word.translation);
        word.elements.every((element) => {
          if (kanji.kanji === element.kanji) {
            kanji.vocabulary.push(word);
            kanji.grammar.push(...word.grammar);
            element.details = kanji;
            return false;
          }
          return true;
        });
        sentencesList.forEach((sentence) => {
          sentence.elements.forEach((element) => {
            if (element.id === word.id) {
              word.sentences.push({
                commonWord: element,
                fullSentence: sentence
              });
            }
          });
        });
      });
    });
    setKanjisWithVocabulary(kanjisListCopy);
    setVocabularyWithRelated(vocabularyListCopy);
  }, [kanjisList, vocabularyList, sentencesList]);

  // useEffect(() => {
  //   const vocabularyListCopy = [ ...vocabularyList ];
  //   vocabularyListCopy.forEach((word) => {
  //     word.elements.forEach((element) => {
  //       element.details = kanjisList.find((kanji) => kanji.kanji === element.kanji);
  //     });
  //   });
  //   setVocabularyWithRelated(vocabularyListCopy);
  // }, [kanjisList, vocabularyList]);

  const [kanji, setKanji] = useState(null);
  const [word, setWord] = useState(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [collection, setCollection] = useState(0);
  const [level, setLevel] = useState(0);
  const [grammar, setGrammar] = useState(0);
  const [search, setSearch] = useState("");
  const [filterIndication, setFilterIndication] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMenuOpen(true);
    }, 1000);
  }, []);

  const checkTrainingFilters = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      setTimeout(() => {
        setFilterIndication(true);
        setTimeout(() => {
          setFilterIndication(false);
        }, 300);
      }, 300);
    } else {
      setFilterIndication(true);
      setTimeout(() => {
        setFilterIndication(false);
      }, 300);
    }
  }

  const [filteredKanjis, setFilteredKanjis] = useState([...kanjisWithVocabulary])
  const [filteredWords, setFilteredWords] = useState([...vocabularyWithRelated])

  useEffect(() => {
    const kanjisListCopy = [];
    const vocabularyListCopy = [];
    kanjisWithVocabulary.forEach((kanji) => {
      if (
        (kanji.collections?.includes(collection) || collection === 0)
        && (levels[level] === kanji.level || !level)
        && (kanji.grammar.includes(grammar) || !grammar)
      ) {
        kanjisListCopy.push(kanji)
      }
    });
    vocabularyWithRelated.forEach((word) => {
      if (
        (word.collections?.includes(collection) || collection === 0)
        && (levels[level] === word.level || !level)
        && (word.grammar.includes(grammar) || !grammar)
      ) {
        vocabularyListCopy.push(word)
      }
    });
    setFilteredKanjis(kanjisListCopy);
    setFilteredWords(vocabularyListCopy);
  }, [collection, level, grammar, kanjisWithVocabulary, vocabularyWithRelated]);

  // Main display value handling

  const [valueChanged, setValueChanged] = useState(false);
  const [displayHistory, setDisplayHistory] = useState([]);
  const [openedHistory, setOpenedHistory] = useState();
  const [trainingHistory, setTrainingHistory] = useState([]);

  const prepareDisplayChange = () => {
    setValueChanged(true);
    if ((kanji || word) && !openedHistory) {
      const displayHistoryCopy = [ ...displayHistory ]
        .filter((e) => kanji ? e.kanji !== kanji.kanji : e.id !== word.id);
      displayHistoryCopy.push(kanji || word);
      setDisplayHistory(displayHistoryCopy);
    }
  }

  const changeCurrentKanjiById = (id) => {
    prepareDisplayChange();
    setWord(null);
    setKanji(kanjisWithVocabulary.find((item) => item.doc.id === id));
  }
  const changeCurrentKanjiByKanji = (kanji, fromHistory) => {
    prepareDisplayChange();
    setWord(null);
    setKanji(kanjisWithVocabulary.find((item) => item.kanji === kanji));
    setOpenedHistory(fromHistory);
  }
  const changeCurrentWordById = (id, fromHistory) => {
    prepareDisplayChange();
    setKanji(null);
    setWord(vocabularyWithRelated.find((item) => item.id === id));
    setOpenedHistory(fromHistory);
  }
  const randomKanji = (type) => {
    prepareDisplayChange();
    const trainingHistoryCopy = [ ...trainingHistory ];
    if (type === 1) {
      setWord(null);
      let remainingFilteredKanjis = [ ...filteredKanjis ];
      trainingHistory.forEach((historyElement) => {
        if (historyElement.kanji) remainingFilteredKanjis = remainingFilteredKanjis
          .filter((remaining) => (remaining.kanji !== historyElement.kanji && (kanji ? remaining.kanji !== kanji.kanji : true)));
      });
      const newKanji = remainingFilteredKanjis[Math.floor(Math.random()*remainingFilteredKanjis.length)];
      setKanji(newKanji);
      if (newKanji) trainingHistoryCopy.push(newKanji);
      if (remainingFilteredKanjis.length > 0) setTrainingHistory(trainingHistoryCopy);
      else setTrainingHistory([]);
    } 
    if (type === 2) {
      setKanji(null);
      let remainingFilteredWords = [ ...filteredWords ];
      trainingHistory.forEach((historyElement) => {
        if (historyElement.id) remainingFilteredWords = remainingFilteredWords
          .filter((remaining) => (remaining.id !== historyElement.id && (word ? remaining.id !== word.id : true)));
      });
      const newWord = remainingFilteredWords[Math.floor(Math.random()*remainingFilteredWords.length)];
      setWord(newWord);
      if (newWord) trainingHistoryCopy.push(newWord);
      if (remainingFilteredWords.length > 0) setTrainingHistory(trainingHistoryCopy);
      else setTrainingHistory([]);
    }
    setOpenedHistory(false);
  }

  const [trainingMode, setTrainingMode] = useState(0);
  const [allDisplayed, setAllDisplayed] = useState(true);
  const toggleTraining = (type) => {
    setTrainingMode(type);
    setAllDisplayed(true);
    setFilterIndication(false);
    if (!!type) {
      setMenuOpen(false);
      randomKanji(type);
    }
  }

  useEffect(() => {
    setTrainingHistory([])
  }, [trainingMode]);

  const [searchExecuted, setSearchExecuted] = useState(false);

  return (
    <div className="App">
      <div onClick={() => window.location.reload(false)} id="logoContainer" className={kanji === null && word === null ? 'full' : 'clickable'}>
        <img src='/img/Logo1.png' alt='logo' />
        <img src='/img/Logo2.png' alt='logo' />
        <img src='/img/Logo3.png' alt='logo' />
      </div>
      {(kanji === null && word === null) && <div id="introText" className={searchExecuted ? "lowOpacity" : ""}>
        <p>
          Tetsudai a pour vocation d'assister l'étudiant en japonais durant son apprentissage de la langue,
          en lui fournissant un dictionnaire franco-japonais dont le contenu se veut à la fois complet et pertinent.
        </p>
      </div>}
      <MainDisplay
        // Displayed element
        kanji={kanji}
        changeCurrentKanjiByKanji={changeCurrentKanjiByKanji}
        word={word}
        changeCurrentWordById={changeCurrentWordById}
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
        // Content
        kanjis={kanjisWithVocabulary}
        vocabulary={vocabularyWithRelated}
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
        displayHistory={displayHistory}
        kanji={kanji}
        word={word}
        changeCurrentKanjiByKanji={changeCurrentKanjiByKanji}
        changeCurrentWordById={changeCurrentWordById}
      />
    </div>
  );
}

export default App;
