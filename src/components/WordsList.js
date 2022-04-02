import { useState } from "react";

const ListElement = (props) => {
    const { obj, word } = props;
    return (
        <div className={(word && word.translation === obj.translation) ? "wordsListElement selected" : "wordsListElement"}>
            <div id="wordsListElementKanji">
                {obj.kanji}
            </div>
            <div id="wordsListElementKana">
                <div>
                    {obj.uses.kunyomi.readings}  &nbsp; {obj.uses.onyomi.readings}
                </div>
                <div id="wordsListElementTranslation">
                    {obj.translation}
                </div>
            </div>
        </div>
    )
}

const WordsList = (props) => {
    const { words, currentWord } = props;
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
        console.log(open);
    }

    return (
        <div id="wordsListContainer" className={open ? "mainContainer open" : "mainContainer"}>
            <div id="wordsListIndicator" className={open ? "open" : ""} onClick={toggle}><img src="/img/up.png" alt="see all words" /></div>
            <div id="wordsList">
                {words.map((item, i) => (
                    <ListElement obj={item} word={currentWord} key={i} />
                ))}
            </div>
        </div>
    )
}

export default WordsList;