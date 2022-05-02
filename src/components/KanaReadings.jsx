import { useState, useEffect } from "react";

const Yomi = (props) => {
    const {
        example,
        wordExamples,
        changeCurrentKanjiByKanji,
        changeCurrentWordById,
    } = props;

    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        setExpanded(false);
    }, [example]);

    const handleKanjiClick = (e, kanji) => {
        e.stopPropagation();
        changeCurrentKanjiByKanji(kanji);
    }

    return (
        <div className={wordExamples.length > 0 ? "yomiContainer extendable" : "yomiContainer"}>
            <div onClick={() => setExpanded(!expanded)} className={wordExamples.length > 0 ? "yomiHeader clickable" : "yomiHeader"}>
                <span>
                    {example.kana}
                </span>
                <div>
                    {wordExamples.length > 0 && <img className={expanded ? "yomiExpander open" : "yomiExpander"} src="/img/up.png" alt="see all examples" />}
                </div>
            </div>
            <div className="yomiExamples">
                {wordExamples.map((wordExample, i) => (
                    <div className={expanded ? "yomiSingleExample clickable open" : "yomiSingleExample"} key={i} onClick={() => changeCurrentWordById(wordExample.doc.id)}>
                        <div className="yomiSingleExampleJapanese">
                            {wordExample?.elements.map((element, j) => (
                                <div className="yomiSingleExampleKanjiKana" key={j}>
                                    {element.kanji ? <div className="clickable" onClick={(e) => handleKanjiClick(e, element.kanji)}>{element.kanji}</div> : <div>{element.kana}</div>}
                                    {element.kanji && <div className="yomiSingleExampleKana">{element.kana}</div>}
                                </div>
                            ))}
                        </div>
                        <div className="yomiSingleExampleTranslation">
                            {wordExample?.translation}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const KanaReadings = (props) => {
    const {
        readings,
        vocabulary,
        allDisplayed,
        expanded,
        changeCurrentKanjiByKanji,
        changeCurrentWordById,
    } = props;

    return (
        <div id="kanas" className={allDisplayed ? (expanded ? 'hiddenElement selected expanded' : 'hiddenElement selected') : 'hiddenElement'}>
            <div id="kanasExamples">
                <div id="kunyomiExamples">
                    {readings.kunyomi.length > 0 && <p className="kanasReadingsHeader">KUNYOMI</p>}
                    {readings.kunyomi?.map((e, i) => (
                        <Yomi
                            example={e}
                            wordExamples={vocabulary.filter((word) => word.elements.find((element) => element.kana === e.kana))}
                            key={i}
                            changeCurrentKanjiByKanji={changeCurrentKanjiByKanji}
                            changeCurrentWordById={changeCurrentWordById}
                        />
                    ))}
                </div>
                <div id="onyomiExamples">
                    {readings.onyomi.length > 0 && <p className="kanasReadingsHeader">ONYOMI</p>}
                    {readings.onyomi?.map((e, i) => (
                        <Yomi
                            example={e}
                            wordExamples={vocabulary.filter((word) => word.elements.find((element) => element.kana === e.kana))}
                            key={i}
                            changeCurrentKanjiByKanji={changeCurrentKanjiByKanji}
                            changeCurrentWordById={changeCurrentWordById}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default KanaReadings;