import { useState, useEffect } from "react";
import firebase from '../Firebase';
import "firebase/firestore";
import kanjis from '../data/kanjis'
import vocabulary from '../data/vocabulary';

const ResetDatabase = (props) => {
    const { kanjisList, vocabularyList } = props;

    let erasedKanjis = 0;
    let erasedWords = 0;
    let addedKanjis = 0;
    let addedWords = 0;

    const resetDb = async () => {
        for (let i = 0; i < kanjisList.length; i++) {
            await firebase.firestore().collection('Kanjis').doc(kanjisList[i].doc.id).delete();
            erasedKanjis++;
        }
        for (let i = 0; i < vocabularyList.length; i++) {
            await firebase.firestore().collection('Vocabulary').doc(vocabularyList[i].doc.id).delete();
            erasedWords++;
        }
    
        for (let i = 0; i < kanjis.length; i++) {
            await firebase.firestore().collection('Kanjis').doc().set(kanjis[i]);
            addedKanjis++;
        }
        for (let i = 0; i < vocabulary.length; i++) {
            await firebase.firestore().collection('Vocabulary').doc().set(vocabulary[i]);
            addedWords++;
        }
        console.log('Erased kanjis', erasedKanjis);
        console.log('Erased words', erasedWords);
        console.log('Added kanjis', addedKanjis);
        console.log('Added words', addedWords);
    }

    return (
        <div style={{
            height: '60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <button
                style={{
                    width: 'fit-content',
                    padding: '5px',
                }}
                onClick={resetDb}
            >Renew database</button>
        </div>
    )
}

export default ResetDatabase;