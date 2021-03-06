import { useState, useEffect } from "react"
import { pluralClasses, collections, levels } from "../lib/common"
import Loading from "./visualElements/Loading"

const TrainingModal = (props) => {
    const {
        imgPath,
        openTrainingModal,
        setOpenTrainingModal,
        trainingMode,
        toggleTraining,
    } = props

    const handleClick = (mode) => {
        setOpenTrainingModal(false)
        toggleTraining(mode)
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
    )
}

const FilterModal = (props) => {
    const {
        openFilter,
        setOpenFilter,
        collection,
        setCollection,
        level,
        setLevel,
        grammar,
        setGrammar,
        searchExecuted,
        setSearchExecuted,
    } = props

    const handleClick = (key, filterSetter) => {
        filterSetter(key)
        if (!searchExecuted) setOpenFilter(false)
        setSearchExecuted(true)
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
    )
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
        searchExecuted,
        setSearchExecuted,
    } = props

    const [openTrainingModal, setOpenTrainingModal] = useState(false)
    const handleTrainingIconClick = () => {
        setOpenTrainingModal(!openTrainingModal)
        setOpenFilter(false)
    }

    const [openFilter, setOpenFilter] = useState(false)
    useEffect(() => {
        if (filterIndication) {
            setOpenTrainingModal(false)
            setOpenFilter(true)
        }
    }, [filterIndication])
    const handleFilterIconClick = () => {
        setOpenFilter(!openFilter)
        setOpenTrainingModal(false)
    }

    return (
        <div id="wordsListHeader">
            <div
                id="wordsListTrainerIcon"
                className={searchExecuted ? "clickable" : "lowOpacity"}
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
                className={(searchExecuted || openFilter) ? "clickable" : "clickable highlighted"}
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
                    className={searchExecuted ? "wordsListHeaderRow" : "wordsListHeaderRow lowOpacity"}
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
                setOpenFilter={setOpenFilter}
                collection={collection}
                setCollection={setCollection}
                level={level}
                setLevel={setLevel}
                grammar={grammar}
                setGrammar={setGrammar}
                searchExecuted={searchExecuted}
                setSearchExecuted={setSearchExecuted}
            />
        </div>
    )
}

const ListKanji = (props) => {
    const {
        kanji,
        changeCurrentKanjiById,
        setOpen,
        currentElement,
        importance,
    } = props

    const clickHandle = (id) => {
        changeCurrentKanjiById(id)
        if (window.innerWidth < window.innerHeight) setOpen(false)
    }

    return (
        <div className={importance ? `importance${importance} kanjisListElementContainer open`: "kanjisListElementContainer open"} >
            <div 
                className={(currentElement && currentElement.kanji && currentElement.id === kanji.id) ?
                    "kanjisListElement clickable selected" : "kanjisListElement clickable"}
                onClick={() => clickHandle(kanji.id)}
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
        importance,
    } = props

    const clickHandle = (id) => {
        changeCurrentWordById(id, false)
        if (window.innerWidth < window.innerHeight) setOpen(false)
    }

    return (
        <div className={importance ? `importance${importance} vocabularyListElementContainer open` : "vocabularyListElementContainer open"} >
            <div 
                className={(currentElement && currentElement.elements && currentElement.id === word.id) ?
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
    )
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
        loadingKanjiList,
        loadingVocabularyList,
        kanjiListOffset,
        setKanjisListOffset,
        vocabularyListOffset,
        setVocabularyListOffset,
    } = props

    const [displayKanjis, setDisplayKanjis] = useState(false)
    const [displayWords] = useState(true)

    const [noKanji, setNoKanji] = useState(true)
    const [noWord, setNoWord] = useState(true)

    const [searchCopy, setSearchCopy] = useState(search)


    const toggle = () => {
        setOpen(!open)
    }

    const [searchTimer, setSearchTimer] = useState(undefined)
    const runSearchTimer = (search) => {
        setSearchTimer(setTimeout(() => {
            setSearch(search)
            setSearchExecuted(true)
        }, 500))
    }
    const handleSearch = (search) => {
        setSearchCopy(search)
        clearTimeout(searchTimer)
        runSearchTimer(search)
    }

    useEffect(() => {
        setNoKanji(kanjis.length === 0)
        setNoWord(vocabulary.length === 0)
    }, [kanjis, vocabulary])

    if (kanjis.length >= kanjiListOffset + 100) {
        const kanjiContainer = document.getElementById('kanjisList')
        kanjiContainer?.addEventListener('scroll', () => {
            if ((kanjiContainer.offsetHeight + kanjiContainer.scrollTop) >= kanjiContainer.scrollHeight) {
                setKanjisListOffset(kanjiListOffset + 100)
            }
        })
    }
    if (vocabulary.length >= vocabularyListOffset + 100) {
        const vocabularyContainer = document.getElementById('vocabularyList')
        vocabularyContainer?.addEventListener('scroll', () => {
            if ((vocabularyContainer.offsetHeight + vocabularyContainer.scrollTop) >= vocabularyContainer.scrollHeight) {
                setVocabularyListOffset(vocabularyListOffset + 100)
            }
        })
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
                    <input
                        value={searchCopy}
                        className={searchExecuted ? "" : "highlighted"}
                        onChange={(e) => {handleSearch(e.target.value)}}
                        type="text"
                        spellcheck="false"
                        placeholder="Rechercher en japonais, romaji, français..."
                    />
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
                searchExecuted={searchExecuted}
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
                        importance={item.importance}
                        key={i}
                    />
                ))}
                <div className="loadingAnimationContainer">
                    <Loading
                        isLoading={loadingKanjiList}
                    />
                </div>
                {(noKanji && !loadingKanjiList) && <div className="noElementsFilteredIndicator">Aucun kanji ne correspond à ces filtres</div>}
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
                        importance={item.importance}
                        key={i}
                    />
                ))}
                <div className="loadingAnimationContainer">
                    <Loading
                        isLoading={loadingVocabularyList}
                    />
                </div>
                {(noWord && !loadingVocabularyList) && <div className="noElementsFilteredIndicator">Aucun mot ne correspond à ces filtres</div>}
            </div>
            {false && <span className="tooltip">Lancez une recherche ou appliquez des catégories<br />pour commencer à explorer</span>}
        </div>
    )
}

export default SidePanel