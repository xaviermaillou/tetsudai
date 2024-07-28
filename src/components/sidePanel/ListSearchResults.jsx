import KanjiElement from "../subComponents/KanjiElement"
import WordElement from "../subComponents/WordElement"
import Loading from "../visualComponents/Loading"
import ListElement from "../subComponents/ListElement"
import { localDictionnary } from "../../lib/dictionnary"
import { useContext } from "react"
import LanguageContext from "../../contexts/Language"
import Icon from "../subComponents/Icon"

const ListSearchResults = (props) => {
    const {
        searchExecuted,
        currentElement,
        kanjis,
        loadingKanjiList,
        noKanji,
        displayKanjis,
        setDisplayKanjis,
        handleKanjiChange,
        vocabulary,
        loadingVocabularyList,
        noWord,
        handleWordChange,
        setOpen,
        imgPath,
    } = props

    const language = useContext(LanguageContext)

    return (
        <div id="searchResultsContainer">
            {searchExecuted && <span className={displayKanjis ? "listIndicator clickable" : "listIndicator clickable closed"} onClick={() => setDisplayKanjis(!displayKanjis)}>
                <span className="bold">Kanji</span>
                {displayKanjis ?
                    <Icon src={`/img/${imgPath}/less.png`} alt="close kanji" />
                    :
                    <Icon src={`/img/${imgPath}/plus.png`} alt="open kanji" />
                }
            </span>}
            <div id="kanjisList" className={searchExecuted ?
                (displayKanjis ?
                    "extended wordsListList"
                    :
                    "closed wordsListList"
                )
                :
                "hidden closed wordsListList"}>
                {!!kanjis && kanjis.map((item, i) => (
                    <ListElement
                        isSelected={currentElement && currentElement.kanji && currentElement.id === item.id}
                        importance={item.importance}
                        child={
                            <KanjiElement
                                kanji={item}
                                changeCurrentKanjiById={
                                    (id) => {
                                        handleKanjiChange(id)
                                        if (window.innerWidth < 961) setOpen(false)
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
                {(noKanji && !loadingKanjiList) && <div className="noElementsFilteredIndicator">{localDictionnary[language].emptyKanjiSearch}</div>}
                {(!!!kanjis && !noKanji && !loadingKanjiList) && <div className="noElementsFilteredIndicator">No data available</div>}
            </div>
            <div id="vocabularyList" className={searchExecuted ?
                (displayKanjis ?
                    "wordsListList"
                    :
                    "extended wordsListList")
                :
                "hidden closed wordsListList"}>
                {!!vocabulary && vocabulary.map((item, i) => (
                    <ListElement
                        isSelected={currentElement && currentElement.completeWord && currentElement.id === item.id}
                        importance={item.importance}
                        child={
                            <WordElement
                                word={item}
                                changeCurrentWordById={
                                    (id) => {
                                        handleWordChange(id)
                                        if (window.innerWidth < 961) setOpen(false)
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
                {(noWord && !loadingVocabularyList) && <div className="noElementsFilteredIndicator">{localDictionnary[language].emptyWordSearch}</div>}
                {(!!!vocabulary && !noWord && !loadingVocabularyList) && <div className="noElementsFilteredIndicator">No data available</div>}
            </div>
            {false && <span className="tooltip">{localDictionnary[language].searchGlobalTip}</span>}
        </div>
    )
}

export default ListSearchResults