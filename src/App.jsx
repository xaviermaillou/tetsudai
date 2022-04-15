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
  const [relatedVocabulary, setRelatedVocabulary] = useState([]);

  useEffect(() => {
    if (!preventKanjiReload) setKanji(kanjisList[Math.floor(Math.random()*kanjisList.length)]);
  }, [kanjisList, preventKanjiReload]);

  useEffect(() => {
    const relatedVocabularyCopy = [];
    vocabularyList.forEach((word) => {
      word.elements.every((element) => {
        if (kanji && (element.kanji === kanji.kanji)) {
          relatedVocabularyCopy.push(word);
          return false;
        }
        return true;
      });
    });
    setRelatedVocabulary(relatedVocabularyCopy);
  }, [kanji, vocabularyList]);

  const changeCurrentWord = (id) => {
    setKanji(kanjisList.find((kanji) => kanji.doc.id === id))
  }
  const refreshWord = () => {
    setKanji(kanjisList[Math.floor(Math.random()*kanjisList.length)]);
  }

  return (
    <div className="App">
      <div id="header">
        <ResetDatabase kanjisList={kanjisList} vocabularyList={vocabularyList} setPreventKanjiReload={setPreventKanjiReload} />
      </div>
      <RandomDisplay kanji={kanji} refreshWord={refreshWord} vocabulary={relatedVocabulary} />
      <WordsList 
        words={kanjisList.sort((a, b) => a.strokes - b.strokes)}
        changeCurrentWord={changeCurrentWord}
        currentWord={kanji}
      />
    </div>
  );
}

export default App;
