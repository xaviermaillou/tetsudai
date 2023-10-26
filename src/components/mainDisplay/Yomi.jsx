import { useEffect, useState } from "react"
import WordElement from "../subComponents/WordElement"
import FiveFirstElements from "../subComponents/FiveFirstElements"

const Yomi = (props) => {
    const {
        imgPath,
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
                        <div className="mainDisplayElementContainer">
                            <WordElement
                                word={wordExample}
                                kanaToHighlight={reading.kana}
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