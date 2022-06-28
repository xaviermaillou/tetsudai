import { useState, useEffect } from "react";
import { pluralClasses, collections, levels } from "../lib/common";

const TrainingModal = (props) => {
    const {
        imgPath,
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
            <div className="tooltip">
                Lancer le mode entraînement pour apprendre et réviser les kanji ou le vocabulaire correspondant aux catégories sélectionnées
            </div>
            <div id="wordsListTrainingModalScreenshot">
                <img src={`/img/${imgPath}/TrainingScreen3.png`} alt="training screen" />
                <img src={`/img/${imgPath}/TrainingScreen2.png`} alt="training screen" />
                <img src={`/img/${imgPath}/TrainingScreen.png`} alt="training screen" />
            </div>
            <div id="wordsListTrainingModalButtons">
                <span className={trainingMode === 1 ? "selected clickable" : "clickable"} onClick={() => handleClick(1)}>Réviser les kanji</span>
                <span className={trainingMode === 2 ? "selected clickable" : "clickable"} onClick={() => handleClick(2)}>Réviser le vocabulaire</span>
            </div>
        </div>
    );
}

const FilterModal = (props) => {
    const {
        openFilter,
        collection,
        setCollection,
        level,
        setLevel,
        grammar,
        setGrammar,
        setSearchExecuted,
    } = props;

    const handleClick = (key, filterSetter) => {
        filterSetter(key);
        setSearchExecuted(true);
    }

    return (
        <div id="wordsListFilterModal" className={openFilter ? "open" : ""}>
            <div>
                {Object.values(pluralClasses).map((value, key) => (
                    <span key={key} onClick={() => handleClick(key, setGrammar)} className={grammar === key ? "selected clickable" : "clickable"}>{value}</span>
                ))}
            </div>
            <div>
                {Object.values(levels).map((value, key) => (
                    <span key={key} onClick={() => handleClick(key, setLevel)} className={level === key ? "selected clickable" : "clickable"}>{value ? value : 'Hors niveau'}</span>
                ))}
            </div>
            <div>
                {Object.values(collections).map((value, key) => (
                    <span key={key} onClick={() => handleClick(key, setCollection)} className={collection === key ? "selected clickable" : "clickable"}>{value}</span>
                ))}
            </div>
        </div>
    );
}

const ListHeader = (props) => {
    const {
        imgPath,
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
    useEffect(() => {
        if (filterIndication) {
            setOpenTrainingModal(false);
            setOpenFilter(true);
        }
    }, [filterIndication]);
    const handleFilterIconClick = () => {
        setOpenFilter(!openFilter);
        setOpenTrainingModal(false);
    }

    return (
        <div id="wordsListHeader">
            <div
                id="wordsListTrainerIcon"
                className="clickable"
                onClick={() => handleTrainingIconClick()}
            >
                <img
                    className={openTrainingModal ? "open" : ""}
                    src={`/img/${imgPath}/book.png`}
                    alt="training"
                />
            </div>
            <div
                id="wordsListFilterIcon"
                className="clickable"
                onClick={() => handleFilterIconClick()}
            >
                <img
                    className={openFilter ? "open" : ""}
                    src={`/img/${imgPath}/up.png`}
                    alt="search"
                />
            </div>
            <div id="wordsListFilters">
                <div
                    id="filtersIndicator"
                    className="wordsListHeaderRow"
                >
                    <div></div>
                    {(collection || level || grammar) ? 
                        /* <span>
                            {grammar || level ? "Eléments" : ""}
                            {level ? ` de niveau ${levels[level]}` : ""}
                            {grammar ? ` étant / contenant un${[6, 9, 10].includes(grammar) ? 'e' : ''} ${classes[grammar].toLowerCase()}` : ""}
                            {!grammar && !level ? "Tous les éléments" : ""}
                            {collection !== 0 && ` dans "${collections[collection]}"`}
                        </span> */
                        <div id="filtersIndicatorRow">
                            {grammar !==0 &&
                                <span className="filtersIndicatorsElement">
                                    <span>{pluralClasses[grammar]}</span>&nbsp;&nbsp;
                                    <img className="clickable" src={`/img/${imgPath}/close.png`} alt="close filter" onClick={() => setGrammar(0)} />
                                </span>
                            }
                            {(level !==0 && grammar !==0) && <span>|</span>}
                            {level !==0 &&
                                <span className="filtersIndicatorsElement">
                                    <span>{levels[level] ? `JLPT ${levels[level]}` : 'Hors JLPT'}</span>&nbsp;&nbsp;
                                    <img className="clickable" src={`/img/${imgPath}/close.png`} alt="close filter" onClick={() => setLevel(0)} />
                                </span>
                            }
                            {(collection !==0 && level !==0) && <span>|</span>}
                            {collection !==0 &&
                                <span className="filtersIndicatorsElement">
                                    <span>{collections[collection]}</span>&nbsp;&nbsp;
                                    <img className="clickable" src={`/img/${imgPath}/close.png`} alt="close filter" onClick={() => setCollection(0)} />
                                </span>
                            }
                        </div>
                        :
                        <span id="filtersIndicatorsEmpty">
                            Aucune catégorie sélectionnée
                        </span>
                    }
                    <div></div>
                </div>
                <div id="filtersTip" className={openFilter ? "wordsListHeaderRow open" : "wordsListHeaderRow"}>
                    <div className="tooltip">Sélectionnez les catégories dont vous voulez voir le contenu</div>
                </div>
            </div>
            <TrainingModal
                imgPath={imgPath}
                openTrainingModal={openTrainingModal}
                setOpenTrainingModal={setOpenTrainingModal}
                trainingMode={trainingMode}
                toggleTraining={toggleTraining}
            />
            <FilterModal
                openFilter={openFilter}
                collection={collection}
                setCollection={setCollection}
                level={level}
                setLevel={setLevel}
                grammar={grammar}
                setGrammar={setGrammar}
                setSearchExecuted={setSearchExecuted}
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
        changeCurrentWordById(id, false);
        if (window.innerWidth < window.innerHeight) setOpen(false);
    }

    return (
        <div className={filter.open ? (filter.importance ? `importance${filter.importance} kanjisListElementContainer open` : "vocabularyListElementContainer open") : "vocabularyListElementContainer"} >
            <div 
                className={(currentElement && currentElement.id === word.id) ?
                    "vocabularyListElement clickable selected" : "vocabularyListElement clickable"}
                onClick={() => clickHandle(word.id)}
            >
                {word.jukujikun ?
                    <div className="vocabularyListElementJapaneseJukujikun">
                        <div className="vocabularyListElementKanjiOnly">
                            {word.rareKanji ?
                                <div>{word.jukujikun}</div>
                                :
                                word.elements.map((element, j) => (
                                    <div key={j}>{element.kanji || element.kana}</div>
                                ))
                            }
                        </div>
                        <div className="vocabularyListElementKana">
                            {word.rareKanji ?
                                word.elements.map((element, j) => (
                                    <span key={j}>{element.kanji || element.kana}</span>
                                ))
                                :
                                <span>{word.jukujikun}</span>
                            }
                        </div>
                    </div>
                    :
                    <div className="vocabularyListElementJapanese">
                        {word.elements.map((element, j) => (
                            <div className="vocabularyListElementKanjiKana" key={j}>
                                <div>{word.rareKanji ? element.kana : element.kanji || element.kana}</div>
                                {element.kanji &&
                                    <div className="vocabularyListElementKana">
                                        {word.rareKanji ? element.kanji || element.kana : element.kana}
                                    </div>
                                }
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
        imgPath,
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
        searchExecuted,
        setSearchExecuted,
    } = props;

    const [displayKanjis, setDisplayKanjis] = useState(false);
    const [displayWords] = useState(true);

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

    useEffect(() => {
        if (searchExecuted && noWord) setDisplayKanjis(true);
    }, [searchExecuted, noKanji, noWord]);

    // Kanji filters

    const searchThroughKanji = (vocabulary, romaji, translation, string) => {
        let includes = false;
        romaji?.forEach((word) => {
            if (word.toLowerCase().includes(string.toLowerCase())) includes = true;
        });
        translation?.forEach((word) => {
            if (word.toLowerCase().includes(string.toLowerCase())) includes = true;
        });
        vocabulary.forEach((word) => {
            if (word.translation.toLowerCase().includes(string.toLowerCase())) includes = true;
            if (word.romaji.toLowerCase().includes(string.toLowerCase())) includes = true;
        });
        return includes;
    }
    const getKanjiImportance = (vocabulary, romaji, translation, string) => {
        let matchingScore = 0
        romaji?.forEach((word) => {
            if (word.toLowerCase() === string.toLowerCase()) matchingScore ++;
        });
        translation?.forEach((word) => {
            if (word.toLowerCase() === string.toLowerCase()) matchingScore ++;
        });
        /* vocabulary.forEach((word) => {
            if (word.translation.toLowerCase() === string.toLowerCase()) matchingScore ++;
            if (word.romaji.toLowerCase() === string.toLowerCase()) matchingScore ++;
        }); */
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
                importance: getKanjiImportance(kanji.vocabulary, kanji.romaji, kanji.translationArray, search)
            };
        } else {
            result = {
                open: false,
                importance: null,
            };
        }
        return result;
    }

    // Vocabulary filters

    const searchThroughWord = (translation, variants, string) => {
        let includes = false;
        translation?.forEach((word) => {
            if (word.toLowerCase().includes(string.toLowerCase())) includes = true;
        });
        variants?.forEach((word) => {
            if (word.toLowerCase().includes(string.toLowerCase())) includes = true;
        })

        return includes;
    }
    const getWordImportance = (romaji, translation, variants, string) => {
        let matchingScore = 0
        if (romaji.toLowerCase() === string.toLowerCase()) matchingScore ++;
        translation?.forEach((word) => {
            if (word.toLowerCase() === string.toLowerCase()) matchingScore ++;
        });
        variants?.forEach((word) => {
            if (word.toLowerCase() === string.toLowerCase()) matchingScore ++;
        });
        return matchingScore;
    }

    const filterWord = (word) => {
        let result = {};
        if (
            (word.collections?.includes(collection) || collection === 0)
            && (levels[level] === word.level || !level) 
            && (word.grammar.includes(grammar) || grammar === 0)
            && (searchThroughWord(word.translationArray, word.variants, search)
                || (word.romaji.toLowerCase().includes(search.toLowerCase()))
                || !search)
        ) {
            if (noWord) setNoWord(false);
            result = {
                open: true,
                importance: getWordImportance(word.romaji, word.translationArray, word.variants, search),
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
        <div id="sidePanel" className={open ? "open" : ""}>
            <div id="wordsListSearchContainer">
                {
                    currentElement !== null &&
                    <img
                        id="wordsListOpener"
                        className={open ? "open clickable" : "clickable"}
                        onClick={toggle}
                        src={`/img/${imgPath}/up.png`}
                        alt="see all words"
                    />}
                <div id="wordsListSearch">
                    {search ?
                        <img className="close clickable" onClick={() => handleSearch("")} src={`/img/${imgPath}/close.png`} alt="erase search" />
                        :
                        <img src={`/img/${imgPath}/search.png`} alt="search" />
                    }
                    <input value={search} onChange={(e) => {handleSearch(e.target.value)}} type="text" placeholder="Rechercher par romaji ou traduction" />
                </div>
            </div>
            <ListHeader
                imgPath={imgPath}
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
                <span>Kanji</span>
                {displayKanjis ?
                    <img src={`/img/${imgPath}/less.png`} alt="close kanji" />
                    :
                    <img src={`/img/${imgPath}/plus.png`} alt="open kanji" />
                }
            </span>}
            <div id="kanjisList" className={searchExecuted ?
                (
                    displayKanjis ?
                        "wordsListList"
                        :
                        "closed wordsListList"
                )
                :
                "hidden closed wordsListList"}>
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
            {/* searchExecuted && <span className={displayWords ? "listIndicator clickable" : "listIndicator clickable closed"} onClick={() => setDisplayWords(!displayWords)}>
                Vocabulaire
                {displayWords ?
                    <img src="/img/less.png" alt="close words" />
                    :
                    <img src="/img/plus.png" alt="open words" />
                }
            </span> */}
            <div id="vocabularyList" className={searchExecuted ?
                ((displayWords) ?
                    (displayKanjis ?
                        "wordsListList"
                        :
                        "extended wordsListList")
                    :
                    "closed wordsListList")
                :
                "hidden closed wordsListList"}>
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
            {!searchExecuted && <span className="tooltip">Lancez une recherche ou appliquez des catégories<br />pour commencer à explorer</span>}
        </div>
    )
}

export default SidePanel;