import { useState } from "react";

const ListElement = (props) => {
    const {
        word,
        changeCurrentWord,
        setOpen,
        currentWord,
        level,
        grammar,
    } = props;

    const clickHandle = (id) => {
        changeCurrentWord(id);
        if (window.innerWidth < window.innerHeight) setOpen(false);
    }

    return (
        <div className={((level === word.level || !level) && (word.grammar.includes(grammar) || !grammar)) ?
            "wordsListElementContainer open" : "wordsListElementContainer"}
        >
            <div 
                className={(currentWord && currentWord.translation === word.translation) ?
                    "wordsListElement selected" : "wordsListElement"}
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
    const { kanjis, changeCurrentWord, currentWord, open, setOpen } = props;

    const [toggleDisplay, setToggleDisplay] = useState(1);
    const [level, setLevel] = useState("");
    const [grammar, setGrammar] = useState(null);

    const toggle = () => {
        setOpen(!open);
        console.log(open);
    }

    return (
        <div id="wordsListContainer" className={open ? "open" : ""}>
            <div id="wordsListIndicator" className={open ? "open" : ""}>
                <img onClick={toggle} src="/img/up.png" alt="see all words" />
                <div id="wordsListHeader">
                    <div>
                        <span className={toggleDisplay === 1 ? "selected" : ""} onClick={() => setToggleDisplay(1)}>Niveaux JLPT</span>
                        <span className={toggleDisplay === 2 ? "selected" : ""} onClick={() => setToggleDisplay(2)}>Fonction grammaticale</span>
                    </div>
                    {toggleDisplay === 1 && <div>
                        <span className={level === "" ? "selected" : ""} onClick={() => setLevel("")} >Tous</span>
                        <span className={level === "N5" ? "selected" : ""} onClick={() => setLevel("N5")} >N5</span>
                        <span className={level === "N4" ? "selected" : ""} onClick={() => setLevel("N4")} >N4</span>
                        <span className={level === "N3" ? "selected" : ""} onClick={() => setLevel("N3")} >N3</span>
                        <span className={level === "N2" ? "selected" : ""} onClick={() => setLevel("N2")} >N2</span>
                        <span className={level === "N1" ? "selected" : ""} onClick={() => setLevel("N1")} >N1</span>
                    </div>}
                    {toggleDisplay === 2 && <div>
                        <span className={grammar === null ? "selected" : ""} onClick={() => setGrammar(null)} >Tous</span>
                        <span className={grammar === 0 ? "selected" : ""} onClick={() => setGrammar(0)} >Communs</span>
                        <span className={grammar === 1 ? "selected" : ""} onClick={() => setGrammar(1)} >Propres</span>
                        <span className={grammar === 2 ? "selected" : ""} onClick={() => setGrammar(2)} >Verbes</span>
                        <span className={grammar === 3 ? "selected" : ""} onClick={() => setGrammar(3)} >Adjectifs</span>
                    </div>}
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
                        grammar={grammar}
                        key={i}
                    />
                ))}
            </div>
        </div>
    )
}

export default WordsList;