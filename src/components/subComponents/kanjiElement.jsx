const KanjiElement = (props) => {

    const { kanji, changeCurrentKanjiById } = props

    return (
        <div className="kanjisElement clickable" onClick={() => changeCurrentKanjiById(kanji.id)}>
            <div className="kanjisElementKanji">
                {kanji.kanji}
            </div>
            <div className="kanjisElementKana">
                <div>
                    {
                        kanji.readings.kunyomi?.map((item, i) => (
                            <span key={i}>
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
                            <span key={i}>
                                {i > 0 && ', '}
                                {item.kana}
                            </span>
                        ))
                    }
                </div>
                <div className="kanjisListTranslation">
                    {kanji.translation}
                </div>
            </div>
        </div>
    )
}

export default KanjiElement