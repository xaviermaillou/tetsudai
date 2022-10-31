import { useState, useEffect } from "react"
import ListElement from "./ListElement"
import ListHeader from "./ListHeader"
import KanjiElement from "../subComponents/KanjiElement"
import WordElement from "../subComponents/WordElement"
import Loading from "../visualComponents/Loading"

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
            setOpenFilter(false)
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

    useEffect(() => {
        if (searchExecuted
            && !loadingVocabularyList
            && kanjis.length > 0
            && vocabulary.length === 0
        ) {
            setDisplayKanjis(true)
        }
    }, [searchExecuted, loadingVocabularyList, kanjis, vocabulary])

    if (kanjis.length >= kanjiListOffset + 100) {
        const kanjiContainer = document.getElementById('kanjisList')
        kanjiContainer?.addEventListener('scroll', () => {
            if ((kanjiContainer.offsetHeight + kanjiContainer.scrollTop + 100) >= kanjiContainer.scrollHeight) {
                setKanjisListOffset(kanjiListOffset + 100)
            }
        })
    }
    if (vocabulary.length >= vocabularyListOffset + 100) {
        const vocabularyContainer = document.getElementById('vocabularyList')
        vocabularyContainer?.addEventListener('scroll', () => {
            if ((vocabularyContainer.offsetHeight + vocabularyContainer.scrollTop + 100) >= vocabularyContainer.scrollHeight) {
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
                    <ListElement
                        isSelected={currentElement && currentElement.kanji && currentElement.id === item.id}
                        importance={item.importance}
                        child={
                            <KanjiElement
                                kanji={item}
                                changeCurrentKanjiById={
                                    (id) => {
                                        handleKanjiChange(id)
                                        if (window.innerWidth < window.innerHeight) setOpen(false)
                                    }
                                }
                            />
                        }
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
                    <ListElement
                        isSelected={currentElement && currentElement.completeWord && currentElement.id === item.id}
                        importance={item.importance}
                        child={
                            <WordElement
                                word={item}
                                changeCurrentWordById={
                                    (id) => {
                                        handleWordChange(id)
                                        if (window.innerWidth < window.innerHeight) setOpen(false)
                                    }
                                }
                            />
                        }
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