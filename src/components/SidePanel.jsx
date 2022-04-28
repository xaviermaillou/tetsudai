import { useState, useEffect } from "react";

const ListHeader = (props) => {
    const {
        open,
        toggle,
        collection,
        setCollection,
        level,
        setLevel,
        grammar,
        setGrammar,
        filterIndication,
        trainingMode,
        toggleTraining,
    } = props;

    const [filter, setFilter] = useState(1);
    useEffect(() => {
        if (filterIndication) setFilter(1);
    }, [filterIndication, filter]);

    const collections = {
        1: "150 kanjis essentiels"
    }

    const classes = {
        1: "Noms communs",
        2: "Noms propres",
        3: "Verbes",
        4: "Adjectifs",
        5: "Adverbes",
    }

    return (
        <div id="wordsListHeader" className={filterIndication ? "focused" : ""}>
            <img id="wordsListOpener" className={open ? "open" : ""} onClick={toggle} src="/img/up.png" alt="see all words" />
            {!trainingMode && <img id="wordsListTrainer" onClick={toggleTraining} src="/img/book.png" alt="training" />}
            <div id="wordsListFilters">
                <div>
                    <span className={filter === 1 ? "selected" : ""} onClick={() => setFilter(1)}>Collections</span>
                    <span className={filter === 2 ? "selected" : ""} onClick={() => setFilter(2)}>JLPT</span>
                    <span className={filter === 3 ? "selected" : ""} onClick={() => setFilter(3)}>Classe</span>
                </div>
                {filter === 1 && <div>
                    <span className={collection === 0 ? "selected" : ""} onClick={() => setCollection(0)} >Tous</span>
                    <span className={collection === 1 ? "selected" : ""} onClick={() => setCollection(1)} >150 kanjis essentiels</span>
                </div>}
                {filter === 2 && <div>
                    <span className={level === "" ? "selected" : ""} onClick={() => setLevel("")} >Tous</span>
                    <span className={level === "N5" ? "selected" : ""} onClick={() => setLevel("N5")} >N5</span>
                    <span className={level === "N4" ? "selected" : ""} onClick={() => setLevel("N4")} >N4</span>
                    <span className={level === "N3" ? "selected" : ""} onClick={() => setLevel("N3")} >N3</span>
                    <span className={level === "N2" ? "selected" : ""} onClick={() => setLevel("N2")} >N2</span>
                    <span className={level === "N1" ? "selected" : ""} onClick={() => setLevel("N1")} >N1</span>
                </div>}
                {filter === 3 && <div>
                    <span className={grammar === 0 ? "selected" : ""} onClick={() => setGrammar(0)} >Tous</span>
                    <span className={grammar === 1 ? "selected" : ""} onClick={() => setGrammar(1)} >Communs</span>
                    <span className={grammar === 2 ? "selected" : ""} onClick={() => setGrammar(2)} >Propres</span>
                    <span className={grammar === 3 ? "selected" : ""} onClick={() => setGrammar(3)} >Verbes</span>
                    <span className={grammar === 4 ? "selected" : ""} onClick={() => setGrammar(4)} >Adjectifs</span>
                </div>}
                <div id="filtersIndicator">
                    <span>
                        {grammar || level ? "Kanjis" : ""}
                        {level ? ` de niveau ${level}` : ""}{grammar ? ` contenant des ${classes[grammar].toLowerCase()}` : ""}
                        {!grammar && !level ? "Tous les kanjis" : ""}
                        {collection !== 0 && ` dans "${collections[collection]}"`}
                    </span>
                </div>
            </div>
        </div>
    );
}

const ListElement = (props) => {
    const {
        kanji,
        changeCurrentWordById,
        setOpen,
        currentWord,
        collection,
        level,
        grammar,
        search,
    } = props;

    const clickHandle = (id) => {
        changeCurrentWordById(id);
        if (window.innerWidth < window.innerHeight) setOpen(false);
    }

    const searchThroughVocabulary = (vocabulary, string) => {
        let includes = false;
        vocabulary.forEach((word) => {
            if (word.translation.toLowerCase().includes(string.toLowerCase())) includes = true;
        });

        return includes;
    }

    console.log(kanji);

    return (
        <div className={
            (
                (kanji.collections?.includes(collection) || collection === 0)
                && (level === kanji.level || !level) 
                && (kanji.grammar.includes(grammar) || grammar === 0)
            ) 
            && (kanji.translation.toLowerCase().includes(search.toLowerCase()) || searchThroughVocabulary(kanji.vocabulary, search) || !search)
            ? "wordsListElementContainer open" : "wordsListElementContainer"}
        >
            <div 
                className={(currentWord && currentWord.kanji === kanji.kanji) ?
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
        changeCurrentWordById,
        currentWord,
        open,
        setOpen,
        collection,
        setCollection,
        level,
        setLevel,
        grammar,
        setGrammar,
        search,
        setSearch,
        filterIndication,
        trainingMode,
        toggleTraining,
    } = props;

    const toggle = () => {
        setOpen(!open);
    }

    return (
        <div id="wordsListContainer" className={open ? "open" : ""}>
            <ListHeader
                open={open}
                toggle={toggle}
                collection={collection}
                setCollection={setCollection}
                level={level}
                setLevel={setLevel}
                grammar={grammar}
                setGrammar={setGrammar}
                search={search}
                setSearch={setSearch}
                filterIndication={filterIndication}
                trainingMode={trainingMode}
                toggleTraining={toggleTraining}
            />
            <div>
                <div id="wordsListSearch">
                    <img src="/img/search.png" alt="search" />
                    <input value={search} onChange={(e) => {setSearch(e.target.value)}} type="text" placeholder="Rechercher par traduction" />
                </div>
            </div>
            <div id="wordsList" className={open ? (trainingMode ? "open expanded" : "open") : ""}>
                {kanjis.map((item, i) => (
                    <ListElement
                        kanji={item}
                        changeCurrentWordById={changeCurrentWordById}
                        setOpen={setOpen}
                        currentWord={currentWord}
                        collection={collection}
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