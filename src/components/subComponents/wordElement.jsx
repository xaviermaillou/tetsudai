const WordElement = (props) => {
    const { word, expanded = true, kanaToHighlight, changeCurrentWordById } = props

    return (
        <div className={expanded ? "wordElement clickable open" : "wordElement"} onClick={() => changeCurrentWordById(word.id)}>
            {word.jukujikun ?
                    <div className="wordElementJukujikun">
                        <div className="wordElementJukujikunMainCharacters">
                            {word.rareKanji ?
                                <div>{word.jukujikun}</div>
                                :
                                word.elements.map((element, j) => (
                                    <div key={j}>{element.kanji || element.kana}</div>
                                ))
                            }
                        </div>
                        <div className="wordElementSecondaryCharacters">
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
                    <div className="wordElementRegularJapanese">
                        {word.elements.map((element, j) => (
                            <div className={element.kana === kanaToHighlight ? "wordElementRegularJapaneseMainCharacters highlighted" : "wordElementRegularJapaneseMainCharacters"} key={j}>
                                <div>{word.rareKanji ? element.kana : element.kanji || element.kana}</div>
                                {element.kanji &&
                                    <div className="wordElementSecondaryCharacters">
                                        {word.rareKanji ? element.kanji || element.kana : element.kana}
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                }
            <div className="wordElementTranslation">
                {word?.translation}
            </div>
        </div>
    )
}

export default WordElement