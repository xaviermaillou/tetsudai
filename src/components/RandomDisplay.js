import { useState, useEffect } from "react";
import WordsList from './WordsList';
import KanasReadings from "./KanaReadings";

const RandomDisplay = (props) => {
    const { words } = props;
    const [word, setWord] = useState(null);
    useEffect(() => {
        setWord(words[Math.floor(Math.random()*words.length)]);
    }, [words]);
    console.log(word);
    const [displayedElement, setDisplayedElement] = useState(0);
    const [allDisplayed, setAllDisplayed] = useState(true);
    const [kanasExpanded, setKanasExpanded] = useState(false);

    const refreshWord = () => {
        setWord(words[Math.floor(Math.random()*words.length)]);
    }
    const changeDisplayedElement = (num) => {
        setAllDisplayed(false);
        setKanasExpanded(false);
        setDisplayedElement(num);
    }
    const displayElements = () => {
        setKanasExpanded(false);
        setAllDisplayed(!allDisplayed);
    }

    return (
        <div id="randomDisplayContainer">
            {word && <div id="randomDisplay" className="mainContainer">
                <div id="japaneseWords">
                    <p id="kanji" className={(displayedElement === 0 || allDisplayed) && !kanasExpanded ? 'hiddenElement selected' : 'hiddenElement'}>{word.kanji}</p>
                    {word.uses && <KanasReadings 
                        uses={word.uses} 
                        kanasExpanded={kanasExpanded} 
                        setKanasExpanded={setKanasExpanded}
                        allDisplayed={allDisplayed}
                        displayedElement={displayedElement}
                    />}
                </div>
                <p id="translation" className={displayedElement === 2 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>{word.translation}</p>
                <div id="selector">
                    <span className={(displayedElement === 0 && !allDisplayed) ? 'selected' : ''} onClick={() => changeDisplayedElement(0)}>本</span>
                    <span className={(displayedElement === 1 && !allDisplayed) ? 'selected' : ''} onClick={() => changeDisplayedElement(1)}>あ</span>
                    <span className={(displayedElement === 2 && !allDisplayed) ? 'selected' : ''} onClick={() => changeDisplayedElement(2)}>fr</span>
                </div>
                <div id="controls" >
                    <div onClick={displayElements}>
                        <img src={allDisplayed ? "/img/view-opened.png" : "/img/view-closed.png"} alt={allDisplayed ? "hide" : "view"} />
                    </div>
                    <div onClick={refreshWord}>
                        <img src="/img/next.png" alt="next" />
                    </div>
                </div>
            </div>}
            <WordsList words={words} currentWord={word} />
        </div>
    );
}

export default RandomDisplay;