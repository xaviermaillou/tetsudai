const PinnedSentence = (props) => {
    const {
        offset,
        word,
        changeCurrentWordById,
        pinnedSentence,
        setPinnedSentence,
        imgPath
    } = props

    const handleWordClick = (id) => {
        if (id && word?.id !== id) changeCurrentWordById(id)
    }

    return (
        <div id="pinnedSentenceContainer" className={pinnedSentence ? (offset ? "open offset" : "open") : (offset ? "offset" : "")}>
            {pinnedSentence && <div id="pinnedSentenceHeader">
                <img
                    onClick={() => setPinnedSentence(null)}
                    className="clickable"
                    src={`/img/${imgPath}/close.png`}
                    alt="unpin sentence"
                />
            </div>}
            <div id="pinnedSentence">
                {pinnedSentence?.elements.map((element, i) => (
                    <div 
                        onClick={() => handleWordClick(element.id)} 
                        className={word?.id === element.id ? 
                            "pinnedSentenceElement highlighted"
                            :
                            element.id ? 
                                "pinnedSentenceElement clickable"
                                :
                                "pinnedSentenceElement"
                        }
                        key={i}
                    >
                        <span>
                            {element.word}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PinnedSentence