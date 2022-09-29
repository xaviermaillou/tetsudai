import { useState, useEffect } from "react"
import { dictionnary } from "tetsudai-common"
import KanjiElement from "./subComponents/KanjiElement"
import WordElement from "./subComponents/WordElement"
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
        currentElement
    } = props

    const handleClick = (key, filterSetter) => {
        filterSetter(key)
        if (!searchExecuted) setOpenFilter(false)
        setSearchExecuted(true)
    }

    return (
        <div id="wordsListFilterModal" className={openFilter ? (searchExecuted || currentElement ? "open" : "open expanded") : (searchExecuted || currentElement ? "" : "expanded")}>
            <div>
                {Object.values(dictionnary.pluralClasses).map((value, key) => (
                    <span key={key} onClick={() => handleClick(key, setGrammar)} className={grammar === key ? "selected clickable" : "clickable"}>{value}</span>
                ))}
            </div>
            <div>
                {Object.values(dictionnary.levels).map((value, key) => (
                    <span key={key} onClick={() => handleClick(key, setLevel)} className={level === key ? "selected clickable" : "clickable"}>{value ? `JLPT ${value}` : 'Hors niveau'}</span>
                ))}
            </div>
            <div>
                {Object.values(dictionnary.collections).map((value, key) => (
                    <span key={key} onClick={() => handleClick(key, setCollection)} className={collection === key ? "selected clickable" : "clickable"}>{value}</span>
                ))}
            </div>
        </div>
    )
}

const ListHeader = (props) => {
    const {
        openFilter,
        setOpenFilter,
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
        currentElement,
    } = props

    const [openTrainingModal, setOpenTrainingModal] = useState(false)
    const handleTrainingIconClick = () => {
        setOpenTrainingModal(!openTrainingModal)
        setOpenFilter(false)
    }

    useEffect(() => {
        if (filterIndication) {
            setOpenTrainingModal(false)
            setOpenFilter(true)
        }
    }, [filterIndication, setOpenFilter])
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
                                    <span>{dictionnary.pluralClasses[grammar]}</span>&nbsp;&nbsp;
                                    <img className="clickable" src={`/img/${imgPath}/close.png`} alt="close filter" onClick={() => setGrammar(0)} />
                                </span>
                            }
                            {(level !==0 && grammar !==0) && <span>|</span>}
                            {level !==0 &&
                                <span className="filtersIndicatorsElement">
                                    <span>{dictionnary.levels[level] ? `JLPT ${dictionnary.levels[level]}` : 'Hors JLPT'}</span>&nbsp;&nbsp;
                                    <img className="clickable" src={`/img/${imgPath}/close.png`} alt="close filter" onClick={() => setLevel(0)} />
                                </span>
                            }
                            {(collection !==0 && level !==0) && <span>|</span>}
                            {collection !==0 &&
                                <span className="filtersIndicatorsElement">
                                    <span>{dictionnary.collections[collection]}</span>&nbsp;&nbsp;
                                    <img className="clickable" src={`/img/${imgPath}/close.png`} alt="close filter" onClick={() => setCollection(0)} />
                                </span>
                            }
                        </div>
                        :
                        (searchExecuted && <span id="filtersIndicatorsEmpty">
                            Aucune catégorie sélectionnée
                        </span>)
                    }
                    <div></div>
                </div>
                <div id="filtersTip" className={openFilter ? "wordsListHeaderRow open" : "wordsListHeaderRow"}>
                    {searchExecuted ?
                        <div className="tooltip">Filtrer par classe grammaticale, niveau JLPT ou collection</div>
                        :
                        <div className="tooltip expanded">Sélectionner une catégorie pour en afficher le contenu</div>
                    }
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
                currentElement={currentElement}
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
        <div className={importance ? `importance${importance} kanjisListElementContainer`: "kanjisListElementContainer"} >
            <div 
                className={(currentElement && currentElement.kanji && currentElement.id === kanji.id) ?
                    "kanjisListElement selected" : "kanjisListElement"}
            >
                <KanjiElement
                    kanji={kanji}
                    changeCurrentKanjiById={clickHandle}
                />
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
        changeCurrentWordById(id)
        if (window.innerWidth < window.innerHeight) setOpen(false)
    }

    return (
        <div className={importance ? `importance${importance} vocabularyListElementContainer` : "vocabularyListElementContainer"} >
            <div 
                className={(currentElement && currentElement.elements && currentElement.id === word.id) ?
                    "vocabularyListElement selected" : "vocabularyListElement"}
            >
                <WordElement
                    word={word}
                    changeCurrentWordById={clickHandle}
                />
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
        setOpenedHistory,
    } = props

    const [displayKanjis, setDisplayKanjis] = useState(false)
    const [displayWords] = useState(true)

    const [noKanji, setNoKanji] = useState(true)
    const [noWord, setNoWord] = useState(true)

    const [searchCopy, setSearchCopy] = useState(search)

    const [openFilter, setOpenFilter] = useState(false)

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

    const handleKanjiChange = (id) => {
        setOpenedHistory(false)
        changeCurrentKanjiById(id)
    }

    const handleWordChange = (id) => {
        setOpenedHistory(false)
        changeCurrentWordById(id)
    }

    return (
        <div id="sidePanel" className={open ? (searchExecuted || currentElement ? "open" : "open expanded") : ""}>
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
                        spellCheck="false"
                        placeholder="Rechercher en japonais, romaji, français..."
                    />
                </div>
            </div>
            <ListHeader
                openFilter={openFilter}
                setOpenFilter={setOpenFilter}
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
                currentElement={currentElement}
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
                        changeCurrentKanjiById={(id) => handleKanjiChange(id)}
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
                        changeCurrentWordById={(id) => handleWordChange(id)}
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