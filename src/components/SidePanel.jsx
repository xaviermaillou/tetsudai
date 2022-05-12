import { useState, useEffect } from "react";
import { classes, collections, levels } from "../lib/common";

const FilterModal = (props) => {
    const {
        openFilter,
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
        <div id="wordsListFilterModal" className={openFilter ? "open" : ""}>
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
        collection,
        setCollection,
        level,
        setLevel,
        grammar,
        setGrammar,
        filterIndication,
        trainingMode,
        toggleTraining,
        setSearchExecuted,
    } = props;

    const [openFilter, setOpenFilter] = useState(false);
    const [filter, setFilter] = useState(0);
    useEffect(() => {
        if (filterIndication) setFilter(0);
    }, [filterIndication, filter]);

    const handleFilterIconClick = () => {
        if (openFilter) setSearchExecuted(true);
        setOpenFilter(!openFilter);
        setFilter(0);
    }

    return (
        <div id="wordsListHeader" className={filterIndication ? "focused" : ""}>
            <img id="wordsListTrainerIcon" className={trainingMode ? "open" : ""} onClick={toggleTraining} src="/img/book.png" alt="training" />
            <img id="wordsListFilterIcon" className={openFilter ? "open" : ""} onClick={() => handleFilterIconClick()} src="/img/filter.png" alt="search" />
            <div id="wordsListFilters">
                <div id="filtersIndicator" className="wordsListHeaderRow highlighted">
                    <div></div>
                    <span>
                        {grammar || level ? "Eléments" : ""}
                        {level ? ` de niveau ${levels[level]}` : ""}{grammar ? ` contenant des ${classes[grammar].toLowerCase()}` : ""}
                        {!grammar && !level ? "Tous les éléments" : ""}
                        {collection !== 0 && ` dans "${collections[collection]}"`}
                    </span>
                    <div></div>
                </div>
                <div id="filtersTabs" className={openFilter ? "wordsListHeaderRow open" : "wordsListHeaderRow"}>
                    <span className={filter === 1 ? "selected" : ""} onClick={() => setFilter(filter === 1 ? 0 : 1)}>Collection</span>
                    <span className={filter === 2 ? "selected" : ""} onClick={() => setFilter(filter === 2 ? 0 : 2)}>JLPT</span>
                    <span className={filter === 3 ? "selected" : ""} onClick={() => setFilter(filter === 3 ? 0 : 3)}>Classe</span>
                </div>
            </div>
            <FilterModal
                openFilter={openFilter}
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
        open,
    } = props;

    const clickHandle = (id) => {
        changeCurrentKanjiById(id);
        if (window.innerWidth < window.innerHeight) setOpen(false);
    }

    return (
        <div className={open ? "kanjisListElementContainer open" : "kanjisListElementContainer"} >
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
        open
    } = props;

    const clickHandle = (id) => {
        changeCurrentWordById(id);
        if (window.innerWidth < window.innerHeight) setOpen(false);
    }

    return (
        <div className={open ? "vocabularyListElementContainer open" : "vocabularyListElementContainer"} >
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

    const [displayKanjis, setDisplayKanjis] = useState(true);
    const [displayWords, setDisplayWords] = useState(true);
    const [searchExecuted, setSearchExecuted] = useState(false);

    const [noKanji, setNoKanji] = useState(true);
    const [noWord, setNoWord] = useState(true);


    const toggle = () => {
        setOpen(!open);
    }
    const handleSearch = (search) => {
        setSearch(search);
        setSearchExecuted(true);
    }

    useEffect(() => {
        setNoKanji(true);
        setNoWord(true);
    }, [search, collection, level, grammar]);

    const searchThroughKanji = (vocabulary, romaji, string) => {
        let includes = false;
        vocabulary.forEach((word) => {
            if (word.translation.toLowerCase().includes(string.toLowerCase())) includes = true;
            if (word.romaji.toLowerCase().includes(string.toLowerCase())) includes = true;
        });
        romaji.forEach((word) => {
            if (word.toLowerCase().includes(string.toLowerCase())) includes = true;
        });

        return includes;
    }

    const filterKanji = (kanji) => {
        if (
            (
                (kanji.collections?.includes(collection) || collection === 0)
                && (levels[level] === kanji.level || !level) 
                && (kanji.grammar.includes(grammar) || grammar === 0)
            ) 
            && (kanji.translation.toLowerCase().includes(search.toLowerCase()) || searchThroughKanji(kanji.vocabulary, kanji.romaji, search) || !search)
        ) {
            if (noKanji) setNoKanji(false);
            return true;
        }
        return false;
    }

    const filterWord = (word) => {
        if (
            (word.collections?.includes(collection) || collection === 0)
            && (levels[level] === word.level || !level || !word.level) 
            && (word.grammar === grammar || grammar === 0)
            && (word.translation.toLowerCase().includes(search.toLowerCase())
                || (word.romaji.toLowerCase().includes(search.toLowerCase()))
                || !search)
        ) {
            if (noWord) setNoWord(false);
            return true;
        }
        return false;
    }

    return (
        <div id="wordsListContainer" className={open ? "open" : ""}>
            <div id="wordsListSearchContainer">
                {currentElement && <img id="wordsListOpener" className={open ? "open" : ""} onClick={toggle} src="/img/up.png" alt="see all words" />}
                <div id="wordsListSearch">
                    {search ?
                        <img className="close" onClick={() => handleSearch("")} src="/img/close.png" alt="erase search" />
                        :
                        <img src="/img/search.png" alt="search" />
                    }
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
                search={search}
                setSearch={setSearch}
                filterIndication={filterIndication}
                trainingMode={trainingMode}
                toggleTraining={toggleTraining}
                setSearchExecuted={setSearchExecuted}
            />
            {searchExecuted && <span className={displayKanjis ? "listIndicator" : "listIndicator closed"} onClick={() => setDisplayKanjis(!displayKanjis)}>
                Kanji
                <img src="/img/up.png" alt="open/close kanji" />
            </span>}
            <div id="kanjisList" className={(displayKanjis && searchExecuted) ? (displayWords ? "wordsListList" : "extended wordsListList") : "closed wordsListList"}>

                {kanjis.map((item, i) => (
                    <ListKanji
                        kanji={item}
                        changeCurrentKanjiById={changeCurrentKanjiById}
                        setOpen={setOpen}
                        currentElement={currentElement}
                        open={filterKanji(item)}
                        key={i}
                    />
                ))}
                {noKanji && <div className="noElementsFilteredIndicator">Aucun kanji ne correspond à ces filtres</div>}
            </div>
            {searchExecuted && <span className={displayWords ? "listIndicator" : "listIndicator closed"} onClick={() => setDisplayWords(!displayWords)}>
                Vocabulaire
                <img src="/img/up.png" alt="open/close words" />
            </span>}
            <div id="vocabularyList" className={(displayWords && searchExecuted) ? (displayKanjis ? "wordsListList" : "extended wordsListList") : "closed wordsListList"}>
                {vocabulary.map((item, i) => (
                    <ListWord
                        word={item}
                        changeCurrentWordById={changeCurrentWordById}
                        setOpen={setOpen}
                        currentElement={currentElement}
                        open={filterWord(item)}
                        key={i}
                    />
                ))}
                {noWord && <div className="noElementsFilteredIndicator">Aucun mot ne correspond à ces filtres</div>}
            </div>
        </div>
    )
}

export default SidePanel;