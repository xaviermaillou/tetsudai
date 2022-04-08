import firebase from '../Firebase';
import "firebase/firestore";
import kanjis from '../data/kanjis'
import vocabulary from '../data/vocabulary';

const resetDb = (kanjisList, vocabularyList) => {
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
}

const ResetDatabase = (props) => {
    const { kanjisList, vocabularyList } = props;

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
                onClick={() => resetDb(kanjisList, vocabularyList)}
            >Renew database</button>
        </div>
    )
}

export default ResetDatabase;