import { useEffect, useState } from "react"
import WordElement from "../subComponents/WordElement"

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

export default Yomi