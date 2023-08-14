import WordElement from "./WordElement"

const SentenceElement = (props) => {
    const {
        element,
        word,
        handleWordClick,
    } = props

    const firstFoundElement = element.foundElements[0]

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
                {element.ambiguity && <span className="tooltip sentenceElementAmbiguity">Plusieurs mots peuvent correspondre</span>}
                {firstFoundElement.id && <div className={element.ambiguity ? "sentenceElementInfo extended" : "sentenceElementInfo"}>
                    {element.foundElements.map((foundElement) => (
                        <WordElement
                            word={foundElement}
                            changeCurrentWordById={handleWordClick}
                            sentenceGrammar={foundElement.sentenceGrammar}
                        />
                    ))}
                </div>}
            </div>
            <span className="sentenceElementUsedWord">
                {firstFoundElement.word}
            </span>
        </div>
    )
}

export default SentenceElement