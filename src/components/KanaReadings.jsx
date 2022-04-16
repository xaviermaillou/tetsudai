const Examples = (props) => {
    const {
        example,
        wordExample,
        isFirst,
        showReadingOnly,
    } = props;
    return (
        <div className={isFirst ? "kanasSingleExample" : "kanasSingleExample separated"}>
            <div className={wordExample ? "kanasSingleExampleKanji" : "kanasSingleExampleKanji grayedOut"}>
                {example.kana}
            </div>
            {!showReadingOnly && <div>
                <div className="kanasSingleExampleKanas">
                    <div className="kanasSingleExampleKanasKanas">
                        {wordExample?.elements.map((element, i) => (<span key={i}>&nbsp;{element.kana}&nbsp;</span>))}
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div>
                        {wordExample?.elements.map((element, i) => (<span key={i}>{element.kanji || element.kana}</span>))}
                    </div>
                </div>
                <div className="kanasSingleExampleTranslation">
                    {wordExample?.translation}
                </div>
            </div>}
        </div>
    );
}

const kanasReadings = (props) => {
    const {
        readings,
        vocabulary,
        allDisplayed,
    } = props;

    return (
        <div id="kanas" className={allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>
            <div id="kanasExamples">
                <div id="kunyomiExamples">
                    {readings.kunyomi.length > 0 && <p className="kanasReadingsHeader">KUNYOMI</p>}
                    {readings.kunyomi?.map((e, i) => (
                        <Examples
                            example={e}
                            wordExample={vocabulary.find((word) => word.elements.find((element) => element.kana === e.kana))}
                            key={i}
                            isFirst={i === 0}
                            showReadingOnly={!allDisplayed}
                        />
                    ))}
                </div>
                <div id="onyomiExamples">
                    {readings.onyomi.length > 0 && <p className="kanasReadingsHeader">ONYOMI</p>}
                    {readings.onyomi?.map((e, i) => (
                        <Examples
                            example={e}
                            wordExample={vocabulary.find((word) => word.elements.find((element) => element.kana === e.kana))}
                            key={i}
                            isFirst={i === 0}
                            showReadingOnly={!allDisplayed}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default kanasReadings;