import firebase from './Firebase';
import "firebase/firestore";
import { useState, useEffect } from 'react';
import './App.css';
import './themes/light.css';
import MainDisplay from './components/MainDisplay';
import ResetDatabase from './components/Database';
import SidePanel from './components/SidePanel';
import { levels, sortByObjectKey, cutStringToArray } from "./lib/common";

function App() {
  const [kanjisList, setKanjisList] = useState([]);
  const [vocabularyList, setVocabularyList] = useState([]);

  const [kanjisWithVocabulary, setKanjisWithVocabulary] = useState([]);
  const [vocabularyWithKanjis, setVocabularyWithKanjis] = useState([]);

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
  }, []);

  useEffect(() => {
    const kanjisListCopy = [ ...kanjisList ];
    const vocabularyListCopy = [ ...vocabularyList ];
    kanjisListCopy.forEach((kanji) => {
      kanji.translationArray = cutStringToArray(kanji.translation);
      kanji.vocabulary = [];
      kanji.grammar = [];
      vocabularyListCopy.forEach((word) => {
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
      });
    });
    setKanjisWithVocabulary(kanjisListCopy);
    setVocabularyWithKanjis(vocabularyListCopy);
  }, [kanjisList, vocabularyList]);

  // useEffect(() => {
  //   const vocabularyListCopy = [ ...vocabularyList ];
  //   vocabularyListCopy.forEach((word) => {
  //     word.elements.forEach((element) => {
  //       element.details = kanjisList.find((kanji) => kanji.kanji === element.kanji);
  //     });
  //   });
  //   setVocabularyWithKanjis(vocabularyListCopy);
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
  const [filteredWords, setFilteredWords] = useState([...vocabularyWithKanjis])

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
    vocabularyWithKanjis.forEach((word) => {
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
  }, [collection, level, grammar, kanjisWithVocabulary, vocabularyWithKanjis]);

  const changeCurrentKanjiById = (id) => {
    setWord(null);
    setKanji(kanjisWithVocabulary.find((item) => item.doc.id === id));
  }
  const changeCurrentKanjiByKanji = (kanji) => {
    setWord(null);
    setKanji(kanjisWithVocabulary.find((item) => item.kanji === kanji));
  }
  const randomKanji = (type) => {
    if (type === 1 || trainingMode === 1) {
      setWord(null);
      setKanji(filteredKanjis[Math.floor(Math.random()*filteredKanjis.length)]);
    } 
    if (type === 2 || trainingMode === 2) {
      setKanji(null);
      console.log(filteredWords);
      setWord(filteredWords[Math.floor(Math.random()*filteredWords.length)]);
    } 
  }

  const changeCurrentWordById = (id) => {
    setKanji(null);
    setWord(vocabularyWithKanjis.find((item) => item.doc.id === id));
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

  return (
    <div className="App">
      <div id="header">
        <ResetDatabase kanjisList={kanjisList} vocabularyList={vocabularyList} />
      </div>
      <img id="logoContainer" className={kanji || word ? '' : 'full'} src='/img/main_logo.png' alt='logo' />
      {(!kanji && !word) && <div id="introText">
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
        vocabulary={vocabularyWithKanjis}
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
      />
    </div>
  );
}

export default App;
