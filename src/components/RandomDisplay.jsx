import { useState, useEffect } from "react";
import WordsList from './WordsList';
import KanasReadings from "./KanaReadings";

const RandomDisplay = (props) => {
    const { kanjis, vocabulary, preventKanjiReload } = props;
    const [kanji, setKanji] = useState('');
    const [relatedVocabulary, setRelatedVocabulary] = useState([]);

    useEffect(() => {
        if (!preventKanjiReload) setKanji(kanjis[Math.floor(Math.random()*kanjis.length)]);
    }, [kanjis, preventKanjiReload]);

    useEffect(() => {
        const relatedVocabularyCopy = [];
        vocabulary.forEach((word) => {
            word.elements.every((element) => {
                if (element.kanji === kanji.kanji) {
                    relatedVocabularyCopy.push(word);
                    return false;
                }
                return true;
            });
        });
        setRelatedVocabulary(relatedVocabularyCopy);
    }, [kanji, vocabulary]);

    const changeCurrentWord = (id) => {
        setKanji(kanjis.find((kanji) => kanji.doc.id === id))
    }

    console.log('Kanji selected', kanjis);
    console.log('Related vocabulary', relatedVocabulary);

    const [displayedElement, setDisplayedElement] = useState(0);
    const [allDisplayed, setAllDisplayed] = useState(true);

    const refreshWord = () => {
        setKanji(kanjis[Math.floor(Math.random()*kanjis.length)]);
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
            {kanji && <div id="randomDisplay" className="mainContainer">
                <div id="japaneseWords">
                    <p id="kanji" className={displayedElement === 0 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>{kanji.kanji}</p>
                    <p id="translation" className={displayedElement === 2 || allDisplayed ? 'hiddenElement selected' : 'hiddenElement'}>{kanji.translation}</p>
                    {kanji.readings && <KanasReadings 
                        readings={kanji.readings} 
                        relatedVocabulary={relatedVocabulary}
                        allDisplayed={allDisplayed}
                        displayedElement={displayedElement}
                    />}
                </div>
                <div id="selectorAndControls">
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
                </div>
            </div>}
            <WordsList 
                words={kanjis.sort((a, b) => a.strokes - b.strokes)}
                changeCurrentWord={changeCurrentWord}
                currentWord={kanji}
            />
        </div>
    );
}

export default RandomDisplay;