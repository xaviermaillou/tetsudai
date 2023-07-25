import { useState, useEffect } from "react"
import ListHeader from "./ListHeader"
import SearchSentence from "./SearchSentence"
import ListSearchResults from "./ListSearchResults"

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
        searchCopy,
        handleSearch,
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
        pinnedSentence,
        searchIsSentence,
        openFilter,
        setOpenFilter,
    } = props

    const [displayKanjis, setDisplayKanjis] = useState(false)

    const [noKanji, setNoKanji] = useState(true)
    const [noWord, setNoWord] = useState(true)

    const toggle = () => {
        setOpen(!open)
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

    const [openSentence, setOpenSentence] = useState(false)

    return (
        <div id="sidePanel" className={open ? (searchExecuted || currentElement ? "open" : "open expanded") : ""}>
            <div id="wordsListSearchContainer">
                {(currentElement !== null && window.innerWidth <= 961) &&
                    <img
                        id="wordsListOpener"
                        className={open ? "open clickable" : "clickable"}
                        onClick={toggle}
                        src={`/img/${imgPath}/up.png`}
                        alt="see all words"
                    />
                }
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
            {!openSentence &&
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
            }
            <SearchSentence
                openSentence={openSentence}
                setOpenSentence={setOpenSentence}
                word={(currentElement && currentElement.completeWord) ? currentElement : undefined}
                changeCurrentWordById={changeCurrentWordById}
                pinnedSentence={pinnedSentence}
                searchIsSentence={searchIsSentence}
                setOpenMenu={setOpen}
                imgPath={imgPath}
            />
            <ListSearchResults
                searchExecuted={searchExecuted}
                currentElement={currentElement}
                kanjis={kanjis}
                loadingKanjiList={loadingKanjiList}
                noKanji={noKanji}
                displayKanjis={displayKanjis}
                setDisplayKanjis={setDisplayKanjis}
                handleKanjiChange={handleKanjiChange}
                vocabulary={vocabulary}
                loadingVocabularyList={loadingVocabularyList}
                noWord={noWord}
                handleWordChange={handleWordChange}
                setOpen={setOpen}
                imgPath={imgPath}
                openSentence={openSentence}
            />
        </div>
    )
}

export default SidePanel