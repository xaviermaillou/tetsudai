const KanjiElement = (props) => {

    const { kanji, kanaToHighlight, changeCurrentKanjiById } = props

    return (
        <div className="kanjiElement clickable" onClick={() => changeCurrentKanjiById(kanji.id)}>
            <div className="kanjiElementKanji">
                {kanji.kanji}
            </div>
            <div className="kanjiElementKana">
                <div>
                    {
                        kanji.readings.kunyomi?.map((item, i) => (
                            <span className={item.kana === kanaToHighlight ? "highlighted" : ""} key={i}>
                                {i > 0 && ', '}
                                {item.kana}
                            </span>
                        ))
                    }
                    {
                        (kanji.readings.kunyomi.length>0 && kanji.readings.onyomi.length>0) && 
                        <>
                            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                        </>
                    }
                    {
                        kanji.readings.onyomi?.map((item, i) => (
                            <span className={item.kana === kanaToHighlight ? "highlighted" : ""} key={i}>
                                {i > 0 && ', '}
                                {item.kana}
                            </span>
                        ))
                    }
                </div>
                <div className="kanjiElementTranslation">
                    {kanji.translation}
                </div>
            </div>
        </div>
    )
}

export default KanjiElement