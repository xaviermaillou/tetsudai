import KanjiElement from "../subComponents/KanjiElement"
import WordElement from "../subComponents/WordElement"
import Yomi from "./Yomi"


const KanjiDetails = (props) => {
    const {
        imgPath,
        kanji,
        changeCurrentKanjiById,
        changeCurrentWordById,
    } = props

    return (
        <div id="kanjiDetails" className='expanded'>
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