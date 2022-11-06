import KanjiElement from "../subComponents/KanjiElement"
import WordElement from "../subComponents/WordElement"
import Loading from "../visualComponents/Loading"
import ListElement from "../subComponents/ListElement"

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
        openSentence,
    } = props

    return (
        <div id="searchResultsContainer">
            {(searchExecuted && !openSentence) && <span className={displayKanjis ? "listIndicator clickable" : "listIndicator clickable closed"} onClick={() => setDisplayKanjis(!displayKanjis)}>
                <span>Kanji</span>
                {displayKanjis ?
                    <img src={`/img/${imgPath}/less.png`} alt="close kanji" />
                    :
                    <img src={`/img/${imgPath}/plus.png`} alt="open kanji" />
                }
            </span>}
            {!openSentence && <div id="kanjisList" className={searchExecuted ?
                (displayKanjis ?
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
            </div>}
            {!openSentence && <div id="vocabularyList" className={searchExecuted ?
                (displayKanjis ?
                    "wordsListList"
                    :
                    "extended wordsListList")
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
            </div>}
            {false && <span className="tooltip">Lancez une recherche ou appliquez des catégories<br />pour commencer à explorer</span>}
        </div>
    )
}

export default ListSearchResults