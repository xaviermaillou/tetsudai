import { useState } from "react"
import { dictionnary } from "../lib/dictionnary"

const Kosoado = (props) => {
    const { referenceId, changeCurrentWordById } = props

    return (
        <div id="kosoadoTable">
            <div className="kosoadoRow">
                <div onClick={() => changeCurrentWordById(209)} className={referenceId === 209 ? "selected" : "clickable"}>こう</div>
                <div onClick={() => changeCurrentWordById(213)} className={referenceId === 213 ? "selected" : "clickable"}>そう</div>
                <div onClick={() => changeCurrentWordById(217)} className={referenceId === 217 ? "selected" : "clickable"}>ああ</div>
                <div onClick={() => changeCurrentWordById(221)} className={referenceId === 221 ? "selected" : "clickable"}>どう</div>
                <div className="kosoadoIndicator">façon</div>
            </div>
            <div className="kosoadoRow">
                <div onClick={() => changeCurrentWordById(210)} className={referenceId === 210 ? "selected" : "clickable"}>ここ</div>
                <div onClick={() => changeCurrentWordById(214)} className={referenceId === 214 ? "selected" : "clickable"}>そこ</div>
                <div onClick={() => changeCurrentWordById(218)} className={referenceId === 218 ? "selected" : "clickable"}>あそこ</div>
                <div onClick={() => changeCurrentWordById(222)} className={referenceId === 222 ? "selected" : "clickable"}>どこ</div>
                <div className="kosoadoIndicator">lieu</div>
            </div>
            <div className="kosoadoRow">
                <div onClick={() => changeCurrentWordById(208)} className={referenceId === 208 ? "selected" : "clickable"}>これ</div>
                <div onClick={() => changeCurrentWordById(212)} className={referenceId === 212 ? "selected" : "clickable"}>それ</div>
                <div onClick={() => changeCurrentWordById(216)} className={referenceId === 216 ? "selected" : "clickable"}>あれ</div>
                <div onClick={() => changeCurrentWordById(220)} className={referenceId === 220 ? "selected" : "clickable"}>どれ</div>
                <div className="kosoadoIndicator">pronom</div>
            </div>
            <div className="kosoadoRow">
                <div onClick={() => changeCurrentWordById(207)} className={referenceId === 207 ? "selected" : "clickable"}>この</div>
                <div onClick={() => changeCurrentWordById(211)} className={referenceId === 211 ? "selected" : "clickable"}>その</div>
                <div onClick={() => changeCurrentWordById(215)} className={referenceId === 215 ? "selected" : "clickable"}>あの</div>
                <div onClick={() => changeCurrentWordById(219)} className={referenceId === 219 ? "selected" : "clickable"}>どの</div>
                <div className="kosoadoIndicator">adjectif</div>
            </div>
            <div className="kosoadoRow">
                <div className="kosoadoIndicator">proche</div>
                <div className="kosoadoIndicator">distant</div>
                <div className="kosoadoIndicator">très distant</div>
                <div className="kosoadoIndicator">question</div>
                <div className="kosoadoIndicator"></div>
            </div>
        </div>
    )
}

const VerbInflexionLine = (props) => {
    const { inflexion, tenseName, modeName } = props

    return (
        <div className="wordDetailsInflexionsMode">
            <span className="wordDetailsInflexionsVerb">{inflexion['polite']?.['main']}{inflexion['polite']?.['ending']}</span>
            <span className="wordDetailsInflexionsIndicator">{dictionnary[tenseName]} {dictionnary[modeName]}</span>
            <span className="wordDetailsInflexionsVerb">{inflexion['neutral']?.['main']}{inflexion['neutral']?.['ending']}</span>
        </div>
    )
}

const VerbInflexionTense = (props) => {
    const { tense, tenseName } = props

    return (
        <div className="wordDetailsInflexionsTense">
            <VerbInflexionLine inflexion={tense['affirmative']} tenseName={tenseName} modeName={'affirmative'} />
            <VerbInflexionLine inflexion={tense['negative']} tenseName={tenseName} modeName={'negative'} />
        </div>
    )
}

const Inflexions = (props) => {
    const { inflexions } = props

    return (
        <div id="wordDetailsInflexions">
            <VerbInflexionTense tense={inflexions['nonPast']} tenseName={'nonPast'} />
            <VerbInflexionTense tense={inflexions['past']} tenseName={'past'} />
        </div>
    )
}

const WordDetailsPlus = (props) => {
    const {
        imgPath,
        referenceId,
        changeCurrentWordById,
        inflexions,
        kosoado
    } = props
    
    const [open, setOpen] = useState(false)

    return (
        <div id="wordDetailsPlus" className={open ? "expanded" : ""}>
            <div id="wordDetailsPlusIndicator" className="clickable" onClick={() => setOpen(!open)}>
                {inflexions && <span>CONJUGAISON</span>}
                {kosoado && <span>KOSOADO</span>}
                {open ?
                    <img className="open" src={`/img/${imgPath}/less.png`} alt="hide readings" />
                    :
                    <img src={`/img/${imgPath}/plus.png`} alt="show readings" />
                }
            </div>
            {inflexions && <Inflexions inflexions={inflexions} />}
            {kosoado && <Kosoado referenceId={referenceId} changeCurrentWordById={changeCurrentWordById} />}
        </div>
    )
}

const Kanji = (props) => {
    const {
        element,
        changeCurrentKanjiById,
    } = props
    return (
        <div className="kanjisElement clickable" onClick={() => changeCurrentKanjiById(element.details.id)}>
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
    )
}

const Sentence = (props) => {
    const {
        sentence,
        changeCurrentWordById,
        referenceId,
    } = props


    return (
        <div className="sentencesElement">
            <div>
                {sentence.elements.map((element, i) => (
                    <span onClick={() => changeCurrentWordById(element.id)} className={referenceId === element.id ? "highlighted" : "clickable"} key={i}>
                        {element.word}
                    </span>
                ))}
            </div>
            <div className="sentencesElementTranslation">{sentence.translation}</div>
        </div>
    )
}

const WordDetails = (props) => {
    const {
        imgPath,
        elements,
        sentences,
        inflexions,
        kosoado,
        allDisplayed,
        expanded,
        changeCurrentKanjiById,
        changeCurrentWordById,
        referenceId,
    } = props

    return (
        <div id="wordDetails" className={allDisplayed ? (expanded ? 'hiddenElement selected expanded' : 'hiddenElement selected') : 'hiddenElement'}>
            <div id="wordDetailsKanjis">
                <p className="kanasReadingsHeader">KANJI</p>
                {elements?.map((element, i) => (
                    <Kanji
                        element={element}
                        changeCurrentKanjiById={changeCurrentKanjiById}
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
            {(expanded && (inflexions || kosoado)) &&
                <WordDetailsPlus
                    imgPath={imgPath}
                    referenceId={referenceId}
                    changeCurrentWordById={changeCurrentWordById}
                    inflexions={inflexions}
                    kosoado={kosoado}
                />
            }
        </div>
    )
}

export default WordDetails