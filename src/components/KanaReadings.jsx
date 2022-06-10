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
        changeCurrentKanjiByKanji(kanji, false);
    }

    return (
        <div className={wordExamples.length > 0 ? "yomiContainer extendable" : "yomiContainer"}>
            <div onClick={() => setExpanded(!expanded)} className={wordExamples.length > 0 ? "yomiHeader clickable" : "yomiHeader"}>
                <span>
                    {example.kana}
                </span>
                <div>
                    {wordExamples.length > 0 && (
                        expanded ?
                            <img className="yomiExpander open" src="/img/less.png" alt="hide readings" />
                            :
                            <img className="yomiExpander" src="/img/plus.png" alt="show readings" />
                    )}
                </div>
            </div>
            <div className="yomiExamples">
                {wordExamples.map((wordExample, i) => (
                    <div className={expanded ? "yomiSingleExample clickable open" : "yomiSingleExample"} key={i} onClick={() => changeCurrentWordById(wordExample.id, false)}>
                        <div className="yomiSingleExampleJapanese">
                            {wordExample?.elements.map((element, j) => (
                                <div className={element.kana === example.kana ? "yomiSingleExampleKanjiKana highlighted" : "yomiSingleExampleKanjiKana"} key={j}>
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
        kanji,
        allDisplayed,
        expanded,
        changeCurrentKanjiByKanji,
        changeCurrentWordById,
    } = props;

    return (
        <div id="kanas" className={allDisplayed ? (expanded ? 'hiddenElement selected expanded' : 'hiddenElement selected') : 'hiddenElement'}>
            <div id="kanasExamples">
                <div id="kunyomiExamples">
                    <p className="kanasReadingsHeader">KUNYOMI</p>
                    {kanji.readings.kunyomi?.map((e, i) => (
                        <Yomi
                            example={e}
                            wordExamples={kanji.vocabulary.filter((word) => word.elements
                                .find((element) => (element.kana === e.kana && element.kanji === kanji.kanji)))}
                            key={i}
                            changeCurrentKanjiByKanji={changeCurrentKanjiByKanji}
                            changeCurrentWordById={changeCurrentWordById}
                        />
                    ))}
                    {kanji.readings.kunyomi.length === 0 && <span className="tooltip">Ce kanji ne comporte aucun kunyomi</span>}
                </div>
                <div id="onyomiExamples">
                    <p className="kanasReadingsHeader">ONYOMI</p>
                    {kanji.readings.onyomi?.map((e, i) => (
                        <Yomi
                            example={e}
                            wordExamples={kanji.vocabulary.filter((word) => word.elements
                                .find((element) => (element.kana === e.kana && element.kanji === kanji.kanji)))}
                            key={i}
                            changeCurrentKanjiByKanji={changeCurrentKanjiByKanji}
                            changeCurrentWordById={changeCurrentWordById}
                        />
                    ))}
                    {kanji.readings.onyomi.length === 0 && <span className="tooltip">Ce kanji ne comporte aucun onyomi</span>}
                </div>
            </div>
        </div>
    );
}

export default KanaReadings;