const HistoryElement = (props) => {
    const {
        historyElementData,
        selected,
        setOpenedHistory,
        changeCurrentKanjiById,
        changeCurrentWordById,
    } = props

    const handleClick = () => {
        if (!selected) {
            setOpenedHistory(true)
            historyElementData.kanji ?
            changeCurrentKanjiById(historyElementData.id)
            :
            changeCurrentWordById(historyElementData.id)
        }
    }

    return (
        <div
            className={selected ? "historyElement clickable selected" : "historyElement clickable"}
            onClick={handleClick}
        >
            {historyElementData.jukujikun ?
                <div className="historyElementMain">
                    {historyElementData.jukujikunAsMain ?
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
                        <span key={i}>{e.option === "rareKanji" ? e.kana : e.kanji || e.kana}</span>
                    ))}
                </div>
            }
            <span className="historyElementTranslation">{historyElementData.translation.join('; ')}</span>
            <span className="historyElementLabel">{historyElementData.kanji ? "kanji" : "mot"}</span>
        </div>
    )
}

const DisplayHistory = (props) => {
    const {
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

    return (
        <div
            id="displayHistoryContainer"
            className={openHistory ? "open" : ""}
            onMouseLeave={() => setOpenHistory(false)}
        >
            <div id="displayHistory">
                {displayHistory.map((e, i) => (
                    <HistoryElement
                        historyElementData={e}
                        selected={checkSelected(e)}
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