import firebase from '../Firebase';
import "firebase/firestore";
import words from '../data/words'

const resetDb = () => {
    words.forEach((kanji) => {
        firebase.firestore().collection('Vocabulary').doc().set(kanji);
    })
}

const AddKanji = () => {

    return (
        <div>
            <button onClick={resetDb}>Renew database</button>
        </div>
    )
}

export default AddKanji;