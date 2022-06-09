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
        <div id="mainDisplayContainer" className={valueChanged ? "rerenderOpacity" : ""}>
            <div id="mainDisplay" className={compressed ? "mainContainer compressed" : "mainContainer"}>
                {kanji && <div id="kanjiDisplay">
                    <p id="kanjiDisplayKanji" className={displayedElement === 0 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>{kanji.kanji}</p>
                    <p id="kanjiDisplayTranslation" className={displayedElement === 1 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>{kanji.translation}</p>
                    {kanji.readings && <KanaReadings
                        kanji={kanji}
                        allDisplayed={allDisplayed}
                        expanded={!!!trainingMode}
                        changeCurrentKanjiByKanji={changeCurrentKanjiByKanji}
                        changeCurrentWordById={changeCurrentWordById}
                    />}
                </div>}
                {word && <div id="wordDisplay">
                    {word.jukujikun ? 
                        <div id="wordDisplayWordJukujikun">
                            <div id="wordDisplayWordKanjiOnly">
                                {word.elements.map((element, i) => <div className="wordDisplayWordElement" key={i}>
                                    <span>{element.kanji || element.kana}</span>
                                </div>)}
                            </div>
                            <div className="wordDisplayWordElementYomi jukujikun">
                                {word.jukujikun}
                                <div>*Jukujikun</div>
                            </div>
                        </div>
                        :
                        <div id="wordDisplayWord" className={displayedElement === 0 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>
                            {word.elements.map((element, i) => <div className="wordDisplayWordElement" key={i}>
                                <span>{element.kanji || element.kana}</span>
                                {element.kanji ? <span className="wordDisplayWordElementYomi">{element.kana}</span> : <span className="wordDisplayWordElementYomi"></span>}
                            </div>)}
                        </div>
                    }
                    <p id="wordDisplayTranslation" className={displayedElement === 1 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>{word.translation}</p>
                    <p id="wordDisplayGrammar" className={allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>
                        {word.grammar.map((el, i) => <span key={i}>{i > 0 && ', '}{classes[el].toLowerCase()}</span>)}
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
                </div>}
                {!!trainingMode && <TrainingControls
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