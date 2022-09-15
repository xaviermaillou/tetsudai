import { useState, useEffect } from "react"
import KanjiElement from "./subComponents/KanjiElement"
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

const KanjiDetails = (props) => {
    const {
        imgPath,
        kanji,
        allDisplayed,
        expanded,
        changeCurrentKanjiById,
        changeCurrentWordById,
    } = props

    return (
        <div id="kanjiDetails" className={allDisplayed ? (expanded ? 'hiddenElement selected expanded' : 'hiddenElement selected') : 'hiddenElement'}>
            <div className="kanjiDetailsSection">
                <div className="kanjiDetailsSubSection" >
                    <p className="kanasReadingsHeader">KANJI QUI LE COMPOSENT</p>
                    {kanji.kanjiTakenAsPartFrom.map((e, i) => (
                        <div className="kanjiDetailsKanjiElements">
                            <KanjiElement
                                kanji={e}
                                changeCurrentKanjiById={changeCurrentKanjiById}
                                key={i}
                            />
                        </div>
                    ))}
                    {kanji.kanjiTakenAsPartFrom.length === 0 && <span className="tooltip">Ce kanji n'esr composé d'aucun autre kanji</span>}
                </div>
                <div className="kanjiDetailsSubSection" >
                    <p className="kanasReadingsHeader">KANJI QUI L'UTILISENT</p>
                    {kanji.kanjiUsedAsPartIn.map((e, i) => (
                        <div className="kanjiDetailsKanjiElements">
                            <KanjiElement
                                kanji={e}
                                changeCurrentKanjiById={changeCurrentKanjiById}
                                key={i}
                            />
                        </div>
                    ))}
                    {kanji.kanjiUsedAsPartIn.length === 0 && <span className="tooltip">Ce kanji n'est utilisé dans aucun autre kanji</span>}
                </div>
            </div>
            <div className="kanjiDetailsSection">
                <div className="kanjiDetailsSubSection" id="kunyomiExamples">
                    <p className="kanasReadingsHeader">KUNYOMI</p>
                    {kanji.readings.kunyomi?.map((e, i) => (
                        <Yomi
                            imgPath={imgPath}
                            example={e}
                            wordExamples={kanji.vocabulary.filter((word) => word.elements
                                .find((element) => (element.kana === e.kana && element.kanji === kanji.kanji)))}
                            changeCurrentKanjiById={changeCurrentKanjiById}
                            changeCurrentWordById={changeCurrentWordById}
                            key={i}
                        />
                    ))}
                    {kanji.readings.kunyomi.length === 0 && <span className="tooltip">Ce kanji ne comporte aucun kunyomi</span>}
                </div>
                <div className="kanjiDetailsSubSection" id="onyomiExamples">
                    <p className="kanasReadingsHeader">ONYOMI</p>
                    {kanji.readings.onyomi?.map((e, i) => (
                        <Yomi
                            imgPath={imgPath}
                            example={e}
                            wordExamples={kanji.vocabulary.filter((word) => word.elements
                                .find((element) => (element.kana === e.kana && element.kanji === kanji.kanji)))}
                            changeCurrentKanjiById={changeCurrentKanjiById}
                            changeCurrentWordById={changeCurrentWordById}
                            key={i}
                        />
                    ))}
                    {kanji.readings.onyomi.length === 0 && <span className="tooltip">Ce kanji ne comporte aucun onyomi</span>}
                </div>
                {kanji.relatedJukujikun && <div className="kanjiDetailsSubSection" id="jukujikunExamples">
                    <p className="kanasReadingsHeader">JUKUJIKUN</p>
                    {kanji.relatedJukujikun?.map((e, i) => (
                        <div className="kanjiDetailsJukujikun">
                            <WordElement
                                word={e}
                                changeCurrentWordById={changeCurrentWordById}
                                key={i}
                            />
                        </div>
                    ))}
                    {kanji.readings.onyomi.length === 0 && <span className="tooltip">Ce kanji ne comporte aucun onyomi</span>}
                </div>}
            </div>
        </div>
    )
}

export default KanjiDetails