import { useContext } from "react"
import LanguageContext from "../contexts/Language"
import { localDictionnary } from "../lib/dictionnary"
import Icon from "./subComponents/Icon"
import isElectron from "is-electron"

const HistoryElement = (props) => {
    const {
        historyElementData,
        selected,
        setOpenHistory,
        setOpenedHistory,
        changeCurrentKanjiById,
        changeCurrentWordById,
    } = props

    const handleClick = () => {
        if (!selected) {
            setOpenHistory(false)
            setOpenedHistory(true)
            historyElementData.kanji ?
            changeCurrentKanjiById(historyElementData.id)
            :
            changeCurrentWordById(historyElementData.id)
        }
    }

    const language = useContext(LanguageContext)

    return (
        <div
            className={`historyElement clickable${selected ? " selected" : ""}`}
            onClick={handleClick}
        >
            {historyElementData.jukujikun ?
                <div className="historyElementMain">
                    {historyElementData.jukujikunAsMain ?
                        <span>{historyElementData.jukujikun}</span>
                        :
                        historyElementData.elements.map((e, i) => (
                            <span key={i}>{e.options?.rareKanji ? e.kana : e.kanji || e.kana}</span>
                        ))
                    }
                </div>
                :
                <div className="historyElementMain">
                    {historyElementData.kanji || historyElementData.elements.map((e, i) => (
                        <span key={i}>{e.options?.rareKanji ? e.kana : e.kanji || e.kana}</span>
                    ))}
                </div>
            }
            <span className="historyElementTranslation">{historyElementData.translation[language].join(' | ')}</span>
            <span className="historyElementLabel">{historyElementData.kanji ? localDictionnary[language].kanji : localDictionnary[language].word}</span>
        </div>
    )
}

const DisplayHistory = (props) => {
    const {
        imgPath,
        kanji,
        word,
        displayHistory,
        openHistory,
        setOpenHistory,
        setOpenedHistory,
        changeCurrentKanjiById,
        changeCurrentWordById
    } = props

    const checkSelected = (element) => {
        if (kanji && element.kanji) {
            if (kanji.kanji === element.kanji) return true
        }
        if (word && element.id) {
            if (word.id === element.id) return true
        }
        return false
    }

    const handleClose = (e) => {
        e.stopPropagation()
        setOpenHistory(false)
    }

    return (
        <div
            id="displayHistoryContainer"
            className={`${openHistory ? "open" : ""}${isElectron() ? " electron" : ""}`}
            onMouseLeave={() => setOpenHistory(false)}
        >
            <Icon
                onClick={(e) => handleClose(e)}
                className="clickable"
                src={`/img/${imgPath}/close.png`}
                alt="close sentence"
            />
            <div id="displayHistory">
                {displayHistory.map((e, i) => (
                    <HistoryElement
                        historyElementData={e}
                        selected={checkSelected(e)}
                        setOpenHistory={setOpenHistory}
                        setOpenedHistory={setOpenedHistory}
                        changeCurrentKanjiById={changeCurrentKanjiById}
                        changeCurrentWordById={changeCurrentWordById}
                        key={i}
                    />
                ))}
            </div>
        </div>
    )
}

export default DisplayHistory