import { useState } from "react";

const ListElement = (props) => {
    const {
        word,
        changeCurrentWord,
        setOpen,
        currentWord,
        level,
    } = props;

    const clickHandle = (id) => {
        changeCurrentWord(id);
        setOpen(false);
    }

    return (
        <div className={(level === word.level || !level) ? "wordsListElementContainer open" : "wordsListElementContainer"}>
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
        </div>
    )
}

const WordsList = (props) => {
    const { kanjis, changeCurrentWord, currentWord } = props;
    const [open, setOpen] = useState(false);

    const [toggleDisplay, setToggleDisplay] = useState(2);
    const [level, setLevel] = useState("");
    const [grammar, setGrammar] = useState("");

    const toggle = () => {
        setOpen(!open);
        console.log(open);
    }

    return (
        <div id="wordsListContainer" className={open ? "open" : ""}>
            <div id="wordsListIndicator" className={open ? "open" : ""}>
                <img onClick={toggle} src="/img/up.png" alt="see all words" />
                    <div className="wordsListHeader">
                    <span className={level === "" ? "selected" : ""} onClick={() => setLevel("")} >Tous</span>
                    <span className={level === "N5" ? "selected" : ""} onClick={() => setLevel("N5")} >N5</span>
                    <span className={level === "N4" ? "selected" : ""} onClick={() => setLevel("N4")} >N4</span>
                    <span className={level === "N3" ? "selected" : ""} onClick={() => setLevel("N3")} >N3</span>
                    <span className={level === "N2" ? "selected" : ""} onClick={() => setLevel("N2")} >N2</span>
                    <span className={level === "N1" ? "selected" : ""} onClick={() => setLevel("N1")} >N1</span>
                </div>
            </div>
            <div id="wordsList" className={open ? "open" : ""}>
                {kanjis.map((item, i) => (
                    <ListElement
                        word={item}
                        changeCurrentWord={changeCurrentWord}
                        setOpen={setOpen}
                        currentWord={currentWord}
                        level={level}
                        key={i}
                    />
                ))}
            </div>
        </div>
    )
}

export default WordsList;