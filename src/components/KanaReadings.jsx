import { useState, useEffect } from "react";

const Yomi = (props) => {
    const {
        example,
        wordExamples,
    } = props;

    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        setExpanded(false);
    }, [example]);

    return (
        <div onClick={() => setExpanded(!expanded)} className={wordExamples.length > 0 ? "yomiContainer clickable" : "yomiContainer"}>
            <div className="yomiHeader">
                <span>
                    {example.kana}
                </span>
                <div>
                    {wordExamples.length > 0 && <img className={expanded ? "yomiExpander open" : "yomiExpander"} src="/img/up.png" alt="see all examples" />}
                </div>
            </div>
            <div className="yomiExamples">
                {wordExamples.map((wordExample) => (
                    <div className={expanded ? "yomiSingleExample open" : "yomiSingleExample"}>
                        <div className="yomiSingleExampleJapanese">
                            {wordExample?.elements.map((element, i) => (
                                <div className="yomiSingleExampleKanjiKana" key={i}>
                                    <div>{element.kanji || element.kana}</div>
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
                            isFirst={i === 0}
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
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default KanaReadings;