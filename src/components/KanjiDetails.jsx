import { useState, useEffect } from "react"
import KanjiElement from "./subComponents/KanjiElement"
import WordElement from "./subComponents/WordElement"

const Yomi = (props) => {
    const {
        imgPath,
        reading,
        // changeCurrentKanjiById,
        changeCurrentWordById,
    } = props

    const [expanded, setExpanded] = useState(false)
    useEffect(() => {
        setExpanded(false)
    }, [reading])

    return (
        <div className={reading.examples.length > 0 ? "yomiContainer extendable" : "yomiContainer"}>
            <div onClick={() => setExpanded(!expanded)} className={reading.examples.length > 0 ? "yomiHeader clickable" : "yomiHeader"}>
                <span>
                    {reading.kana}
                </span>
                <div>
                    {reading.examples.length > 0 && (
                        expanded ?
                            <img className="yomiExpander open" src={`/img/${imgPath}/less.png`} alt="hide readings" />
                            :
                            <img className="yomiExpander" src={`/img/${imgPath}/plus.png`} alt="show readings" />
                    )}
                </div>
            </div>
            <div className="yomiExamples">
                {reading.examples.map((wordExample, i) => (
                    <div className={expanded ? "kanjiReadingsWordElement open" : "kanjiReadingsWordElement"}>
                        <WordElement
                            word={wordExample}
                            kanaToHighlight={reading.kana}
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
                    {kanji.kanjiTakenAsPartFrom.length === 0 && <span className="tooltip">Ce kanji n'est composé d'aucun autre kanji</span>}
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
                    {kanji.readings.kunyomi?.map((reading, i) => (
                        <Yomi
                            imgPath={imgPath}
                            reading={reading}
                            changeCurrentKanjiById={changeCurrentKanjiById}
                            changeCurrentWordById={changeCurrentWordById}
                            key={i}
                        />
                    ))}
                    {kanji.readings.kunyomi.length === 0 && <span className="tooltip">Ce kanji ne comporte aucun kunyomi</span>}
                </div>
                <div className="kanjiDetailsSubSection" id="onyomiExamples">
                    <p className="kanasReadingsHeader">ONYOMI</p>
                    {kanji.readings.onyomi?.map((reading, i) => (
                        <Yomi
                            imgPath={imgPath}
                            reading={reading}
                            changeCurrentKanjiById={changeCurrentKanjiById}
                            changeCurrentWordById={changeCurrentWordById}
                            key={i}
                        />
                    ))}
                    {kanji.readings.onyomi.length === 0 && <span className="tooltip">Ce kanji ne comporte aucun onyomi</span>}
                </div>
                {kanji.relatedJukujikun.length > 0 && <div className="kanjiDetailsSubSection" id="jukujikunExamples">
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