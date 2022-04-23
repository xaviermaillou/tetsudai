import { useState, useEffect } from "react";

const Examples = (props) => {
    const {
        example,
        wordExamples,
    } = props;

    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        setExpanded(false);
    }, [example]);

    return (
        <div onClick={() => setExpanded(!expanded)} className={wordExamples.length > 0 ? "kanasSingleExample clickable" : "kanasSingleExample"}>
            <div className="kanasSingleExampleKanji">
                {example.kana}
            </div>
            <div className="kanasSingleExampleContainer">
                {wordExamples.map((wordExample) => (
                    <div className={expanded ? "kanasSingleExampleDetail open" : "kanasSingleExampleDetail"}>
                        <div className="kanasSingleExampleWord">
                            <div>
                                {wordExample?.elements.map((element, i) => (<span key={i}>{element.kanji || element.kana}</span>))}
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="kanasSingleExampleKanas">
                                {wordExample?.elements.map((element, i) => (<span key={i}>&nbsp;{element.kana}&nbsp;</span>))}
                            </div>
                        </div>
                        <div className="kanasSingleExampleTranslation">
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
                        <Examples
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
                        <Examples
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