import { useState } from 'react';

const HistoryElement = (props) => {
    const {
        historyElementData,
        selected,
        changeCurrentKanjiByKanji,
        changeCurrentWordById,
    } = props;

    const handleClick = () => {
        historyElementData.kanji ?
        changeCurrentKanjiByKanji(historyElementData.kanji, true)
        :
        changeCurrentWordById(historyElementData.id, true)
    }

    return (
        <div
            className={selected ? "historyElement clickable selected" : "historyElement clickable"}
            onClick={handleClick}
        >
            {historyElementData.kanji || historyElementData.elements.map((e, i) => (
                <span key={i}>{e.kanji || e.kana}</span>
            ))}
        </div>
    );
}

const DisplayHistory = (props) => {
    const {
        displayHistory,
        kanji,
        word,
        changeCurrentKanjiByKanji,
        changeCurrentWordById,
    } = props;

    const [open, setOpen] = useState(false);

    const checkSelected = (element) => {
        if (kanji && element.kanji) {
            if (kanji.kanji === element.kanji) return true;
        }
        if (word && element.id) {
            if (word.id === element.id) return true;
        }
        return false;
    }

    return (
        <div
            id="displayHistoryContainer"
            className={open ? "open" : ""}
            onMouseLeave={() => setOpen(false)}
        >
            {displayHistory.length > 0 && <div
                id="historyIconContainer"
                className={open ? "hiddenElement" : "hiddenElement selected"}
            >
                <img
                    className='clickable'
                    src='/img/history.png'
                    alt='history'
                    onClick={() => setOpen(true)}
                />
            </div>}
            <div id="displayHistory">
                <div className="historyElement"></div>
                {displayHistory.map((e, i) => (
                    <HistoryElement
                        historyElementData={e}
                        selected={checkSelected(e)}
                        changeCurrentKanjiByKanji={changeCurrentKanjiByKanji}
                        changeCurrentWordById={changeCurrentWordById}
                        key={i}
                    />
                ))}
            </div>
        </div>
    );
}

export default DisplayHistory;