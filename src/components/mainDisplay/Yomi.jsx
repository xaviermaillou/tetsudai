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
                    loop={reading.examples.filter(wordExample => !wordExample.ateji)?.map((wordExample, i) => (
                        <div className="mainDisplayElementContainer" key={i}>
                            <WordElement
                                word={wordExample}
                                kanaToHighlight={kanasDictionnary.kanasRegularization(reading.kana)}
                                changeCurrentWordById={changeCurrentWordById}
                            />
                        </div>
                    ))}
                />
                {reading.examples.filter(wordExample => wordExample.ateji)?.length > 0 &&
                    <>
                        <p className="yomiExamplesSubHeader">ATEJI</p>
                        <FiveFirstElements
                            loop={reading.examples.filter(wordExample => wordExample.ateji)?.map((wordExample, i) => (
                                <div className="mainDisplayElementContainer" key={i}>
                                    <WordElement
                                        word={wordExample}
                                        kanaToHighlight={kanasDictionnary.kanasRegularization(reading.kana)}
                                        changeCurrentWordById={changeCurrentWordById}
                                    />
                                </div>
                            ))}
                        />
                    </>
                }
            </div>
            {reading.extensions?.length > 0 &&
                <div className="yomiExamples yomiExtensions">
                    <p className="yomiExamplesSubHeader">EXTENSIONS</p>
                    {reading.extensions.map((extension, i) => (
                        <>
                            <div className="yomiHeader yomiExtensionsHeader">
                                <span>
                                    {extension.kana}
                                </span>
                            </div>
                            <FiveFirstElements
                                loop={extension.examples.map((wordExample, i) => (
                                    <div className="mainDisplayElementContainer" key={i}>
                                        <WordElement
                                            word={wordExample}
                                            kanaToHighlight={kanasDictionnary.kanasRegularization(extension.kana)}
                                            changeCurrentWordById={changeCurrentWordById}
                                        />
                                    </div>
                                ))}
                            />
                        </>
                    ))}
                </div>
            }
        </div>
    )
}

export default Yomi