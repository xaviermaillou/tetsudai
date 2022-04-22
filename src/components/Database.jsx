import firebase from '../Firebase';
import "firebase/firestore";
import kanjis from '../data/kanjis'
import vocabulary from '../data/vocabulary';

const ResetDatabase = (props) => {
    const { kanjisList, vocabularyList, setPreventKanjiReload } = props;

    const resetDb = () => {
        setPreventKanjiReload(true);
        setTimeout(() => {
            let erasedKanjis = 0;
            let erasedWords = 0;
            kanjisList.forEach((kanji) => {
                firebase.firestore().collection('Kanjis').doc(kanji.doc.id).delete();
                erasedKanjis++;
            });
            vocabularyList.forEach((word) => {
                firebase.firestore().collection('Vocabulary').doc(word.doc.id).delete();
                erasedWords++;
            });
        
            let addedKanjis = 0;
            let addedWords = 0;
            kanjis.forEach((kanji) => {
                firebase.firestore().collection('Kanjis').doc().set(kanji);
                addedKanjis++;
            });
            vocabulary.forEach((word) => {
                firebase.firestore().collection('Vocabulary').doc().set(word);
                addedWords++;
            });
            console.log('Erased kanjis', erasedKanjis);
            console.log('Erased words', erasedWords);
            console.log('Added kanjis', addedKanjis);
            console.log('Added words', addedWords);
        }, 1000);
        setTimeout(() => {
            setPreventKanjiReload(false);
        }, 20000);
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