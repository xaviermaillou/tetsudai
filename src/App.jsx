import firebase from './Firebase';
import "firebase/firestore";
import { useState, useEffect } from 'react';
import './App.css';
import RandomDisplay from './components/RandomDisplay';
import ResetDatabase from './components/Database';
import WordsList from './components/WordsList';

function App() {
  const [kanjisList, setKanjisList] = useState([]);
  const [vocabularyList, setVocabularyList] = useState([]);
  const [kanjisWithVocabulary, setKanjisWithVocabulary] = useState([]);
  const [preventKanjiReload, setPreventKanjiReload] = useState(false);

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

  const [kanji, setKanji] = useState('');

  useEffect(() => {
    if (!preventKanjiReload) setKanji(kanjisWithVocabulary[Math.floor(Math.random()*kanjisWithVocabulary.length)]);
  }, [kanjisWithVocabulary, preventKanjiReload]);

  useEffect(() => {
    const kanjisListCopy = [ ...kanjisList ];
    kanjisListCopy.forEach((kanji) => {
      kanji.vocabulary = [];
      kanji.grammar = [];
      vocabularyList.forEach((word) => {
        word.elements.forEach((element) => {
          if (kanji.kanji === element.kanji) {
            kanji.vocabulary.push(word);
            kanji.grammar.push(word.grammar);
          }
        });
      });
    });
    setKanjisWithVocabulary(kanjisListCopy);
  }, [kanjisList, vocabularyList]);

  const [filtersApplied, setFiltersApplied] = useState(false);
  const [filteredKanjis, setFilteredKanjis] = useState([...kanjisWithVocabulary])

  const [menuOpen, setMenuOpen] = useState(false);
  const [level, setLevel] = useState("");
  const [grammar, setGrammar] = useState(null);

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

  return (
    <div className="App">
      <div id="header">
        <ResetDatabase kanjisList={kanjisWithVocabulary} vocabularyList={vocabularyList} setPreventKanjiReload={setPreventKanjiReload} />
      </div>
      <RandomDisplay
        kanji={kanji}
        refreshWord={refreshWord}
        compressed={menuOpen}
        filtersApplied={filtersApplied}
        setFiltersApplied={setFiltersApplied}
      />
      <WordsList 
        kanjis={kanjisWithVocabulary?.sort((a, b) => a.strokes - b.strokes)}
        changeCurrentWord={changeCurrentWord}
        currentWord={kanji}
        open={menuOpen}
        setOpen={setMenuOpen}
        level={level}
        setLevel={setLevel}
        grammar={grammar}
        setGrammar={setGrammar}

      />
    </div>
  );
}

export default App;
