import WordElement from "./WordElement"

const SentenceElement = (props) => {
    const {
        element,
        word,
        handleWordClick,
    } = props

    return (
        <div 
            onClick={() => handleWordClick(element.id)}
            className={word?.id === element.id ?
                `sentenceElementContainer importance${element.importance} clickable highlighted`
                :
                element.id ?
                    `sentenceElementContainer importance${element.importance} clickable`
                    :
                    "sentenceElementContainer"
            }
        >
            <div className="sentenceElement">
                {element.id && <div className="sentenceElementInfo">
                    <WordElement
                        word={element}
                        changeCurrentWordById={handleWordClick}
                        grammar={element.grammar?.class}
                        tense={element.grammar?.tense}
                    />
                </div>}
            </div>
            <span className="sentenceElementUsedWord">
                {element.word}
            </span>
        </div>
    )
}

export default SentenceElement