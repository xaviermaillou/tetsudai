import { useState, useEffect } from "react"
import WordElement from "./subComponents/WordElement"

const Yomi = (props) => {
    const {
        imgPath,
        example,
        wordExamples,
        // changeCurrentKanjiById,
        changeCurrentWordById,
    } = props

    const [expanded, setExpanded] = useState(false)
    useEffect(() => {
        setExpanded(false)
    }, [example])

    return (
        <div className={wordExamples.length > 0 ? "yomiContainer extendable" : "yomiContainer"}>
            <div onClick={() => setExpanded(!expanded)} className={wordExamples.length > 0 ? "yomiHeader clickable" : "yomiHeader"}>
                <span>
                    {example.kana}
                </span>
                <div>
                    {wordExamples.length > 0 && (
                        expanded ?
                            <img className="yomiExpander open" src={`/img/${imgPath}/less.png`} alt="hide readings" />
                            :
                            <img className="yomiExpander" src={`/img/${imgPath}/plus.png`} alt="show readings" />
                    )}
                </div>
            </div>
            <div className="yomiExamples">
                {wordExamples.map((wordExample, i) => (
                    <div className={expanded ? "kanjiReadingsWordElement open" : "kanjiReadingsWordElement"}>
                        <WordElement
                            word={wordExample}
                            kanaToHighlight={example.kana}
                            changeCurrentWordById={changeCurrentWordById}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

const KanaReadings = (props) => {
    const {
        imgPath,
        kanji,
        allDisplayed,
        expanded,
        changeCurrentKanjiById,
        changeCurrentWordById,
    } = props

    return (
        <div id="kanas" className={allDisplayed ? (expanded ? 'hiddenElement selected expanded' : 'hiddenElement selected') : 'hiddenElement'}>
            <div id="kanasExamples">
                <div id="kunyomiExamples">
                    <p className="kanasReadingsHeader">KUNYOMI</p>
                    {kanji.readings.kunyomi?.map((e, i) => (
                        <Yomi
                            imgPath={imgPath}
                            example={e}
                            wordExamples={kanji.vocabulary.filter((word) => word.elements
                                .find((element) => (element.kana === e.kana && element.kanji === kanji.kanji)))}
                            key={i}
                            changeCurrentKanjiById={changeCurrentKanjiById}
                            changeCurrentWordById={changeCurrentWordById}
                        />
                    ))}
                    {kanji.readings.kunyomi.length === 0 && <span className="tooltip">Ce kanji ne comporte aucun kunyomi</span>}
                </div>
                <div id="onyomiExamples">
                    <p className="kanasReadingsHeader">ONYOMI</p>
                    {kanji.readings.onyomi?.map((e, i) => (
                        <Yomi
                            imgPath={imgPath}
                            example={e}
                            wordExamples={kanji.vocabulary.filter((word) => word.elements
                                .find((element) => (element.kana === e.kana && element.kanji === kanji.kanji)))}
                            key={i}
                            changeCurrentKanjiById={changeCurrentKanjiById}
                            changeCurrentWordById={changeCurrentWordById}
                        />
                    ))}
                    {kanji.readings.onyomi.length === 0 && <span className="tooltip">Ce kanji ne comporte aucun onyomi</span>}
                </div>
            </div>
        </div>
    )
}

export default KanaReadings