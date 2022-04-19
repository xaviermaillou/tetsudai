import { useState } from "react";

const ListHeader = (props) => {
    const {
        open,
        toggle,
        level,
        setLevel,
        grammar,
        setGrammar,
    } = props;

    const [filter, setFilter] = useState(1);

    return (
        <div id="wordsListIndicator" className={open ? "open" : ""}>
            <img onClick={toggle} src="/img/up.png" alt="see all words" />
            <div id="wordsListHFilters">
                <div>
                    <span className={filter === 1 ? "selected" : ""} onClick={() => setFilter(1)}>Niveaux JLPT</span>
                    <span className={filter === 2 ? "selected" : ""} onClick={() => setFilter(2)}>Fonction grammaticale</span>
                </div>
                {filter === 1 && <div>
                    <span className={level === "" ? "selected" : ""} onClick={() => setLevel("")} >Tous</span>
                    <span className={level === "N5" ? "selected" : ""} onClick={() => setLevel("N5")} >N5</span>
                    <span className={level === "N4" ? "selected" : ""} onClick={() => setLevel("N4")} >N4</span>
                    <span className={level === "N3" ? "selected" : ""} onClick={() => setLevel("N3")} >N3</span>
                    <span className={level === "N2" ? "selected" : ""} onClick={() => setLevel("N2")} >N2</span>
                    <span className={level === "N1" ? "selected" : ""} onClick={() => setLevel("N1")} >N1</span>
                </div>}
                {filter === 2 && <div>
                    <span className={grammar === null ? "selected" : ""} onClick={() => setGrammar(null)} >Tous</span>
                    <span className={grammar === 0 ? "selected" : ""} onClick={() => setGrammar(0)} >Communs</span>
                    <span className={grammar === 1 ? "selected" : ""} onClick={() => setGrammar(1)} >Propres</span>
                    <span className={grammar === 2 ? "selected" : ""} onClick={() => setGrammar(2)} >Verbes</span>
                    <span className={grammar === 3 ? "selected" : ""} onClick={() => setGrammar(3)} >Adjectifs</span>
                </div>}
            </div>
        </div>
    );
}

const ListElement = (props) => {
    const {
        kanji,
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
        <div className={((level === kanji.level || !level) && (kanji.grammar.includes(grammar) || !grammar)) ?
            "wordsListElementContainer open" : "wordsListElementContainer"}
        >
            <div 
                className={(currentWord && currentWord.translation === kanji.translation) ?
                    "wordsListElement selected" : "wordsListElement"}
                onClick={() => clickHandle(kanji.doc.id)}
            >
                <div id="wordsListElementKanji">
                    {kanji.kanji}
                </div>
                <div id="wordsListElementKana">
                    <div>
                        {
                            kanji.readings.kunyomi?.map((item, i) => (
                                <span key={i}>
                                    {i > 0 && ', '}
                                    {item.kana}
                                </span>
                            ))
                        }
                        {
                            (kanji.readings.kunyomi.length>0 && kanji.readings.onyomi.length>0) && 
                            <>
                                &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                            </>
                        }
                        {
                            kanji.readings.onyomi?.map((item, i) => (
                                <span key={i}>
                                    {i > 0 && ', '}
                                    {item.kana}
                                </span>
                            ))
                        }
                    </div>
                    <div id="wordsListElementTranslation">
                        {kanji.translation}
                    </div>
                </div>
            </div>
        </div>
    )
}

const WordsList = (props) => {
    const {
        kanjis,
        changeCurrentWord,
        currentWord,
        open,
        setOpen,
        level,
        setLevel,
        grammar,
        setGrammar,
    } = props;

    const toggle = () => {
        setOpen(!open);
    }

    return (
        <div id="wordsListContainer" className={open ? "open" : ""}>
            <ListHeader
                open={open}
                toggle={toggle}
                level={level}
                setLevel={setLevel}
                grammar={grammar}
                setGrammar={setGrammar}
            />
            <div id="wordsList" className={open ? "open" : ""}>
                {kanjis.map((item, i) => (
                    <ListElement
                        kanji={item}
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