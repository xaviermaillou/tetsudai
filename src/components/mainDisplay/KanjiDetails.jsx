import KanjiElement from "../subComponents/KanjiElement"
import WordElement from "../subComponents/WordElement"
import Yomi from "./Yomi"
import { localDictionnary } from "../../lib/dictionnary"
import { useContext } from "react"
import LanguageContext from "../../contexts/Language"
import FiveFirstElements from "../subComponents/FiveFirstElements"


const KanjiDetails = (props) => {
    const {
        kanji,
        changeCurrentKanjiById,
        changeCurrentWordById,
    } = props

    const language = useContext(LanguageContext)

    return (
        <div id="kanjiDetails" className='expanded'>
            <div className="kanjiDetailsSection">
                {kanji.precisions[language] &&
                    <div className="kanjiDetailsSubSection">
                        <div id="kanjiPrecisions">
                            <p id="kanjiPrecisionsText">
                                {kanji.precisions[language]}
                            </p>
                        </div>
                    </div>
                }
                <div className="kanjiDetailsSubSection">
                    <p className="kanasReadingsHeader">{localDictionnary[language].kanjiTakenFrom}</p>
                    {kanji.kanjiTakenAsPartFrom.map((e, i) => (
                        <div className="kanjiDetailsKanjiElements" key={i}>
                            <KanjiElement
                                kanji={e}
                                changeCurrentKanjiById={changeCurrentKanjiById}
                            />
                        </div>
                    ))}
                    {kanji.kanjiTakenAsPartFrom.length === 0 && <span className="tooltip">{localDictionnary[language].noKanjiInKanji}</span>}
                </div>
                <div className="kanjiDetailsSubSection">
                    <p className="kanasReadingsHeader">{localDictionnary[language].kanjiUsedIn}</p>
                    <FiveFirstElements
                        loop={kanji.kanjiUsedAsPartIn.map((e, i) => (
                            <div className="mainDisplayElementContainer kanjiDetailsKanjiElements" key={i}>
                                <KanjiElement
                                    kanji={e}
                                    changeCurrentKanjiById={changeCurrentKanjiById}
                                />
                            </div>
                        ))}
                    />
                    {kanji.kanjiUsedAsPartIn.length === 0 && <span className="tooltip">{localDictionnary[language].kanjiInNoKanji}</span>}
                </div>
            </div>
            <div className="kanjiDetailsSection">
                <div className="kanjiDetailsSubSection" id="kunyomiExamples">
                    <p className="kanasReadingsHeader">KUNYOMI</p>
                    {kanji.readings.kunyomi?.map((reading, i) => (
                        <Yomi
                            reading={reading}
                            changeCurrentWordById={changeCurrentWordById}
                            key={i}
                        />
                    ))}
                    {kanji.readings.kunyomi.length === 0 && <span className="tooltip">{localDictionnary[language].noKunyomi}</span>}
                </div>
                <div className="kanjiDetailsSubSection" id="onyomiExamples">
                    <p className="kanasReadingsHeader">ONYOMI</p>
                    {kanji.readings.onyomi?.map((reading, i) => (
                        <Yomi
                            reading={reading}
                            changeCurrentWordById={changeCurrentWordById}
                            key={i}
                        />
                    ))}
                    {kanji.readings.onyomi.length === 0 && <span className="tooltip">{localDictionnary[language].noOnyomi}</span>}
                </div>
                {kanji.relatedJukujikun.length > 0 && <div className="kanjiDetailsSubSection" id="jukujikunExamples">
                    <p className="kanasReadingsHeader">JUKUJIKUN</p>
                    <FiveFirstElements
                        loop={kanji.relatedJukujikun?.map((e, i) => (
                            <div className="mainDisplayElementContainer kanjiDetailsJukujikun" key={i}>
                                <WordElement
                                    word={e}
                                    changeCurrentWordById={changeCurrentWordById}
                                />
                            </div>
                        ))}
                    />
                    {kanji.relatedJukujikun.length === 0 && <span className="tooltip">{localDictionnary[language].noJukujikun}</span>}
                </div>}
            </div>
        </div>
    )
}

export default KanjiDetails