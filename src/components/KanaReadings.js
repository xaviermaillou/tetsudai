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
        <div id="kanas" onClick={expandKanasExamples} className={displayedElement === 1 || allDisplayed ? (kanasExpanded ? 'hiddenElement selected open' : 'hiddenElement selected') : 'hiddenElement'}>
            <div className="kanaChild">
                <div className="kanasReadings">
                    {uses.kunyomi.readings.map((r, i) => (
                        <span key={i}>{i > 0 && <span>, </span>}{r}</span>
                    ))}
                </div>
                {kanasExpanded && <div className="kanasExamples">
                    {uses.kunyomi.examples.map((e, i) => (
                        <Examples example={e} key={i} />
                    ))}
                </div>}
            </div>
            <div className="kanaChild">
                <div className="kanasReadings">
                    {uses.onyomi.readings.map((r, i) => (
                        <span key={i}>{i > 0 && <span>, </span>}{r}</span>
                    ))}
                </div>
                {kanasExpanded && <div className="kanasExamples">
                    {uses.onyomi.examples.map((e, i) => (
                        <Examples example={e} key={i} />
                    ))}
                </div>}
            </div>
            {/* word.uses.kunyomi.readings */}{/* word.uses.kunyomi.readings && word.uses.onyomi.readings ? <span id="separator">|</span>: '' */}{/* word.uses.onyomi.readings */}
        </div>
    );
}

export default kanasReadings;