import { useState, useEffect } from "react"
import ListHeader from "./ListHeader"
import FoundSentence from "./FoundSentence"
import ListSearchResults from "./ListSearchResults"
import isElectron from "is-electron"
import Search from "./Search"

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
        searchCopy,
        handleSearch,
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
        setNoKanji(Array.isArray(kanjis) && kanjis?.length === 0)
        setNoWord(Array.isArray(vocabulary) && vocabulary?.length === 0)
    }, [kanjis, vocabulary])

    useEffect(() => {
        if (searchExecuted
            && !loadingVocabularyList
            && kanjis?.length > 0
            && vocabulary?.length === 0
        ) {
            setDisplayKanjis(true)
        }
    }, [searchExecuted, loadingVocabularyList, kanjis, vocabulary])

    if (kanjis?.length >= kanjiListOffset + 100) {
        const kanjiContainer = document.getElementById('kanjisList')
        kanjiContainer?.addEventListener('scroll', () => {
            if ((kanjiContainer.offsetHeight + kanjiContainer.scrollTop + 100) >= kanjiContainer.scrollHeight) {
                setKanjisListOffset(kanjiListOffset + 100)
            }
        })
    }
    if (vocabulary?.length >= vocabularyListOffset + 100) {
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
        <div
            id="sidePanel"
            className={`${open ? (searchExecuted || currentElement ? "open" : "open expanded") : ""}${isElectron() ? " electron" : ""}`}
        >
            <Search
                imgPath={imgPath}
                currentElement={currentElement}
                search={search}
                searchCopy={searchCopy}
                handleSearch={handleSearch}
                searchExecuted={searchExecuted}
                open={open}
                toggle={toggle}
            />
            <ListHeader
                openFilter={openFilter}
                setOpenFilter={setOpenFilter}
                openSentence={!!pinnedSentence && openSentence}
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
                handleSearch={handleSearch}
                searchExecuted={searchExecuted}
                setSearchExecuted={setSearchExecuted}
                currentElement={currentElement}
            />
            {pinnedSentence && <FoundSentence
                openSentence={openSentence}
                setOpenSentence={setOpenSentence}
                word={(currentElement && currentElement.primaryWord) ? currentElement : undefined}
                changeCurrentWordById={changeCurrentWordById}
                pinnedSentence={pinnedSentence}
                setOpenMenu={setOpen}
                imgPath={imgPath}
            />}
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
            />
        </div>
    )
}

export default SidePanel