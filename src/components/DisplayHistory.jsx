import { useState } from 'react'

const HistoryElement = (props) => {
    const {
        historyElementData,
        selected,
        changeCurrentKanjiById,
        changeCurrentWordById,
    } = props

    const handleClick = () => {
        if (!selected) {
            historyElementData.kanji ?
            changeCurrentKanjiById(historyElementData.id, true)
            :
            changeCurrentWordById(historyElementData.id, true)
        }
    }

    return (
        <div
            className={selected ? "historyElement clickable selected" : "historyElement clickable"}
            onClick={handleClick}
        >
            {historyElementData.jukujikun ?
                <div className="historyElementMain">
                    {historyElementData.rareKanji ?
                        <span>{historyElementData.jukujikun}</span>
                        :
                        historyElementData.elements.map((e, i) => (
                            <span key={i}>{e.kanji || e.kana}</span>
                        ))
                    }
                </div>
                :
                <div className="historyElementMain">
                    {historyElementData.kanji || historyElementData.elements.map((e, i) => (
                        <span key={i}>{historyElementData.rareKanji ? e.kana : e.kanji || e.kana}</span>
                    ))}
                </div>
            }
            <span className="historyElementTranslation">{historyElementData.translation}</span>
            <span className="historyElementLabel">{historyElementData.kanji ? "kanji" : "mot"}</span>
        </div>
    )
}

const DisplayHistory = (props) => {
    const {
        imgPath,
        displayHistory,
        historyDisplayed,
        kanji,
        word,
        changeCurrentKanjiById,
        changeCurrentWordById,
    } = props

    const [open, setOpen] = useState(false)

    const checkSelected = (element) => {
        if (kanji && element.kanji) {
            if (kanji.kanji === element.kanji) return true
        }
        if (word && element.id) {
            if (word.id === element.id) return true
        }
        return false
    }

    return (
        <div
            id="displayHistoryContainer"
            className={open ? "open" : ""}
            onMouseLeave={() => setOpen(false)}
        >
            {historyDisplayed && <div
                id="historyIconContainer"
                className={open ? "hiddenElement" : "hiddenElement selected"}
            >
                <img
                    className='clickable'
                    src={`/img/${imgPath}/history.png`}
                    alt='history'
                    onClick={() => setOpen(true)}
                />
            </div>}
            <div id="displayHistory">
                {displayHistory.map((e, i) => (
                    <HistoryElement
                        historyElementData={e}
                        selected={checkSelected(e)}
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