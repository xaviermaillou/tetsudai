import { dictionnary } from "tetsudai-common"

const WordElement = (props) => {
    const { word, kanaToHighlight, changeCurrentWordById, grammar, verbPrecisions } = props

    return (
        <div className="wordElement clickable" onClick={() => changeCurrentWordById(word.id)}>
            {word.jukujikun ?
                    <div className="wordElementJukujikun">
                        <div className="wordElementJukujikunMainCharacters">
                            {word.jukujikunAsMain ?
                                <div>{word.jukujikun}</div>
                                :
                                word.elements.map((element, j) => (
                                    <div key={j}>{element.option === "rareKanji" ? element.kana : element.kanji || element.kana}</div>
                                ))
                            }
                        </div>
                        <div className="wordElementSecondaryCharacters">
                            {word.jukujikunAsMain ?
                                word.elements.map((element, j) => (
                                    <span key={j}>{element.option === "rareKanji" ? element.kanji : element.kana}</span>
                                ))
                                :
                                <span>{word.jukujikun}</span>
                            }
                        </div>
                    </div>
                    :
                    <div className="wordElementRegularJapanese">
                        {word.elements?.map((element, j) => (
                            <div className={element.kana === kanaToHighlight ? "wordElementRegularJapaneseMainCharacters highlighted" : "wordElementRegularJapaneseMainCharacters"} key={j}>
                                <div>{element.option === "rareKanji" ? element.kana : element.kanji || element.kana}</div>
                                {element.kanji &&
                                    <div className="wordElementSecondaryCharacters">
                                        {element.option === "rareKanji" ? element.kanji : element.kana}
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                }
            <div className="wordElementDetails">
                <div className="wordElementTranslation">
                    {word?.translation}
                </div>
                {grammar && <div>
                        {grammar.map((el, i) => (
                            <span key={i}>
                            {i > 0 && ', '}
                            {el === 14 ?
                                'verbe ' + dictionnary.verbGrammar[verbPrecisions?.grammar] + ' avec する'
                                :
                                dictionnary.classes[el].toLowerCase() + (el === 3 ? ' ' + dictionnary.verbGrammar[verbPrecisions?.grammar] : '')
                            }
                        </span>
                        ))}
                    </div>}
            </div>
        </div>
    )
}

export default WordElement