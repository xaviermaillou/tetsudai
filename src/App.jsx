import firebase from './Firebase';
import "firebase/firestore";
import { useState, useEffect } from 'react';
import './App.css';
import KanjiDisplay from './components/KanjiDisplay';
import ResetDatabase from './components/Database';
import SidePanel from './components/SidePanel';

function App() {
  const [kanjisList, setKanjisList] = useState([]);
  const [vocabularyList, setVocabularyList] = useState([]);
  const [kanjisWithVocabulary, setKanjisWithVocabulary] = useState([]);

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

  // console.log(kanjisList.length, ' kanjis loaded');
  // console.log(vocabularyList.length, ' words loaded');

  const [kanji, setKanji] = useState('');

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

  const [menuOpen, setMenuOpen] = useState(false);
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
      if ((level === kanji.level || !level) && (kanji.grammar.includes(grammar) || !grammar)) {
        kanjisListCopy.push(kanji)
      }
    });
    setFilteredKanjis(kanjisListCopy)
  }, [level, grammar, kanjisWithVocabulary]);

  const changeCurrentWord = (id) => {
    setKanji(kanjisWithVocabulary.find((kanji) => kanji.doc.id === id))
  }
  const refreshWord = () => {
    filtersApplied ? 
      setKanji(filteredKanjis[Math.floor(Math.random()*filteredKanjis.length)]) :
      setKanji(kanjisWithVocabulary[Math.floor(Math.random()*kanjisWithVocabulary.length)]);
  }

  const [trainingMode, setTrainingMode] = useState(false);
  const [allDisplayed, setAllDisplayed] = useState(true);
  const toggleTraining = (boolean) => {
    if (boolean) {
      if (window.innerWidth < window.innerHeight) setMenuOpen(false);
      setTrainingMode(true);
      refreshWord();
    } else {
      setTrainingMode(false);
      setFilterIndication(false);
      setAllDisplayed(true);
    }
  }

  return (
    <div className="App">
      <div id="header">
        <ResetDatabase kanjisList={kanjisWithVocabulary} vocabularyList={vocabularyList} />
      </div>
      <KanjiDisplay
        allDisplayed={allDisplayed}
        setAllDisplayed={setAllDisplayed}
        trainingMode={trainingMode}
        kanji={kanji}
        refreshWord={refreshWord}
        compressed={menuOpen}
        filtersApplied={filtersApplied}
        level={level}
        grammar={grammar}
        checkTrainingFilters={checkTrainingFilters}
        toggleTraining={toggleTraining}
      />
      <SidePanel 
        kanjis={kanjisWithVocabulary?.sort((a, b) => a.strokes - b.strokes)}
        changeCurrentWord={changeCurrentWord}
        currentWord={kanji}
        open={menuOpen}
        setOpen={setMenuOpen}
        level={level}
        setLevel={setLevel}
        grammar={grammar}
        setGrammar={setGrammar}
        search={search}
        setSearch={setSearch}
        filterIndication={filterIndication}
        trainingMode={trainingMode}
        toggleTraining={toggleTraining}
      />
    </div>
  );
}

export default App;
