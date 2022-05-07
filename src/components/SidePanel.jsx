import { useState, useEffect } from "react";
import { classes, collections, levels, kinds } from "../lib/common";

const FilterModal = (props) => {
    const {
        filter,
        setFilter,
        collection,
        setCollection,
        level,
        setLevel,
        grammar,
        setGrammar,
    } = props;

    const handleClick = (key, filterSetter) => {
        filterSetter(key);
        setFilter(0);
    }

    return (
        <div id="wordsListFilterModal" className={filter !== 0 ? "open" : ""}>
            {filter === 1 && <>
                {Object.values(collections).map((value, key) => (
                    <span key={key} onClick={() => handleClick(key, setCollection)} className={collection === key ? "selected" : ""}>{value}</span>
                ))}
            </>}
            {filter === 2 && <>
                {Object.values(levels).map((value, key) => (
                    <span key={key} onClick={() => handleClick(key, setLevel)} className={level === key ? "selected" : ""}>{value}</span>
                ))}
            </>}
            {filter === 3 && <>
                {Object.values(classes).map((value, key) => (
                    <span key={key} onClick={() => handleClick(key, setGrammar)} className={grammar === key ? "selected" : ""}>{value}</span>
                ))}
            </>}
        </div>
    );
}

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
        kind,
        setKind,
        filterIndication,
        trainingMode,
        toggleTraining,
        searchExecuted,
        setSearchExecuted,
    } = props;

    const [filter, setFilter] = useState(0);
    useEffect(() => {
        if (filterIndication) setFilter(0);
    }, [filterIndication, filter]);

    return (
        <div id="wordsListHeader" className={filterIndication ? "focused" : ""}>
            {!trainingMode && <img id="wordsListTrainerIcon" onClick={toggleTraining} src="/img/book.png" alt="training" />}
            <img id="wordsListFilterIcon" className={searchExecuted ? "open" : ""} onClick={() => setSearchExecuted(!searchExecuted)} src="/img/up.png" alt="search" />
            <div id="wordsListFilters">
                <div>
                    <span className="selected" onClick={() => setFilter(1)}>Collection</span>
                    <span className="selected" onClick={() => setFilter(2)}>JLPT</span>
                    <span className="selected" onClick={() => setFilter(3)}>Classe</span>
                </div>
                <div>
                    <span className={kind === 0 ? "selected" : ""} onClick={() => setKind(0)}>Tous</span>
                    <span className={kind === 1 ? "selected" : ""} onClick={() => setKind(1)}>Kanjis</span>
                    <span className={kind === 2 ? "selected" : ""} onClick={() => setKind(2)}>Vocabulaire</span>
                </div>
                <div id="filtersIndicator">
                    <div></div>
                    <span>
                        {grammar || level ? kinds[kind] : ""}
                        {level ? ` de niveau ${levels[level]}` : ""}{grammar ? ` contenant des ${classes[grammar].toLowerCase()}` : ""}
                        {!grammar && !level ? `Tous les ${kinds[kind].toLowerCase()}` : ""}
                        {collection !== 0 && ` dans "${collections[collection]}"`}
                    </span>
                    <div></div>
                </div>
            </div>
            <FilterModal
                filter={filter}
                setFilter={setFilter}
                collection={collection}
                setCollection={setCollection}
                level={level}
                setLevel={setLevel}
                grammar={grammar}
                setGrammar={setGrammar}
            />
        </div>
    );
}

const ListKanji = (props) => {
    const {
        kanji,
        changeCurrentKanjiById,
        setOpen,
        currentElement,
        collection,
        level,
        grammar,
        search,
    } = props;

    const clickHandle = (id) => {
        changeCurrentKanjiById(id);
        if (window.innerWidth < window.innerHeight) setOpen(false);
    }

    const searchThroughVocabulary = (vocabulary, string) => {
        let includes = false;
        vocabulary.forEach((word) => {
            if (word.translation.toLowerCase().includes(string.toLowerCase())) includes = true;
        });

        return includes;
    }

    return (
        <div className={
            (
                (kanji.collections?.includes(collection) || collection === 0)
                && (levels[level] === kanji.level || !level) 
                && (kanji.grammar.includes(grammar) || grammar === 0)
            ) 
            && (kanji.translation.toLowerCase().includes(search.toLowerCase()) || searchThroughVocabulary(kanji.vocabulary, search) || !search)
            ? "kanjisListElementContainer open" : "kanjisListElementContainer"}
        >
            <div 
                className={(currentElement && currentElement.doc.id === kanji.doc.id) ?
                    "kanjisListElement selected" : "kanjisListElement"}
                onClick={() => clickHandle(kanji.doc.id)}
            >
                <div className="kanjisListElementKanji">
                    {kanji.kanji}
                </div>
                <div className="kanjisListElementKana">
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
                    <div className="kanjisListElementTranslation">
                        {kanji.translation}
                    </div>
                </div>
            </div>
        </div>
    )
}

const ListWord = (props) => {
    const {
        word,
        changeCurrentWordById,
        setOpen,
        currentElement,
        collection,
        level,
        grammar,
        search,
    } = props;

    const clickHandle = (id) => {
        changeCurrentWordById(id);
        if (window.innerWidth < window.innerHeight) setOpen(false);
    }

    return (
        <div className={
            (
                (word.collections?.includes(collection) || collection === 0)
                && (levels[level] === word.level || !level || !word.level) 
                && (word.grammar === grammar || grammar === 0)
                && (word.translation.toLowerCase().includes(search.toLowerCase()) || !search)
            ) 
            ? "vocabularyListElementContainer open" : "vocabularyListElementContainer"}
        >
            <div 
                className={(currentElement && currentElement.doc.id === word.doc.id) ?
                    "vocabularyListElement selected" : "vocabularyListElement"}
                onClick={() => clickHandle(word.doc.id)}
            >
                <div className="vocabularyListElementJapanese">
                    {word.elements.map((element, j) => (
                        <div className="vocabularyListElementKanjiKana" key={j}>
                            <div>{element.kanji || element.kana}</div>
                            {element.kanji && <div className="vocabularyListElementKana">{element.kana}</div>}
                        </div>
                    ))}
                </div>
                <div className="vocabularyListElementTranslation">
                    {word.translation}
                </div>
            </div>
        </div>
    );
}

const SidePanel = (props) => {
    const {
        kanjis,
        vocabulary,
        changeCurrentKanjiById,
        changeCurrentWordById,
        currentElement,
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

    const [kind, setKind] = useState(0);
    const [searchExecuted, setSearchExecuted] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }
    const handleSearch = (search) => {
        setSearch(search);
        setSearchExecuted(true);
    }

    return (
        <div id="wordsListContainer" className={open ? "open" : ""}>
            <div id="wordsListSearchContainer">
                <img id="wordsListOpener" className={open ? "open" : ""} onClick={toggle} src="/img/up.png" alt="see all words" />
                <div id="wordsListSearch">
                    <img src="/img/search.png" alt="search" />
                    <input value={search} onChange={(e) => {handleSearch(e.target.value)}} type="text" placeholder="Rechercher par traduction" />
                </div>
            </div>
            <ListHeader
                open={open}
                toggle={toggle}
                collection={collection}
                setCollection={setCollection}
                level={level}
                setLevel={setLevel}
                grammar={grammar}
                setGrammar={setGrammar}
                kind={kind}
                setKind={setKind}
                search={search}
                setSearch={setSearch}
                filterIndication={filterIndication}
                trainingMode={trainingMode}
                toggleTraining={toggleTraining}
                searchExecuted={searchExecuted}
                setSearchExecuted={setSearchExecuted}
            />
            <span className={(kind === 1 || kind === 0) && searchExecuted ? "listIndicator open" : "listIndicator"}>Kanjis</span>
            <div id="kanjisList" className={kind === 1 ? "extended wordsListList" : (kind === 0 && searchExecuted ? "wordsListList" : "closed wordsListList")}>
                {kanjis.map((item, i) => (
                    <ListKanji
                        kanji={item}
                        changeCurrentKanjiById={changeCurrentKanjiById}
                        setOpen={setOpen}
                        currentElement={currentElement}
                        collection={collection}
                        level={level}
                        grammar={grammar}
                        search={search}
                        key={i}
                    />
                ))}
            </div>
            <span className={(kind === 2 || kind === 0) && searchExecuted ? "listIndicator open" : "listIndicator"}>Vocabulaire</span>
            <div id="vocabularyList" className={kind === 2 ? "extended wordsListList" : (kind === 0 && searchExecuted ? "wordsListList" : "closed wordsListList")}>
                {vocabulary.map((item, i) => (
                    <ListWord
                        word={item}
                        changeCurrentWordById={changeCurrentWordById}
                        setOpen={setOpen}
                        currentElement={currentElement}
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