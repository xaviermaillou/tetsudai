import { useState } from "react";
import { dictionnary } from "../lib/dictionnary";

const VerbInflexionLine = (props) => {
    const { inflexion, tenseName, modeName } = props;

    return (
        <div className="wordDetailsInflexionsMode">
            <span className="wordDetailsInflexionsVerb">{inflexion['neutral']['main']}{inflexion['neutral']['okurigana']}</span>
            <span className="wordDetailsInflexionsIndicator">{dictionnary[tenseName]} {dictionnary[modeName]}</span>
            <span className="wordDetailsInflexionsVerb">{inflexion['polite']['main']}{inflexion['polite']['okurigana']}</span>
        </div>
    );
}

const VerbInflexionTense = (props) => {
    const { tense, tenseName } = props;

    return (
        <div className="wordDetailsInflexionsTense">
            <VerbInflexionLine inflexion={tense['affirmative']} tenseName={tenseName} modeName={'affirmative'} />
            <VerbInflexionLine inflexion={tense['negative']} tenseName={tenseName} modeName={'negative'} />
        </div>
    );
}

const Inflexions = (props) => {
    const { inflexions } = props;

    return (
        <div id="wordDetailsInflexions">
            <VerbInflexionTense tense={inflexions['nonPast']} tenseName={'nonPast'} />
            <VerbInflexionTense tense={inflexions['past']} tenseName={'past'} />
        </div>
    );
}

const WordDetailsPlus = (props) => {
    const { inflexions } = props;
    
    const [open, setOpen] = useState(false);

    return (
        <div id="wordDetailsPlus" className={open ? "expanded" : ""}>
            <div id="wordDetailsPlusIndicator" className="clickable" onClick={() => setOpen(!open)}>
                {inflexions &&
                    <span>CONJUGAISON</span>
                }
                {open ?
                    <img className="open" src="/img/less.png" alt="hide readings" />
                    :
                    <img src="/img/plus.png" alt="show readings" />
                }
            </div>
            {inflexions &&
                <Inflexions inflexions={inflexions} />
            }
        </div>
    );
}

const Kanji = (props) => {
    const {
        element,
        changeCurrentKanjiByKanji,
    } = props;
    return (
        <div className="kanjisElement clickable" onClick={() => changeCurrentKanjiByKanji(element.kanji, false)}>
            <div className="kanjisElementKanji">
                {element.details.kanji}
            </div>
            <div className="kanjisElementKana">
                <div>
                    {
                        element.details.readings.kunyomi?.map((item, i) => (
                            <span className={element.kana === item.kana ? "highlighted" : ""} key={i}>
                                {i > 0 && ', '}
                                {item.kana}
                            </span>
                        ))
                    }
                    {
                        (element.details.readings.kunyomi.length>0 && element.details.readings.onyomi.length>0) && 
                        <>
                            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                        </>
                    }
                    {
                        element.details.readings.onyomi?.map((item, i) => (
                            <span className={element.kana === item.kana ? "highlighted" : ""} key={i}>
                                {i > 0 && ', '}
                                {item.kana}
                            </span>
                        ))
                    }
                </div>
                <div className="kanjisListTranslation">
                    {element.details.translation}
                </div>
            </div>
        </div>
    );
}

const Sentence = (props) => {
    const {
        sentence,
        changeCurrentWordById,
        referenceId,
    } = props;


    return (
        <div className="sentencesElement">
            <div>
                {sentence.fullSentence.elements.map((element, i) => (
                    <span onClick={() => changeCurrentWordById(element.id, false)} className={referenceId === element.id ? "clickable highlighted" : "clickable"} key={i}>
                        {element.word}
                    </span>
                ))}
            </div>
            <div className="sentencesElementTranslation">{sentence.fullSentence.translation}</div>
        </div>
    );
}

const WordDetails = (props) => {
    const {
        elements,
        sentences,
        inflexions,
        allDisplayed,
        expanded,
        changeCurrentKanjiByKanji,
        changeCurrentWordById,
        referenceId,
    } = props;

    return (
        <div id="wordDetails" className={allDisplayed ? (expanded ? 'hiddenElement selected expanded' : 'hiddenElement selected') : 'hiddenElement'}>
            <div id="wordDetailsKanjis">
                <p className="kanasReadingsHeader">KANJI</p>
                {elements?.map((element, i) => (
                    <Kanji
                        element={element}
                        changeCurrentKanjiByKanji={changeCurrentKanjiByKanji}
                        key={i}
                    />
                ))}
                {elements.length === 0 && <span className="tooltip">Ce mot n'est composé d'aucun kanji</span>}
            </div>
            <div id="wordDetailsSentences">
                <p className="kanasReadingsHeader">PHRASES</p>
                {sentences?.map((sentence, i) => (
                    <Sentence
                        sentence={sentence}
                        changeCurrentWordById={changeCurrentWordById}
                        referenceId={referenceId}
                        key={i}
                    />
                ))}
                {sentences.length === 0 && <span className="tooltip">Aucune phrase trouvée avec ce mot</span>}
            </div>
            {inflexions &&
                <WordDetailsPlus inflexions={inflexions} />
            }
        </div>
    );
}

export default WordDetails;