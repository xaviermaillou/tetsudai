import { useState } from "react";
import KanasReadings from "./KanaReadings";

const RandomControls = (props) => {
    const {
        displayedElement,
        displayElements,
        allDisplayed,
        changeDisplayedElement,
        refreshWord,
        filtersApplied,
        setFiltersApplied,
    } = props;
    return (
        <div id="selectorAndControls">
            <div id="selector">
                <span className={(displayedElement === 0 && !allDisplayed) ? 'selected' : ''} onClick={() => changeDisplayedElement(0)}>本</span>
                <span onClick={displayElements} className={allDisplayed ? 'selected' : ''}>
                    <img src={allDisplayed ? "/img/view-opened.png" : "/img/view-closed.png"} alt={allDisplayed ? "hide" : "view"} />
                </span>
                <span className={(displayedElement === 1 && !allDisplayed) ? 'selected' : ''} onClick={() => changeDisplayedElement(1)}>fr</span>
            </div>
            <div id="controls" >
                <div className={filtersApplied ? "selected" : ""}>
                    <span onClick={() => setFiltersApplied(!filtersApplied)}>
                        <img src="/img/filter.png" alt="apply filters" />
                    </span>
                </div>
                <div onClick={refreshWord}>
                    <span>
                        <img src="/img/random.png" alt="random" />
                    </span>
                </div>
            </div>
        </div>
    );
}

const RandomDisplay = (props) => {
    const {
        kanji,
        refreshWord,
        compressed,
        filtersApplied,
        setFiltersApplied,
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
                    {kanji.readings && <KanasReadings 
                        readings={kanji.readings} 
                        vocabulary={kanji.vocabulary}
                        allDisplayed={allDisplayed}
                    />}
                </div>
                <RandomControls
                    displayedElement={displayedElement}
                    displayElements={displayElements}
                    allDisplayed={allDisplayed}
                    changeDisplayedElement={changeDisplayedElement}
                    refreshWord={refreshWord}
                    filtersApplied={filtersApplied}
                    setFiltersApplied={setFiltersApplied}
                />
            </div>}
        </div>
    );
}

export default RandomDisplay;