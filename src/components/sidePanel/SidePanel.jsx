import { useState, useEffect, useContext, useRef } from "react"
import ListHeader from "./ListHeader"
import SearchSentence from "./SearchSentence"
import ListSearchResults from "./ListSearchResults"
import { localDictionnary } from "../../lib/dictionnary"
import LanguageContext from "../../contexts/Language"
import Icon from "../subComponents/Icon"
import isElectron from "is-electron"

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

    const language = useContext(LanguageContext)

    const [displayKanjis, setDisplayKanjis] = useState(false)

    const [noKanji, setNoKanji] = useState(true)
    const [noWord, setNoWord] = useState(true)

    const toggle = () => {
        setOpen(!open)
    }

    useEffect(() => {
        setNoKanji(typeof kanjis === "array" && kanjis?.length === 0)
        setNoWord(typeof vocabulary === "array" && vocabulary?.length === 0)
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

    const inputRef = useRef(null)

    const handleIconClick = () => {
        search ? handleSearch("") : inputRef.current?.focus()
    }

    const [openSentence, setOpenSentence] = useState(false)

    return (
        <div
            id="sidePanel"
            className={`${open ? (searchExecuted || currentElement ? "open" : "open expanded") : ""}${isElectron() ? " electron" : ""}`}
        >
            <div id={currentElement ? "wordsListSearchContainer" : "wordsListSearchContainer expanded"}>
                {currentElement !== null &&
                    <Icon
                        id="wordsListOpener"
                        className={open ? "open clickable" : "clickable"}
                        onClick={toggle}
                        src={`/img/${imgPath}/next.png`}
                        alt="see all words"
                    />
                }
                <div id="wordsListSearch">
                    <div className="icon clickable" onClick={handleIconClick}>
                        {search ?
                            <Icon className="close" src={`/img/${imgPath}/close.png`} alt="erase search" />
                            :
                            <Icon src={`/img/${imgPath}/search.png`} alt="search" />
                        }
                    </div>
                    <input
                        value={searchCopy}
                        className={searchExecuted ? "" : "highlighted"}
                        onChange={(e) => {handleSearch(e.target.value)}}
                        type="text"
                        spellCheck="false"
                        placeholder={localDictionnary[language].searchPlaceholder}
                        ref={inputRef}
                    />
                </div>
            </div>
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
            {pinnedSentence && <SearchSentence
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