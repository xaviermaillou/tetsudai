const Examples = (props) => {
    const { example, wordExample, isFirst } = props;
    return (
        <div className={isFirst ? "kanasSingleExample" : "kanasSingleExample separated"}>
            <div className={wordExample ? "kanasSingleExampleKanji" : "kanasSingleExampleKanji grayedOut"}>
                {example.kana}
            </div>
            <div>
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
            </div>
        </div>
    );
}

const kanasReadings = (props) => {
    const {
        readings,
        relatedVocabulary,
        allDisplayed,
        displayedElement
    } = props;

    return (
        <div id="kanas" className={displayedElement === 1 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>
            <div id="kanasExamples">
                <div id="kunyomiExamples">
                    {readings.kunyomi.length > 0 && <p className="kanasReadingsHeader">KUNYOMI</p>}
                    {readings.kunyomi?.map((e, i) => (
                        <Examples
                            example={e}
                            wordExample={relatedVocabulary.find((word) => word.elements.find((element) => element.kana === e.kana))}
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
                            wordExample={relatedVocabulary.find((word) => word.elements.find((element) => element.kana === e.kana))}
                            key={i}
                            isFirst={i === 0}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default kanasReadings;