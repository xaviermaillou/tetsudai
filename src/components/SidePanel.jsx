import { useState, useEffect } from "react";
import { classes, pluralClasses, collections, levels } from "../lib/common";

const TrainingModal = (props) => {
    const {
        openTrainingModal,
        setOpenTrainingModal,
        trainingMode,
        toggleTraining,
    } = props;

    const handleClick = (mode) => {
        setOpenTrainingModal(false);
        toggleTraining(mode);
    }

    return (
        <div id="wordsListTrainingModal" className={openTrainingModal ? "open" : ""}>
            <div className="tooltip">Lancer le mode entraînement pour apprendre et réviser les kanji ou mots de vocabulaire correspondant aux filtres appliqués</div>
            <span className={trainingMode === 1 ? "selected clickable" : "clickable"} onClick={() => handleClick(1)}>Réviser les kanji</span>
            <span className={trainingMode === 2 ? "selected clickable" : "clickable"} onClick={() => handleClick(2)}>Réviser le vocabulaire</span>
        </div>
    );
}

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
                    <span key={key} onClick={() => handleClick(key, setCollection)} className={collection === key ? "selected clickable" : "clickable"}>{value}</span>
                ))}
            </>}
            {filter === 2 && <>
                {Object.values(levels).map((value, key) => (
                    <span key={key} onClick={() => handleClick(key, setLevel)} className={level === key ? "selected clickable" : "clickable"}>{value}</span>
                ))}
            </>}
            {filter === 3 && <>
                {Object.values(pluralClasses).map((value, key) => (
                    <span key={key} onClick={() => handleClick(key, setGrammar)} className={grammar === key ? "selected clickable" : "clickable"}>{value}</span>
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

    const [openTrainingModal, setOpenTrainingModal] = useState(false);
    const handleTrainingIconClick = () => {
        setOpenTrainingModal(!openTrainingModal);
        setOpenFilter(false);
    }

    const [openFilter, setOpenFilter] = useState(false);
    const [filter, setFilter] = useState(0);
    useEffect(() => {
        if (filterIndication) {
            setOpenTrainingModal(false);
            setFilter(0);
            setOpenFilter(true);
        }
    }, [filterIndication, filter]);
    const handleFilterIconClick = () => {
        if (openFilter) setSearchExecuted(true);
        setOpenFilter(!openFilter);
        setFilter(0);
        setOpenTrainingModal(false);
    }

    return (
        <div id="wordsListHeader">
            <img id="wordsListTrainerIcon"
                className={openTrainingModal ? "open clickable" : "clickable"}
                onClick={() => handleTrainingIconClick()}
                src="/img/book.png"
                alt="training"
            />
            <img id="wordsListFilterIcon"
                className={filterIndication ? "focused open clickable" : (openFilter ? "open clickable" : "clickable")}
                onClick={() => handleFilterIconClick()}
                src="/img/filter.png"
                alt="search"
            />
            <div id="wordsListFilters">
                <div id="filtersIndicator" className="wordsListHeaderRow">
                    <div></div>
                    <span>
                        {grammar || level ? "Eléments" : ""}
                        {level ? ` de niveau ${levels[level]}` : ""}{grammar ? ` étant / contenant un ${classes[grammar].toLowerCase()}` : ""}
                        {!grammar && !level ? "Tous les éléments" : ""}
                        {collection !== 0 && ` dans "${collections[collection]}"`}
                    </span>
                    <div></div>
                </div>
                <div id="filtersTabs" className={openFilter ? "wordsListHeaderRow open" : "wordsListHeaderRow"}>
                    <span className={filter === 1 ? "selected clickable" : "clickable"} onClick={() => setFilter(filter === 1 ? 0 : 1)}>Collection</span>
                    <span>|</span><span className={filter === 2 ? "selected clickable" : "clickable"} onClick={() => setFilter(filter === 2 ? 0 : 2)}>JLPT</span><span>|</span>
                    <span className={filter === 3 ? "selected clickable" : "clickable"} onClick={() => setFilter(filter === 3 ? 0 : 3)}>Classe</span>
                </div>
            </div>
            <TrainingModal
                openTrainingModal={openTrainingModal}
                setOpenTrainingModal={setOpenTrainingModal}
                trainingMode={trainingMode}
                toggleTraining={toggleTraining}
            />
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
        filter,
    } = props;

    const clickHandle = (id) => {
        changeCurrentKanjiById(id);
        if (window.innerWidth < window.innerHeight) setOpen(false);
    }

    return (
        <div className={filter.open ? (filter.importance ? `importance${filter.importance} kanjisListElementContainer open`: "kanjisListElementContainer open") : "kanjisListElementContainer"} >
            <div 
                className={(currentElement && currentElement.doc.id === kanji.doc.id) ?
                    "kanjisListElement clickable selected" : "kanjisListElement clickable"}
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
        filter,
    } = props;

    const clickHandle = (id) => {
        changeCurrentWordById(id);
        if (window.innerWidth < window.innerHeight) setOpen(false);
    }

    return (
        <div className={filter.open ? (filter.importance ? `importance${filter.importance} kanjisListElementContainer open` : "vocabularyListElementContainer open") : "vocabularyListElementContainer"} >
            <div 
                className={(currentElement && currentElement.doc.id === word.doc.id) ?
                    "vocabularyListElement clickable selected" : "vocabularyListElement clickable"}
                onClick={() => clickHandle(word.doc.id)}
            >
                {word.jukujikun ?
                    <div className="vocabularyListElementJapaneseJukujikun">
                        <div className="vocabularyListElementKanjiOnly">
                            {word.elements.map((element, j) => (
                                <div key={j}>{element.kanji || element.kana}</div>
                            ))}
                        </div>
                        <div className="vocabularyListElementKana">{word.jukujikun}</div>
                    </div>
                    :
                    <div className="vocabularyListElementJapanese">
                        {word.elements.map((element, j) => (
                            <div className="vocabularyListElementKanjiKana" key={j}>
                                <div>{element.kanji || element.kana}</div>
                                {element.kanji && <div className="vocabularyListElementKana">{element.kana}</div>}
                            </div>
                        ))}
                    </div>
                }
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

    const searchThroughKanji = (vocabulary, romaji, translation, string) => {
        let includes = false;
        // vocabulary.forEach((word) => {
        //     if (word.translation.toLowerCase().includes(string.toLowerCase())) includes = true;
        //     if (word.romaji.toLowerCase().includes(string.toLowerCase())) includes = true;
        // });
        romaji?.forEach((word) => {
            if (word.toLowerCase().includes(string.toLowerCase())) includes = true;
        });
        translation?.forEach((word) => {
            if (word.toLowerCase().includes(string.toLowerCase())) includes = true;
        });

        return includes;
    }
    const getKanjiImportance = (romaji, translation, string) => {
        let matchingScore = 0
        romaji?.forEach((word) => {
            if (word.toLowerCase() === string.toLowerCase()) matchingScore ++;
        });
        translation?.forEach((word) => {
            if (word.toLowerCase() === string.toLowerCase()) matchingScore ++;
        });
        return matchingScore;
    }

    const filterKanji = (kanji) => {
        let result = {};
        if (
            (
                (kanji.collections?.includes(collection) || collection === 0)
                && (levels[level] === kanji.level || !level) 
                && (kanji.grammar.includes(grammar) || grammar === 0)
            ) 
            &&
            (
                searchThroughKanji(kanji.vocabulary, kanji.romaji, kanji.translationArray, search)
                || !search
            )
        ) {
            if (noKanji) setNoKanji(false);
            result = {
                open: true,
                importance: getKanjiImportance(kanji.romaji, kanji.translationArray, search)
            };
        } else {
            result = {
                open: false,
                importance: null,
            };
        }
        return result;
    }

    const searchThroughWord = (translation, string) => {
        let includes = false;
        translation?.forEach((word) => {
            if (word.toLowerCase().includes(string.toLowerCase())) includes = true;
        });

        return includes;
    }
    const getWordImportance = (romaji, translation, string) => {
        let matchingScore = 0
        if (romaji.toLowerCase() === string.toLowerCase()) matchingScore ++;
        translation?.forEach((word) => {
            if (word.toLowerCase() === string.toLowerCase()) matchingScore ++;
        });
        return matchingScore;
    }

    const filterWord = (word) => {
        let result = {};
        if (
            (word.collections?.includes(collection) || collection === 0)
            && (levels[level] === word.level || !level || !word.level) 
            && (word.grammar.includes(grammar) || grammar === 0)
            && (searchThroughWord(word.translationArray, search)
                || (word.romaji.toLowerCase().includes(search.toLowerCase()))
                || !search)
        ) {
            if (noWord) setNoWord(false);
            result = {
                open: true,
                importance: getWordImportance(word.romaji, word.translationArray, search),
            };
        } else {
            result = {
                open: false,
                importance: null,
            };
        }
        return result;
    }

    return (
        <div id="wordsListContainer" className={open ? "open" : ""}>
            <div id="wordsListSearchContainer">
                {currentElement && <img id="wordsListOpener" className={open ? "open clickable" : "clickable"} onClick={toggle} src="/img/up.png" alt="see all words" />}
                <div id="wordsListSearch">
                    {search ?
                        <img className="close clickable" onClick={() => handleSearch("")} src="/img/close.png" alt="erase search" />
                        :
                        <img src="/img/search.png" alt="search" />
                    }
                    <input value={search} onChange={(e) => {handleSearch(e.target.value)}} type="text" placeholder="Rechercher par romaji ou traduction" />
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
            {searchExecuted && <span className={displayKanjis ? "listIndicator clickable" : "listIndicator clickable closed"} onClick={() => setDisplayKanjis(!displayKanjis)}>
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
                        filter={filterKanji(item)}
                        key={i}
                    />
                ))}
                {noKanji && <div className="noElementsFilteredIndicator">Aucun kanji ne correspond à ces filtres</div>}
            </div>
            {searchExecuted && <span className={displayWords ? "listIndicator clickable" : "listIndicator clickable closed"} onClick={() => setDisplayWords(!displayWords)}>
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
                        filter={filterWord(item)}
                        key={i}
                    />
                ))}
                {noWord && <div className="noElementsFilteredIndicator">Aucun mot ne correspond à ces filtres</div>}
            </div>
            {!searchExecuted && <span className="tooltip">Lancez une recherche ou appliquez des filtres<br />pour afficher des résultats</span>}
        </div>
    )
}

export default SidePanel;