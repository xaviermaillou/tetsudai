import { useEffect, useState } from "react"

const PinnedSentence = (props) => {
    const {
        offset,
        word,
        changeCurrentWordById,
        pinnedSentence,
        setPinnedSentence,
        imgPath,
        searchIsSentence,
        fetchSentence,
        storedSearchSentence
    } = props

    const [open, setOpen] = useState(false)

    const openSentence = () => {
        fetchSentence(storedSearchSentence)
        setOpen(true)
    }

    const closeSentence = () => {
        setOpen(false)
        setTimeout(() => setPinnedSentence(null), 200)
    }

    useEffect(() => {
        setOpen(!!pinnedSentence)
    }, [pinnedSentence])

    const handleWordClick = (id) => {
        if (id && word?.id !== id) changeCurrentWordById(id)
    }

    return (
        <div id="pinnedSentenceContainer" className={(pinnedSentence || searchIsSentence) ? (offset ? "open offset" : "open") : (offset ? "offset" : "")}>
            {(pinnedSentence || searchIsSentence) &&
                <div id="pinnedSentenceHeader" className={pinnedSentence ? "open" : ""}>
                    {pinnedSentence ?
                        <img
                            onClick={() => closeSentence()}
                            className="clickable"
                            src={searchIsSentence ? `/img/${imgPath}/less.png` : `/img/${imgPath}/close.png`}
                            alt="pin sentence"
                        />
                        :
                        <img
                            onClick={() => openSentence()}
                            className="clickable"
                            src={`/img/${imgPath}/plus.png`}
                            alt="unpin sentence"
                        />
                    }
                </div>
            }
            <div id="pinnedSentence" className={open ? "open" : ""}>
                {pinnedSentence?.elements.map((element, i) => (
                    <div 
                        onClick={() => handleWordClick(element.id)} 
                        className={word?.id === element.id ? 
                            `pinnedSentenceElement importance${element.importance} highlighted`
                            :
                            element.id ? 
                                `pinnedSentenceElement importance${element.importance} clickable`
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