import { useContext } from "react"
import LanguageContext from "../../contexts/Language"
import { localDictionnary } from "../../lib/dictionnary"

const KanjiElement = (props) => {

    const { kanji, kanaToHighlight, changeCurrentKanjiById, options } = props

    const language = useContext(LanguageContext)

    return (
        <div className={`kanjiElement${kanji.id ? ' clickable' : ''}`} onClick={() => kanji.id ? changeCurrentKanjiById(kanji.id) : null}>
            <div className="kanjiElementLabel">
                {options?.irregular && <span>{localDictionnary[language].irregularReading}</span>}
                {options?.ateji && <span>ateji</span>}
            </div>
            <div className="kanjiElementKanji">
                {kanji.kanji}
            </div>
            <div className="kanjiElementDetails">
                <div className="kanjiReadings">
                    {
                        kanji.readings.kunyomi?.map((item, i) => (
                            <span key={i}>
                                {i > 0 && ', '}
                                <span className={item.kana === kanaToHighlight ? "highlighted" : ""}>
                                    {item.kana}
                                </span>
                            </span>
                        ))
                    }
                    {
                        (kanji.readings.kunyomi.length>0 && kanji.readings.onyomi.length>0) && 
                        <>
                            &nbsp;|&nbsp;
                        </>
                    }
                    {
                        kanji.readings.onyomi?.map((item, i) => (
                            <span key={i}>
                                {i > 0 && ', '}
                                <span className={item.kana === kanaToHighlight ? "highlighted" : ""}>
                                    
                                    {item.kana}
                                </span>
                            </span>
                        ))
                    }
                </div>
                <div className="kanjiElementTranslation">
                    {kanji.translation[language].join(' | ')}
                </div>
            </div>
        </div>
    )
}

export default KanjiElement