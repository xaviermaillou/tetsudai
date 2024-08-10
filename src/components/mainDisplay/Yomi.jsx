import WordElement from "../subComponents/WordElement"
import FiveFirstElements from "../subComponents/FiveFirstElements"
import { kanasDictionnary } from "tetsudai-common"

const Yomi = (props) => {
    const {
        reading,
        changeCurrentWordById,
    } = props

    return (
        <div className={reading.examples.length > 0 ? "yomiContainer extendable" : "yomiContainer"}>
            <div className="yomiHeader">
                <span>
                    {reading.kana}
                </span>
            </div>
            <div className="yomiExamples">
                <FiveFirstElements
                    loop={reading.examples.map((wordExample, i) => (
                        <div className="mainDisplayElementContainer" key={i}>
                            <WordElement
                                word={wordExample}
                                kanaToHighlight={kanasDictionnary.kanasRegularization(reading.kana)}
                                changeCurrentWordById={changeCurrentWordById}
                            />
                        </div>
                    ))}
                />
            </div>
        </div>
    )
}

export default Yomi