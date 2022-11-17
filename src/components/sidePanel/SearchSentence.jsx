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
        imgPath
    } = props

    useEffect(() => {
        setOpenSentence(!!searchIsSentence)
    }, [pinnedSentence, searchIsSentence, setOpenSentence])

    const handleCloseClick = () => {
        setOpenSentence(false)
    }

    const handleWordClick = (id) => {
        if (id && word?.id !== id) changeCurrentWordById(id)
        if (window.innerWidth < 961) setOpenMenu(false)
    }

    return (
        <div id="searchSentenceContainer" className={openSentence ? "open" : ""}>
            <div id="searchSentenceHeader" className={openSentence ? "open" : ""}>
                <span></span>
                <span className="tooltip">Phrase détectée</span>
                <span onClick={handleCloseClick}><img className="clickable" src={`/img/${imgPath}/close.png`} alt="close sentence" /></span>
            </div>
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