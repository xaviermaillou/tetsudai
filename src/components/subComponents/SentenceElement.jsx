import { useContext, useMemo } from "react"
import WordElement from "./WordElement"
import LanguageContext from "../../contexts/Language"
import { localDictionnary } from "../../lib/dictionnary"

const SentenceElement = (props) => {
    const {
        element,
        word,
        handleWordClick,
    } = props

    const language = useContext(LanguageContext)

    const firstFoundElement = useMemo(() => element.foundElements[0], [element.foundElements])

    const isNumeric = useMemo(() => firstFoundElement.matching.match(/^\d+$/), [firstFoundElement.matching])

    return (
        <div 
            onClick={() => !element.ambiguity ? handleWordClick(firstFoundElement.id) : null}
            className={(!element.ambiguity && firstFoundElement.id && word?.id === firstFoundElement.id) ?
                `sentenceElementContainer importance${firstFoundElement.importance} clickable highlighted`
                :
                (!element.ambiguity && firstFoundElement.id) ?
                    `sentenceElementContainer importance${firstFoundElement.importance} clickable`
                    :
                    element.ambiguity ?
                        "sentenceElementContainer ambiguous"
                        :
                        "sentenceElementContainer"
            }
        >
            <div className="sentenceElement">
                {element.ambiguity && <span className="tooltip sentenceElementAmbiguity">{localDictionnary[language].wordsConflict}</span>}
                {firstFoundElement.id && <div className={element.ambiguity ? "sentenceElementInfo extended" : "sentenceElementInfo"}>
                    {element.foundElements.map((foundElement, i) => (
                        <WordElement
                            word={foundElement}
                            changeCurrentWordById={handleWordClick}
                            sentenceGrammar={foundElement.sentenceGrammar}
                            key={i}
                        />
                    ))}
                </div>}
            </div>
            {isNumeric ?
                <span className="sentenceElementUsedNumber">
                    {firstFoundElement.matching.split("").map((number) => (
                        <span>{number}</span>
                    ))}
                </span>
                :
                <span className="sentenceElementUsedWord">
                    {firstFoundElement.matching}
                </span>
            }
        </div>
    )
}

export default SentenceElement