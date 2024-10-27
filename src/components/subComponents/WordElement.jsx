import { dictionnary, kanasDictionnary } from "tetsudai-common"
import { localDictionnary } from "../../lib/dictionnary"
import { useContext } from "react"
import LanguageContext from "../../contexts/Language"

const WordElement = (props) => {
    const {
        word,
        kanasToHighlight,
        changeCurrentWordById,
        sentenceGrammar,
    } = props

    const language = useContext(LanguageContext)

    return (
        <div className="wordElement clickable" onClick={() => changeCurrentWordById(word.id)}>
            {!!sentenceGrammar ?
                <div />
                :
                (word.jukujikun ?
                    <div className="wordElementJukujikun">
                        <div className="wordElementJukujikunMainCharacters">
                            {word.jukujikunAsMain ?
                                <div>{word.jukujikun}</div>
                                :
                                word.elements.map((element, j) => (
                                    <div key={j}>{element.options.rareKanji ? element.kana : element.kanji || element.kana}</div>
                                ))
                            }
                        </div>
                        <div className="wordElementSecondaryCharacters">
                            {word.jukujikunAsMain ?
                                word.elements.map((element, j) => (
                                    <span key={j}>{element.options.rareKanji ? element.kanji : element.kana || element.kanji}</span>
                                ))
                                :
                                <span>{word.jukujikun}</span>
                            }
                        </div>
                    </div>
                    :
                    <div className="wordElementRegularJapanese">
                        {word.elements?.map((element, j) => (
                            <div
                                className={
                                    kanasToHighlight?.includes(kanasDictionnary.kanasRegularization(element.kana)) ?
                                        "wordElementRegularJapaneseMainCharacters highlighted"
                                        :
                                        "wordElementRegularJapaneseMainCharacters"
                                }
                                key={j}
                            >
                                <div>{element.options.rareKanji ? element.kana : element.kanji || element.kana}</div>
                                {element.kanji &&
                                    <div className="wordElementSecondaryCharacters">
                                        {element.options.rareKanji ? element.kanji : element.kana}
                                    </div>
                                }
                            </div>
                        ))}
                    </div>)
            }
            <div className={`wordElementDetails${sentenceGrammar ? " extended" : ""}`}>
                {sentenceGrammar ?
                    <div className="wordElementGrammar">
                        {dictionnary[language].classes[sentenceGrammar.function]?.toLowerCase()}
                        {sentenceGrammar.tense &&
                            <span className="wordElementGrammarTense">
                                {Object.entries(sentenceGrammar.tense).map(([key, value]) => <span key={key}>&nbsp;{localDictionnary[language][value]}</span>)}
                            </span>
                        }
                        {sentenceGrammar.form &&
                            <span className="wordElementGrammarTense">
                                <span>&nbsp;{localDictionnary[language][sentenceGrammar.form]}</span>
                            </span>
                        }
                    </div>
                    :
                    <div className="wordElementGrammar">
                        {word?.grammar.map((el, i) => (
                            <span key={i}>
                                {i > 0 && ', '}
                                {dictionnary[language].classes[el].toLowerCase() + (el === "vb" ? ' ' + (dictionnary[language].verbGrammar[word.verbPrecisions.grammar] || 'irrégulier') : '')}
                            </span>
                        ))}
                    </div>
                }
                <div className="wordElementTranslation">
                    {word?.translation[language].join(' | ')}
                </div>
            </div>
        </div>
    )
}

export default WordElement