import { useState, useEffect } from "react";

const ListHeader = (props) => {
    const {
        open,
        toggle,
        level,
        setLevel,
        grammar,
        setGrammar,
        search,
        setSearch,
        filterError,
        setFilterError,
    } = props;

    const [filter, setFilter] = useState(3);
    useEffect(() => {
        if (filterError) setFilter(1);
    }, [filterError]);

    return (
        <div id="wordsListIndicator" className={filterError ? "focused" : ""}>
            <img id="wordsListOpener" className={open ? "open" : ""} onClick={toggle} src="/img/up.png" alt="see all words" />
            <div id="wordsListHFilters" onClick={() => setFilterError("")}>
                <div>
                    <span className={filter === 1 ? "selected" : ""} onClick={() => setFilter(1)}>JLPT</span>
                    <span className={filter === 2 ? "selected" : ""} onClick={() => setFilter(2)}>Classe</span>
                    <span className={filter === 3 ? "selected" : ""} onClick={() => setFilter(3)}><img src="/img/search.png" alt="search" /></span>
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
                    <span className={grammar === 0 ? "selected" : ""} onClick={() => setGrammar(0)} >Tous</span>
                    <span className={grammar === 1 ? "selected" : ""} onClick={() => setGrammar(1)} >Communs</span>
                    <span className={grammar === 2 ? "selected" : ""} onClick={() => setGrammar(2)} >Propres</span>
                    <span className={grammar === 3 ? "selected" : ""} onClick={() => setGrammar(3)} >Verbes</span>
                    <span className={grammar === 4 ? "selected" : ""} onClick={() => setGrammar(4)} >Adjectifs</span>
                </div>}
                {filter === 3 && <div>
                    <input value={search} onChange={(e) => {setSearch(e.target.value)}} type="text" placeholder="Rechercher par traduction" />
                </div>}
            </div>
            <span id="wordsListFiltersErrorMessage">{filterError}</span>
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
        search,
    } = props;

    const clickHandle = (id) => {
        changeCurrentWord(id);
        if (window.innerWidth < window.innerHeight) setOpen(false);
    }

    const searchThroughVocabulary = (vocabulary, string) => {
        let includes = false;
        vocabulary.forEach((word) => {
            if (word.translation.includes(string)) includes = true;
        });

        return includes;
    }

    return (
        <div className={((level === kanji.level || !level) 
            && (kanji.grammar.includes(grammar) || !grammar)) 
            && (kanji.translation.toLowerCase().includes(search.toLowerCase()) || searchThroughVocabulary(kanji.vocabulary, search) || !search) ?
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

const SidePanel = (props) => {
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
        search,
        setSearch,
        filterError,
        setFilterError,
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
                search={search}
                setSearch={setSearch}
                filterError={filterError}
                setFilterError={setFilterError}
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
                        search={search}
                        key={i}
                    />
                ))}
            </div>
        </div>
    )
}

export default SidePanel;