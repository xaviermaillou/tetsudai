import { useState } from "react";

const ListElement = (props) => {
    const { obj, word } = props;
    return (
        <div className={(word && word.translation === obj.translation) ? "wordsListElement selected" : "wordsListElement"}>
            <div id="wordsListElementKanji">
                {obj.kanji}
            </div>
            <div id="wordsListElementKana">
                <div>
                    {
                        obj.readings.kunyomi?.map((item, i) => (
                            <span key={i}>
                                {i > 0 && ', '}
                                {item.kana}
                            </span>
                        ))
                    }
                    {
                        (obj.readings.kunyomi.length>0 && obj.readings.onyomi.length>0) && 
                        <>
                            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                        </>
                    }
                    {
                        obj.readings.onyomi?.map((item, i) => (
                            <span key={i}>
                                {i > 0 && ', '}
                                {item.kana}
                            </span>
                        ))
                    }
                </div>
                <div id="wordsListElementTranslation">
                    {obj.translation}
                </div>
            </div>
        </div>
    )
}

const WordsList = (props) => {
    const { words, currentWord } = props;
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
        console.log(open);
    }

    return (
        <div id="wordsListContainer" className={open ? "mainContainer open" : "mainContainer"}>
            <div id="wordsListIndicator" className={open ? "open" : ""} onClick={toggle}><img src="/img/up.png" alt="see all words" /></div>
            <div id="wordsList">
                {words.map((item, i) => (
                    <ListElement obj={item} word={currentWord} key={i} />
                ))}
            </div>
        </div>
    )
}

export default WordsList;