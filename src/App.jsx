import firebase from './Firebase';
import "firebase/firestore";
import { useState, useEffect } from 'react';
import './App.css';
import RandomDisplay from './components/RandomDisplay';
import ResetDatabase from './components/Database'

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

  return (
    <div className="App">
      <div id="header">
        <ResetDatabase kanjisList={kanjisList} vocabularyList={vocabularyList} setPreventKanjiReload={setPreventKanjiReload} />
      </div>
      <RandomDisplay kanjis={kanjisList} vocabulary={vocabularyList} preventKanjiReload={preventKanjiReload} />
    </div>
  );
}

export default App;
