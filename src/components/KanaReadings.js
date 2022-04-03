const Examples = (props) => {
    const { example } = props;
    return (
        <div className="kanasSingleExample">
            <div className="kanasSingleExampleKanji">
                {example.kanji}
            </div>
            <div>
                <div className="kanasSingleExampleKanas">
                    {example.kana}
                </div>
                <div className="kanasSingleExampleTranslation">
                    {example.translation}
                </div>
            </div>
        </div>
    );
}

const kanasReadings = (props) => {
    const { uses, kanasExpanded, setKanasExpanded, allDisplayed, displayedElement } = props;

    const expandKanasExamples = () => {
        setKanasExpanded(!kanasExpanded);
    }

    return (
        <div id="kanas" onClick={expandKanasExamples} className={displayedElement === 1 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>
            <div id="kanasReadings">
                <div id="kunyomiReadings">
                    <p className="kanasReadingsHeader">KUNYOMI</p>
                    {uses.kunyomi.readings.map((r, i) => (
                        <span key={i}>{i > 0 && <span>, </span>}{r}</span>
                    ))}
                </div>
                <div id="onyomiReadings">
                    <p className="kanasReadingsHeader">ONYOMI</p>
                    {uses.onyomi.readings.map((r, i) => (
                        <span key={i}>{i > 0 && <span>, </span>}{r}</span>
                    ))}
                </div>
            </div>
            <div id="kanasExamples" className={kanasExpanded ? 'open' : ''}>
                <div id="kunyomiExamples">
                    {uses.kunyomi.examples.map((e, i) => (
                        <Examples example={e} key={i} />
                    ))}
                </div>
                <div id="onyomiExamples">
                    {uses.onyomi.examples.map((e, i) => (
                        <Examples example={e} key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default kanasReadings;