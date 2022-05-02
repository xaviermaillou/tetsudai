import { useState } from "react";
import KanaReadings from "./KanaReadings";
import TrainingControls from "./TrainingControls";
import WordKanjis from "./WordKanjis";
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
    } = props;

    const [displayedElement, setDisplayedElement] = useState(0);

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
                {kanji && <div id="kanjiDisplay">
                    <p id="kanjiDisplayKanji" className={displayedElement === 0 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>{kanji.kanji}</p>
                    <p id="kanjiDisplayTranslation" className={displayedElement === 1 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>{kanji.translation}</p>
                    {kanji.readings && <KanaReadings
                        readings={kanji.readings} 
                        vocabulary={kanji.vocabulary}
                        allDisplayed={allDisplayed}
                        expanded={!trainingMode}
                        changeCurrentKanjiByKanji={changeCurrentKanjiByKanji}
                        changeCurrentWordById={changeCurrentWordById}
                    />}
                </div>}
                {word && <div id="wordDisplay">
                    <div id="wordDisplayWord" className={displayedElement === 0 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>
                        {word.elements.map((element, i) => <div className="wordDisplayWordElement" key={i}>
                            <span>{element.kanji || element.kana}</span>
                            {element.kanji ? <span className="wordDisplayWordElementYomi">{element.kana}</span> : <span className="wordDisplayWordElementYomi"></span>}
                        </div>)}
                    </div>
                    <p id="wordDisplayTranslation" className={displayedElement === 1 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>{word.translation}</p>
                    <p id="wordDisplayGrammar" className={allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>{classes[word.grammar]}</p>
                    <WordKanjis
                        elements={word.elements.filter((element) => element.details)}
                        allDisplayed={allDisplayed}
                        expanded={!trainingMode}
                        changeCurrentKanjiByKanji={changeCurrentKanjiByKanji}
                    />
                </div>}
                {trainingMode && <TrainingControls
                    displayedElement={displayedElement}
                    displayElements={displayElements}
                    allDisplayed={allDisplayed}
                    changeDisplayedElement={changeDisplayedElement}
                    randomKanji={randomKanji}
                    collection={collection}
                    level={level}
                    grammar={grammar}
                    checkTrainingFilters={checkTrainingFilters}
                    toggleTraining={toggleTraining}
                />}
            </div>
        </div>
    );
}

export default MainDisplay;