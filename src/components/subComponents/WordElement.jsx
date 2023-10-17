import { dictionnary } from "tetsudai-common"
import { localDictionnary } from "../../lib/dictionnary"
import { useContext } from "react"
import LanguageContext from "../../contexts/Language"

const WordElement = (props) => {
    const {
        word,
        kanaToHighlight,
        changeCurrentWordById,
        sentenceGrammar,
    } = props

    const language = useContext(LanguageContext)

    return (
        <div className="wordElement clickable" onClick={() => changeCurrentWordById(word.id)}>
            {word.jukujikun ?
                    <div className="wordElementJukujikun">
                        <div className="wordElementJukujikunMainCharacters">
                            {word.jukujikunAsMain ?
                                <div>{word.jukujikun}</div>
                                :
                                word.elements.map((element, j) => (
                                    <div key={j}>{element.kanji || element.kana}</div>
                                ))
                            }
                        </div>
                        <div className="wordElementSecondaryCharacters">
                            {word.jukujikunAsMain ?
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
                    {word?.translation[language].join(' | ')}
                </div>
                {sentenceGrammar &&
                    <div className="wordElementGrammar">
                        {dictionnary[language].classes[sentenceGrammar.function]?.toLowerCase()}
                        {sentenceGrammar.tense &&
                            <span className="wordElementGrammarTense">
                                {Object.entries(sentenceGrammar.tense).map(([key, value]) => <span key={key}>&nbsp;{localDictionnary[language][value]}</span>)}
                            </span>
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default WordElement