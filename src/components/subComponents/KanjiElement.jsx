import { useContext } from "react"
import LanguageContext from "../../contexts/Language"

const KanjiElement = (props) => {

    const { kanji, kanaToHighlight, changeCurrentKanjiById } = props

    const language = useContext(LanguageContext)

    return (
        <div className="kanjiElement clickable" onClick={() => changeCurrentKanjiById(kanji.id)}>
            <div className="kanjiElementKanji">
                {kanji.kanji}
            </div>
            <div className="kanjiElementKana">
                <div>
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