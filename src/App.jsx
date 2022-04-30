import firebase from './Firebase';
import "firebase/firestore";
import { useState, useEffect } from 'react';
import './App.css';
import './themes/light.css';
import KanjiDisplay from './components/KanjiDisplay';
import ResetDatabase from './components/Database';
import SidePanel from './components/SidePanel';

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
    kanjisListCopy.forEach((kanji) => {
      kanji.vocabulary = [];
      kanji.grammar = [];
      vocabularyList.forEach((word) => {
        word.elements.every((element) => {
          if (kanji.kanji === element.kanji) {
            kanji.vocabulary.push(word);
            kanji.grammar.push(word.grammar);
            return false;
          }
          return true;
        });
      });
    });
    setKanjisWithVocabulary(kanjisListCopy);
  }, [kanjisList, vocabularyList]);

  useEffect(() => {
    const vocabularyListCopy = [ ...vocabularyList ];
    vocabularyListCopy.forEach((word) => {
      word.elements.forEach((element) => {
        element.details = kanjisList.find((kanji) => kanji.kanji === element.kanji);
      });
    });
    setVocabularyWithKanjis(vocabularyListCopy);
  }, [kanjisList, vocabularyList]);

  const [kanji, setKanji] = useState(null);
  const [word, setWord] = useState(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [collection, setCollection] = useState(0);
  const [level, setLevel] = useState("");
  const [grammar, setGrammar] = useState(0);
  const [search, setSearch] = useState("");
  const [filterIndication, setFilterIndication] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMenuOpen(true);
    }, 400);
  }, []);

  const [filtersApplied] = useState(true);

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

  useEffect(() => {
    const kanjisListCopy = [];
    kanjisWithVocabulary.forEach((kanji) => {
      if (
        (kanji.collections?.includes(collection) || collection === 0)
        && (level === kanji.level || !level)
        && (kanji.grammar.includes(grammar) || !grammar)
      ) {
        kanjisListCopy.push(kanji)
      }
    });
    setFilteredKanjis(kanjisListCopy)
  }, [collection, level, grammar, kanjisWithVocabulary]);

  const changeCurrentKanjiById = (id) => {
    setWord(null);
    setKanji(kanjisWithVocabulary.find((item) => item.doc.id === id));
  }
  const changeCurrentKanjiByKanji = (kanji) => {
    setWord(null);
    setKanji(kanjisWithVocabulary.find((item) => item.kanji === kanji));
  }
  const randomKanji = () => {
    filtersApplied ? 
      setKanji(filteredKanjis[Math.floor(Math.random()*filteredKanjis.length)]) :
      setKanji(kanjisWithVocabulary[Math.floor(Math.random()*kanjisWithVocabulary.length)]);
  }

  const changeCurrentWordById = (id) => {
    setKanji(null);
    setWord(vocabularyWithKanjis.find((item) => item.doc.id === id));
  }

  const [trainingMode, setTrainingMode] = useState(false);
  const [allDisplayed, setAllDisplayed] = useState(true);
  const toggleTraining = (boolean) => {
    if (boolean) {
      setMenuOpen(false);
      setTrainingMode(true);
      randomKanji();
    } else {
      setTrainingMode(false);
      setFilterIndication(false);
      setAllDisplayed(true);
    }
  }

  return (
    <div className="App">
      <div id="header">
        <ResetDatabase kanjisList={kanjisList} vocabularyList={vocabularyList} />
      </div>
      <KanjiDisplay
        // Displayed kanji
        kanji={kanji}
        changeCurrentKanjiByKanji={changeCurrentKanjiByKanji}

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
        kanjis={kanjisWithVocabulary?.sort((a, b) => a.strokes - b.strokes)}
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
