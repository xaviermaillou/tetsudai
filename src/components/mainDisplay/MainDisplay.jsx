import { useContext } from "react"
import KanjiDetails from "./KanjiDetails"
import { WordDetails, WordDetailsPlus } from "./WordDetails"
import { dictionnary } from "tetsudai-common"
import Loading from "../visualComponents/Loading"
import LanguageContext from "../../contexts/Language"
import { localDictionnary } from "../../lib/dictionnary"

const MainDisplay = (props) => {
    const {
        imgPath,
        kanji,
        changeCurrentKanjiById,
        word,
        changeCurrentWordById,
        sentences,
        loading,
        setOpenedHistory,
        handleSearch,
        setSearchExecuted,
        elementFetched,
        setMenuOpen,
        openHistory,
    } = props

    const language = useContext(LanguageContext)

    const handleKanjiChange = (id) => {
        setOpenedHistory(false)
        changeCurrentKanjiById(id)
    }

    const handleWordChange = (id) => {
        setOpenedHistory(false)
        changeCurrentWordById(id)
    }

    if (!elementFetched) return null

    return (
        <div id="mainDisplayContainer" key={kanji?.id || word?.id}>
            <div id="mainDisplay" className={`mainContainer${openHistory ? " hidden" : ""}`}>
                {kanji &&
                    <div id="kanjiDisplay" className={loading ? "rerenderOpacity" : ""}>
                        <p id="kanjiDisplayKanji">{kanji.kanji}</p>
                        <p id="kanjiDisplayKanjiGhostLeft">{kanji.kanji}</p>
                        <p id="kanjiDisplayKanjiGhostRight">{kanji.kanji}</p>
                        <p id="kanjiDisplayTranslation">{kanji.translation[language].join(' | ')}</p>
                        <div id="kanjiDisplayInfo">
                            <div>{kanji.strokes} traits</div>
                            <div>{kanji.level ? kanji.level : localDictionnary[language].noJLPT}</div>
                        </div>
                        <KanjiDetails
                            kanji={kanji}
                            changeCurrentKanjiById={(id) => handleKanjiChange(id)}
                            changeCurrentWordById={(id) => handleWordChange(id)}
                        />
                    </div>
                }
                {word &&
                    <div id="wordDisplay" className={loading ? "rerenderOpacity" : ""}>
                        {word.jukujikun ? 
                            <div id="wordDisplayWordJukujikun" className={word.primaryWord.length > 4 ? "smallFont" : ""}>
                                <div id="wordDisplayWordKanjiOnly">
                                    {word.jukujikunAsMain ?
                                        <div className="wordDisplayWordElement">
                                            <span>{word.jukujikun}</span>
                                        </div>
                                        :
                                        word.elements.map((element, i) => <div className="wordDisplayWordElement" key={i}>
                                            <span className="wordDisplayWordElementKanji">{element.options.rareKanji ? element.kana : element.kanji || element.kana}</span>
                                        </div>)
                                    }
                                </div>
                                <div className="wordDisplayWordElementYomi jukujikun">
                                    {word.jukujikunAsMain ?
                                        word.elements.map((element, i) => 
                                            <span className="wordDisplayWordElementKanji" key={i}>{element.options.rareKanji ? (element.kanji || element.kana) : (element.kana || element.kanji)}</span>
                                        )
                                        :
                                        <span>{word.jukujikun}</span>
                                    }
                                    <div>Jukujikun</div>
                                </div>
                            </div>
                            :
                            <div id="wordDisplayWord" className={word.primaryWord.length > 4 ? "smallFont" : ""}>
                                <div id="wordDisplayWordElements">
                                    {word.elements.map((element, i) => <div className={element.options.politeElement ? "wordDisplayWordPrefix wordDisplayWordElement" : "wordDisplayWordElement"} key={i}>
                                        <span className="wordDisplayWordElementKanji">{element.options.rareKanji ?
                                            element.kana
                                            :
                                            element.kanji || element.kana}</span>
                                        {element.kanji ?
                                            <span className="wordDisplayWordElementYomi highlighted">{element.options.rareKanji ? element.kanji : element.kana || 'muet'}</span>
                                            :
                                            element.options.politeElement ?
                                                <span className="wordDisplayWordElementYomi highlighted">{localDictionnary[language].honorific}</span>
                                                :
                                                <span className="wordDisplayWordElementYomi"></span>
                                        }
                                    </div>)}
                                </div>
                            </div>
                        }
                        <p id="wordDisplayTranslation">{word.translation[language].join(' | ')}</p>
                        <div id="wordDisplayInfo">
                            <div>
                                {word.grammar.map((el, i) => (
                                    <span key={i}>
                                        {i > 0 && ', '}
                                        {dictionnary[language].classes[el].toLowerCase() + (el === "vb" ? ' ' + (dictionnary[language].verbGrammar[word.verbPrecisions.grammar] || 'irrégulier') : '')}
                                    </span>
                                ))}
                            </div>
                            <div>{word.level ? `JLPT ${word.level}` : localDictionnary[language].noJLPT}</div>
                        </div>
                        <WordDetails
                            elements={word.elements.filter((element) => element.details)}
                            sentences={sentences}
                            changeCurrentKanjiById={(id) => handleKanjiChange(id)}
                            changeCurrentWordById={(id) => handleWordChange(id)}
                            handleSearch={handleSearch}
                            setSearchExecuted={setSearchExecuted}
                            referenceId={word.id}
                            originLanguage={word.originLanguage}
                            originLanguageWord={word.originLanguageWord}
                            precisions={word.precisions}
                            relatedWords={word.relatedWords}
                            bottomSpace={(word.inflexions || word.kosoado)}
                            setMenuOpen={setMenuOpen}
                        />
                        {(word.inflexions || word.kosoado) &&
                            <WordDetailsPlus
                                imgPath={imgPath}
                                referenceId={word.id}
                                changeCurrentWordById={changeCurrentWordById}
                                inflexions={word.inflexions}
                                kosoado={word.kosoado}
                            />
                        }
                    </div>
                }
                <div className="loadingAnimationContainer">
                    <Loading
                        isLoading={loading}
                    />
                </div>
                {(!!!kanji && !!!word && !loading) &&
                    <span>Aucune donnée disponible</span>
                }
            </div>
        </div>
    )
}

export default MainDisplay