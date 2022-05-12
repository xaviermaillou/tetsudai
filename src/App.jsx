import firebase from './Firebase';
import "firebase/firestore";
import { useState, useEffect } from 'react';
import './App.css';
import './themes/light.css';
import MainDisplay from './components/MainDisplay';
import ResetDatabase from './components/Database';
import SidePanel from './components/SidePanel';
import { levels } from "./lib/common";

function App() {
  const [kanjisList, setKanjisList] = useState([]);
  const [vocabularyList, setVocabularyList] = useState([]);

  const [kanjisWithVocabulary, setKanjisWithVocabulary] = useState([]);
  const [vocabularyWithKanjis, setVocabularyWithKanjis] = useState([]);

  useEffect(() => {
    firebase.firestore().collection('Kanjis').onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        doc,
      }));
      setKanjisList(data);
    });
    firebase.firestore().collection('Vocabulary').onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        doc,
      }));
      setVocabularyList(data);
    });
  }, []);

  useEffect(() => {
    const kanjisListCopy = [ ...kanjisList ];
    const vocabularyListCopy = [ ...vocabularyList ];
    kanjisListCopy.forEach((kanji) => {
      kanji.vocabulary = [];
      kanji.grammar = [];
      vocabularyListCopy.forEach((word) => {
        word.elements.every((element) => {
          if (kanji.kanji === element.kanji) {
            kanji.vocabulary.push(word);
            kanji.grammar.push(word.grammar);
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
    }, 400);
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
        && (word.grammar === grammar || !grammar)
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
