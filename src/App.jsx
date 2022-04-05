import firebase from './Firebase';
import "firebase/firestore";
import { useState, useEffect } from 'react';
import './App.css';
import RandomDisplay from './components/RandomDisplay';
import Database from './components/Database'

function App() {
  const [vocabulary, setVocabulary] = useState([]);

  useEffect(() => {
    firebase.firestore().collection('Vocabulary').onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setVocabulary(data);
    });
  }, []);

  return (
    <div className="App">
      <div id="header">
        <Database />
      </div>
      <RandomDisplay words={vocabulary} />
    </div>
  );
}

export default App;
