import { useState } from "react";

const ListElement = (props) => {
    const { word, changeCurrentWord, setOpen, currentWord } = props;

    const clickHandle = (id) => {
        changeCurrentWord(id);
        setOpen(false);
    }

    return (
        <div 
            className={(currentWord && currentWord.translation === word.translation) ? "wordsListElement selected" : "wordsListElement"}
            onClick={() => clickHandle(word.doc.id)}
        >
            <div id="wordsListElementKanji">
                {word.kanji}
            </div>
            <div id="wordsListElementKana">
                <div>
                    {
                        word.readings.kunyomi?.map((item, i) => (
                            <span key={i}>
                                {i > 0 && ', '}
                                {item.kana}
                            </span>
                        ))
                    }
                    {
                        (word.readings.kunyomi.length>0 && word.readings.onyomi.length>0) && 
                        <>
                            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                        </>
                    }
                    {
                        word.readings.onyomi?.map((item, i) => (
                            <span key={i}>
                                {i > 0 && ', '}
                                {item.kana}
                            </span>
                        ))
                    }
                </div>
                <div id="wordsListElementTranslation">
                    {word.translation}
                </div>
            </div>
        </div>
    )
}

const WordsList = (props) => {
    const { words, changeCurrentWord, currentWord } = props;
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
        console.log(open);
    }

    return (
        <div id="wordsListContainer" className={open ? "open" : ""}>
            <div id="wordsListIndicator" className={open ? "open" : ""}><img onClick={toggle} src="/img/up.png" alt="see all words" /></div>
            <div id="wordsList">
                {words.map((item, i) => (
                    <ListElement
                        word={item}
                        changeCurrentWord={changeCurrentWord}
                        currentWord={currentWord}
                        setOpen={setOpen}
                        key={i}
                    />
                ))}
            </div>
        </div>
    )
}

export default WordsList;