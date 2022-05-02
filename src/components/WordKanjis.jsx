const Kanji = (props) => {
    const {
        element,
        changeCurrentKanjiByKanji,
    } = props;
    return (
        <div className="kanjisElement clickable" onClick={() => changeCurrentKanjiByKanji(element.kanji)}>
            <div className="kanjisElementKanji">
                {element.details.kanji}
            </div>
            <div className="kanjisElementKana">
                <div>
                    {
                        element.details.readings.kunyomi?.map((item, i) => (
                            <span key={i}>
                                {i > 0 && ', '}
                                {item.kana}
                            </span>
                        ))
                    }
                    {
                        (element.details.readings.kunyomi.length>0 && element.details.readings.onyomi.length>0) && 
                        <>
                            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                        </>
                    }
                    {
                        element.details.readings.onyomi?.map((item, i) => (
                            <span key={i}>
                                {i > 0 && ', '}
                                {item.kana}
                            </span>
                        ))
                    }
                </div>
                <div className="kanjisListTranslation">
                    {element.details.translation}
                </div>
            </div>
        </div>
    );
}

const WordKanjis = (props) => {
    const {
        elements,
        allDisplayed,
        expanded,
        changeCurrentKanjiByKanji,
    } = props;
    return (
        <div id="kanjis" className={allDisplayed ? (expanded ? 'hiddenElement selected expanded' : 'hiddenElement selected') : 'hiddenElement'}>
            {elements?.map((element, i) => (
                <Kanji
                    element={element}
                    changeCurrentKanjiByKanji={changeCurrentKanjiByKanji}
                    key={i}
                />
            ))}
        </div>
    );
}

export default WordKanjis;