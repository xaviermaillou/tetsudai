import { useState, useEffect } from "react";
import KanaReadings from "./KanaReadings";
import WordDetails from "./WordDetails";
import TrainingControls from "./TrainingControls";
import { classes } from "../lib/common";

const MainDisplay = (props) => {
    const {
        allDisplayed,
        setAllDisplayed,
        trainingMode,
        kanji,
        randomKanji,
        compressed,
        collection,
        level,
        grammar,
        checkTrainingFilters,
        toggleTraining,
        changeCurrentKanjiByKanji,
        word,
        changeCurrentWordById,
        valueChanged,
        setValueChanged,
    } = props;

    const [displayedElement, setDisplayedElement] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setValueChanged(false);
        }, 100);
    }, [kanji, word, setValueChanged]);

    const changeDisplayedElement = (num) => {
        setAllDisplayed(false);
        setDisplayedElement(num);
    }
    const displayElements = () => {
        setAllDisplayed(!allDisplayed);
    }


    return (
        <div id="mainDisplayContainer">
            <div id="mainDisplay" className={compressed ? "mainContainer compressed" : "mainContainer"}>
                {kanji !== null &&
                    (kanji ?
                        <div id="kanjiDisplay" className={valueChanged ? "rerenderOpacity" : ""}>
                            <p id="kanjiDisplayKanji" className={displayedElement === 0 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>{kanji.kanji}</p>
                            <p id="kanjiDisplayTranslation" className={displayedElement === 1 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>{kanji.translation}</p>
                            <p id="kanjiDisplayInfo" className={allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>
                                <div>{kanji.strokes} traits</div>
                                <div>{kanji.level ? `JLPT ${kanji.level}` : 'Hors JLPT'}</div>
                            </p>
                            {kanji.readings && <KanaReadings
                                kanji={kanji}
                                allDisplayed={allDisplayed}
                                expanded={!!!trainingMode}
                                changeCurrentKanjiByKanji={changeCurrentKanjiByKanji}
                                changeCurrentWordById={changeCurrentWordById}
                            />}
                        </div>
                        :
                        <div className="trainingEndNotifier">
                            <span>Tous les kanji ont été revus.</span>
                        </div>
                    )
                }
                {word !== null &&
                    (word ?
                        <div id="wordDisplay" className={valueChanged ? "rerenderOpacity" : ""}>
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
                                                <span className="wordDisplayWordElementKanji">{element.kanji || element.kana}</span>
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
                            <p id="wordDisplayInfo" className={allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>
                                <div>{word.grammar.map((el, i) => <span key={i}>{i > 0 && ', '}{classes[el].toLowerCase()}</span>)}</div>
                                <div>{word.level ? `JLPT ${word.level}` : 'Hors JLPT'}</div>
                                {word.rareKanji && <div>généralement écrit en kanas</div>}
                                {word.obscure && <div>très peu utilisé</div>}
                            </p>
                            <WordDetails
                                elements={word.elements.filter((element) => element.details)}
                                sentences={word.sentences}
                                allDisplayed={allDisplayed}
                                expanded={!!!trainingMode}
                                changeCurrentKanjiByKanji={changeCurrentKanjiByKanji}
                                changeCurrentWordById={changeCurrentWordById}
                                referenceId={word.id}
                            />
                        </div>
                        :
                        <div className="trainingEndNotifier">
                            <span>Tous les mots ont été revus.</span>
                        </div>
                    )
                }
                {!!trainingMode && <TrainingControls
                    displayedElement={displayedElement}
                    displayElements={displayElements}
                    allDisplayed={allDisplayed}
                    changeDisplayedElement={changeDisplayedElement}
                    randomKanji={() =>randomKanji(trainingMode)}
                    collection={collection}
                    level={level}
                    grammar={grammar}
                    checkTrainingFilters={checkTrainingFilters}
                    toggleTraining={toggleTraining}
                    endedTraining={!kanji && !word}
                />}
            </div>
        </div>
    );
}

export default MainDisplay;