import { useContext, useEffect } from "react"
import SentenceElement from "../subComponents/SentenceElement"
import { localDictionnary } from "../../lib/dictionnary"
import LanguageContext from "../../contexts/Language"

const SearchSentence = (props) => {
    const {
        openSentence,
        setOpenSentence,
        word,
        changeCurrentWordById,
        pinnedSentence,
        setOpenMenu,
        imgPath
    } = props

    const language = useContext(LanguageContext)

    useEffect(() => {
        setOpenSentence(true)
    }, [pinnedSentence, setOpenSentence])

    const handleOpenSentence = () => {
        setOpenSentence(!openSentence)
    }

    const handleWordClick = (id) => {
        if (id && word?.id !== id) changeCurrentWordById(id)
        if (window.innerWidth < 961) setOpenMenu(false)
    }

    return (
        <div id="searchSentenceContainer" className={openSentence ? "open" : ""}>
            <div id="searchSentenceHeader" onClick={handleOpenSentence} className={openSentence ? "listIndicator clickable" : "listIndicator clickable closed"}>
                <span></span>
                <span className="tooltip">{localDictionnary[language].detectedSentence}</span>
                <span><img className="clickable" src={openSentence ? `/img/${imgPath}/less.png` : `/img/${imgPath}/plus.png`} alt={openSentence ? "close sentence" : "open sentence"} /></span>
            </div>
            <div id="searchSentence" className={openSentence ? "open" : ""}>
                {pinnedSentence?.elements?.map((element, i) => (
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