import KanjiElement from "../subComponents/KanjiElement"
import WordElement from "../subComponents/WordElement"
import Yomi from "./Yomi"
import { localDictionnary } from "../../lib/dictionnary"
import { useContext } from "react"
import LanguageContext from "../../contexts/Language"


const KanjiDetails = (props) => {
    const {
        imgPath,
        kanji,
        changeCurrentKanjiById,
        changeCurrentWordById,
    } = props

    const language = useContext(LanguageContext)

    return (
        <div id="kanjiDetails" className='expanded'>
            <div className="kanjiDetailsSection">
                <div className="kanjiDetailsSubSection" >
                    <p className="kanasReadingsHeader">{localDictionnary[language].kanjiTakenFrom}</p>
                    {kanji.kanjiTakenAsPartFrom.map((e, i) => (
                        <div className="kanjiDetailsKanjiElements">
                            <KanjiElement
                                kanji={e}
                                changeCurrentKanjiById={changeCurrentKanjiById}
                                key={i}
                            />
                        </div>
                    ))}
                    {kanji.kanjiTakenAsPartFrom.length === 0 && <span className="tooltip">{localDictionnary[language].noKanjiInKanji}</span>}
                </div>
                <div className="kanjiDetailsSubSection" >
                    <p className="kanasReadingsHeader">{localDictionnary[language].kanjiUsedIn}</p>
                    {kanji.kanjiUsedAsPartIn.map((e, i) => (
                        <div className="kanjiDetailsKanjiElements">
                            <KanjiElement
                                kanji={e}
                                changeCurrentKanjiById={changeCurrentKanjiById}
                                key={i}
                            />
                        </div>
                    ))}
                    {kanji.kanjiUsedAsPartIn.length === 0 && <span className="tooltip">{localDictionnary[language].kanjiInNoKanji}</span>}
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
                    {kanji.readings.kunyomi.length === 0 && <span className="tooltip">{localDictionnary[language].noKunyomi}</span>}
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
                    {kanji.readings.onyomi.length === 0 && <span className="tooltip">{localDictionnary[language].noOnyomi}</span>}
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
                    {kanji.relatedJukujikun.length === 0 && <span className="tooltip">{localDictionnary[language].noJukujikun}</span>}
                </div>}
            </div>
        </div>
    )
}

export default KanjiDetails