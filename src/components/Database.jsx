import { useState } from "react";
import firebase from '../Firebase';
import "firebase/firestore";
import kanjis from '../data/kanjis'
import vocabulary from '../data/vocabulary';
import sentences from '../data/sentences';

const ResetDatabase = (props) => {
    const { kanjisList, vocabularyList, sentencesList } = props;
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    let erasedKanjis = 0;
    let erasedWords = 0;
    let erasedSentences = 0;
    let addedKanjis = 0;
    let addedWords = 0;
    let addedSentences = 0;

    const resetDb = async () => {
        setLoading(true);
        for (let i = 0; i < kanjisList.length; i++) {
            await firebase.firestore().collection('Kanjis').doc(kanjisList[i].doc.id).delete();
            erasedKanjis++;
        }
        for (let i = 0; i < vocabularyList.length; i++) {
            await firebase.firestore().collection('Vocabulary').doc(vocabularyList[i].doc.id).delete();
            erasedWords++;
        }
        for (let i = 0; i < sentencesList.length; i++) {
            await firebase.firestore().collection('Sentences').doc(sentencesList[i].doc.id).delete();
            erasedSentences++;
        }
    
        for (let i = 0; i < kanjis.length; i++) {
            await firebase.firestore().collection('Kanjis').doc().set(kanjis[i]);
            addedKanjis++;
        }
        for (let i = 0; i < vocabulary.length; i++) {
            await firebase.firestore().collection('Vocabulary').doc().set(vocabulary[i]);
            addedWords++;
        }
        for (let i = 0; i < sentences.length; i++) {
            await firebase.firestore().collection('Sentences').doc().set(sentences[i]);
            addedSentences++;
        }

        setLoading(false);
        setSuccessMessage(`${addedKanjis} kanjis loaded, ${addedWords} words loaded`);
        console.log('Erased kanjis', erasedKanjis);
        console.log('Erased words', erasedWords);
        console.log('Erased sentences', erasedSentences);
        console.log('Added kanjis', addedKanjis);
        console.log('Added words', addedWords);
        console.log('Added sentences', addedSentences);
    }

    return (
        <div style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            opacity: '0.75',
        }}>
            <button
                style={{
                    width: 'fit-content',
                    padding: '20px',
                    background: 'none',
                    borderRadius: '5px'
                }}
                onClick={resetDb}
            >Renew database</button>
            {loading ? <img style={{
                height: '50px',
                width: '80px',
            }} src="/img/loading.gif" alt="loading" />
            : <span style={{
                marginLeft: '20px',
            }}>
                {successMessage}
            </span>}
        </div>
    )
}

export default ResetDatabase;