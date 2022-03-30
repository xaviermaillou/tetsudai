import { useState } from "react";
import words from "../data/words";
import WordsList from './WordsList';

const RandomDisplay = () => {
    const [word, setWord] = useState(words[Math.floor(Math.random()*words.length)]);
    const [displayedElement, setDisplayedElement] = useState(0);
    const [allDisplayed, setAllDisplayed] = useState(true);

    const refreshWord = () => {
        setWord(words[Math.floor(Math.random()*words.length)]);
    }
    const changeDisplayedElement = (num) => {
        setAllDisplayed(false);
        setDisplayedElement(num);
    }
    const displayElements = () => {
        setAllDisplayed(!allDisplayed);
    }

    return (
        <div id="randomDisplayContainer">
            <div id="randomDisplay" className="mainContainer">
                <div id="japaneseWords">
                    <p id="kanji" className={displayedElement === 0 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>{word.kanji}</p>
                    <p id="kanas" className={displayedElement === 1 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>{word.kunyomi}{word.kunyomi && word.onyomi ? <span id="separator">|</span>: ''}{word.onyomi}</p>
                </div>
                <p id="translation" className={displayedElement === 2 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>{word.translation}</p>
                <div id="selector">
                    <span className={(displayedElement === 0 && !allDisplayed) && 'selected'} onClick={() => changeDisplayedElement(0)}>本</span>
                    <span className={(displayedElement === 1 && !allDisplayed) && 'selected'} onClick={() => changeDisplayedElement(1)}>あ</span>
                    <span className={(displayedElement === 2 && !allDisplayed) && 'selected'} onClick={() => changeDisplayedElement(2)}>fr</span>
                </div>
                <div id="controls" >
                    <div onClick={displayElements}>
                        <img src={allDisplayed ? "/img/view-opened.png" : "/img/view-closed.png"} alt={allDisplayed ? "hide" : "view"} />
                    </div>
                    <div onClick={refreshWord}>
                        <img src="/img/next.png" alt="next" />
                    </div>
                </div>
            </div>
            <WordsList words={words} currentWord={word} />
        </div>
    )
}

export default RandomDisplay;