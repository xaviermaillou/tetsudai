import { useEffect } from "react"
import SentenceElement from "../subComponents/SentenceElement"

const SearchSentence = (props) => {
    const {
        openSentence,
        setOpenSentence,
        word,
        changeCurrentWordById,
        pinnedSentence,
        searchIsSentence,
        setOpenMenu,
    } = props

    useEffect(() => {
        setOpenSentence(!!searchIsSentence)
    }, [searchIsSentence, setOpenSentence])

    const handleWordClick = (id) => {
        if (id && word?.id !== id) changeCurrentWordById(id)
        if (window.innerWidth < window.innerHeight) setOpenMenu(false)
    }

    return (
        <div id="searchSentenceContainer" className={openSentence ? "open" : ""}>
            <div id="searchSentence" className={openSentence ? "open" : ""}>
                {pinnedSentence?.elements.map((element, i) => (
                    <SentenceElement
                        element={element}
                        word={word}
                        handleWordClick={handleWordClick}
                        key={i}
                    />
                ))}
            </div>
        </div>
    )
}

export default SearchSentence