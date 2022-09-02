const WordElement = (props) => {
    const { word, expanded = true, kanaToHighlight, changeCurrentWordById } = props

    return (
        <div className={expanded ? "yomiSingleExample clickable open" : "yomiSingleExample"} onClick={() => changeCurrentWordById(word.id)}>
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
                            <div className={element.kana === kanaToHighlight ? "vocabularyListElementKanjiKana highlighted" : "vocabularyListElementKanjiKana"} key={j}>
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
            <div className="yomiSingleExampleTranslation">
                {word?.translation}
            </div>
        </div>
    )
}

export default WordElement