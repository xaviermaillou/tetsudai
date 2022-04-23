import { useState } from "react";
import KanaReadings from "./KanaReadings";
import TrainingControls from "./TrainingControls";

const KanjiDisplay = (props) => {
    const {
        trainingMode,
        kanji,
        refreshWord,
        compressed,
        filtersApplied,
        level,
        grammar,
        applyFilters,
    } = props;

    const [displayedElement, setDisplayedElement] = useState(0);
    const [allDisplayed, setAllDisplayed] = useState(true);

    const changeDisplayedElement = (num) => {
        setAllDisplayed(false);
        setDisplayedElement(num);
    }
    const displayElements = () => {
        setAllDisplayed(!allDisplayed);
    }

    return (
        <div id="randomDisplayContainer">
            {kanji && <div id="randomDisplay" className={compressed ? "mainContainer compressed" : "mainContainer"}>
                <div id="japaneseWords">
                    <p id="kanji" className={displayedElement === 0 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>{kanji.kanji}</p>
                    <p id="translation" className={displayedElement === 1 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>{kanji.translation}</p>
                    {kanji.readings && <KanaReadings
                        readings={kanji.readings} 
                        vocabulary={kanji.vocabulary}
                        allDisplayed={allDisplayed}
                        expanded={!trainingMode}
                    />}
                </div>
                {trainingMode && <TrainingControls
                    displayedElement={displayedElement}
                    displayElements={displayElements}
                    allDisplayed={allDisplayed}
                    changeDisplayedElement={changeDisplayedElement}
                    refreshWord={refreshWord}
                    filtersApplied={filtersApplied}
                    level={level}
                    grammar={grammar}
                    applyFilters={applyFilters}
                />}
            </div>}
        </div>
    );
}

export default KanjiDisplay;