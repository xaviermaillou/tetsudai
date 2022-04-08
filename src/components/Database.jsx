import firebase from '../Firebase';
import "firebase/firestore";
import kanjis from '../data/kanjis'
import vocabulary from '../data/vocabulary';

const ResetDatabase = (props) => {
    const { kanjisList, vocabularyList, setPreventKanjiReload } = props;

    const resetDb = () => {
        setPreventKanjiReload(true);
        setTimeout(() => {
            kanjisList.forEach((kanji) => {
                firebase.firestore().collection('Kanjis').doc(kanji.doc.id).delete();
            });
            vocabularyList.forEach((kanji) => {
                firebase.firestore().collection('Vocabulary').doc(kanji.doc.id).delete();
            });
        
            kanjis.forEach((kanji) => {
                firebase.firestore().collection('Kanjis').doc().set(kanji);
            });
            vocabulary.forEach((word) => {
                firebase.firestore().collection('Vocabulary').doc().set(word);
            });
        }, 1000);
        setTimeout(() => {
            setPreventKanjiReload(false);
        }, 10000);
    }

    return (
        <div style={{
            height: '100px',
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