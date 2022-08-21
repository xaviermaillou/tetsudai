import { useState } from "react"
import KanaReadings from "./KanaReadings"
import { WordDetails, WordDetailsPlus } from "./WordDetails"
import TrainingControls from "./TrainingControls"
import { classes, verbGrammar } from "tetsudai-common"
import Loading from "./visualElements/Loading"

const MainDisplay = (props) => {
    const {
        imgPath,
        allDisplayed,
        setAllDisplayed,
        trainingMode,
        kanji,
        nextTrainingElement,
        compressed,
        collection,
        level,
        grammar,
        checkTrainingFilters,
        toggleTraining,
        changeCurrentKanjiById,
        word,
        changeCurrentWordById,
        sentences,
        loading,
        setOpenedHistory,
        pinnedSentence,
        setPinnedSentence,
    } = props

    const [displayedElement, setDisplayedElement] = useState(0)

    const changeDisplayedElement = (num) => {
        setAllDisplayed(false)
        setDisplayedElement(num)
    }
    const displayElements = () => {
        setAllDisplayed(!allDisplayed)
    }

    const handleKanjiChange = (id) => {
        setOpenedHistory(false)
        changeCurrentKanjiById(id)
    }

    const handleWordChange = (id) => {
        setOpenedHistory(false)
        changeCurrentWordById(id)
    }

    return (
        <div id="mainDisplayContainer">
            <div id="mainDisplay" className={compressed ? "mainContainer compressed" : "mainContainer"}>
                {kanji !== null &&
                    (kanji ?
                        <div id="kanjiDisplay" className={loading ? "rerenderOpacity" : ""}>
                            <p id="kanjiDisplayKanji" className={displayedElement === 0 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>{kanji.kanji}</p>
                            <p id="kanjiDisplayTranslation" className={displayedElement === 1 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>{kanji.translation}</p>
                            <p id="kanjiDisplayInfo" className={allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>
                                <div>{kanji.strokes} traits</div>
                                <div>{kanji.level ? `JLPT ${kanji.level}` : 'Hors JLPT'}</div>
                            </p>
                            {kanji.readings && <KanaReadings
                                imgPath={imgPath}
                                kanji={kanji}
                                allDisplayed={allDisplayed}
                                expanded={!!!trainingMode}
                                changeCurrentKanjiById={(id) => handleKanjiChange(id)}
                                changeCurrentWordById={(id) => handleWordChange(id)}
                            />}
                        </div>
                        :
                        <div className="trainingEndNotifier">
                            <span>Tous les kanji ont été validés.</span>
                        </div>
                    )
                }
                {word !== null &&
                    (word ?
                        <div id="wordDisplay" className={loading ? "rerenderOpacity" : ""}>
                            {word.jukujikun ? 
                                <div id="wordDisplayWordJukujikun">
                                    <div id="wordDisplayWordKanjiOnly">
                                        {word.rareKanji ?
                                            <div className="wordDisplayWordElement">
                                                <span>{word.jukujikun}</span>
                                            </div>
                                            :
                                            word.elements.map((element, i) => <div className="wordDisplayWordElement" key={i}>
                                                <span className="wordDisplayWordElementKanji">{element.kanji || element.kana}</span>
                                            </div>)
                                        }
                                    </div>
                                    <div className="wordDisplayWordElementYomi jukujikun">
                                        {word.rareKanji ?
                                            word.elements.map((element, i) => 
                                                <span className="wordDisplayWordElementKanji" key={i}>{element.kanji || element.kana}</span>
                                            )
                                            :
                                            <span>{word.jukujikun}</span>
                                        }
                                        <div>Jukujikun</div>
                                    </div>
                                </div>
                                :
                                <div id="wordDisplayWord" className={displayedElement === 0 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>
                                    <div id="wordDisplayWordElements">
                                        {word.elements.map((element, i) => <div className="wordDisplayWordElement" key={i}>
                                            <span className="wordDisplayWordElementKanji">{word.rareKanji ? element.kana : element.kanji || element.kana}</span>
                                            {element.kanji ?
                                                <span className="wordDisplayWordElementYomi">{word.rareKanji ? element.kanji || element.kana : element.kana}</span>
                                                :
                                                <span className="wordDisplayWordElementYomi"></span>
                                            }
                                        </div>)}
                                    </div>
                                </div>
                            }
                            <p id="wordDisplayTranslation" className={displayedElement === 1 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>{word.translation}</p>
                            <div id="wordDisplayInfo" className={allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>
                                <div>
                                    {word.grammar.map((el, i) => (
                                        <span key={i}>
                                            {i > 0 && ', '}
                                            {classes[el].toLowerCase()}
                                            {word.verbPrecisions && ' ' + (verbGrammar[word.verbPrecisions.grammar] || '')}
                                        </span>
                                    ))}
                                </div>
                                <div>{word.level ? `JLPT ${word.level}` : 'Hors JLPT'}</div>
                                {word.obscure && <div>⚠ très peu utilisé</div>}
                                {word.common && <div>✓ courant</div>}
                            </div>
                            <WordDetails
                                imgPath={imgPath}
                                elements={word.elements.filter((element) => element.details)}
                                sentences={sentences}
                                allDisplayed={allDisplayed}
                                expanded={!!!trainingMode}
                                changeCurrentKanjiById={(id) => handleKanjiChange(id)}
                                changeCurrentWordById={(id) => handleWordChange(id)}
                                pinnedSentence={pinnedSentence}
                                setPinnedSentence={setPinnedSentence}
                                referenceId={word.id}
                                precisions={word.precisions}
                            />
                            {(!!!trainingMode && (word.inflexions || word.kosoado)) &&
                                <WordDetailsPlus
                                    imgPath={imgPath}
                                    referenceId={word.id}
                                    changeCurrentWordById={changeCurrentWordById}
                                    inflexions={word.inflexions}
                                    kosoado={word.kosoado}
                                />
                            }
                        </div>
                        :
                        <div className="trainingEndNotifier">
                            <span>Tous les mots ont été validés.</span>
                        </div>
                    )
                }
                <div className="loadingAnimationContainer">
                    <Loading
                        isLoading={loading}
                    />
                </div>
                {(!!trainingMode && (kanji !== null || word !== null)) && <TrainingControls
                    imgPath={imgPath}
                    displayedElement={displayedElement}
                    displayElements={displayElements}
                    allDisplayed={allDisplayed}
                    changeDisplayedElement={changeDisplayedElement}
                    nextTrainingElement={nextTrainingElement}
                    collection={collection}
                    level={level}
                    grammar={grammar}
                    checkTrainingFilters={checkTrainingFilters}
                    toggleTraining={toggleTraining}
                    endedTraining={!kanji && !word}
                />}
            </div>
        </div>
    )
}

export default MainDisplay