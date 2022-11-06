import { useState } from "react"
import { localDictionnary } from "../../lib/dictionnary"
import { dictionnary } from "tetsudai-common"
import KanjiElement from "../subComponents/KanjiElement"
import WordElement from "../subComponents/WordElement"
import Loading from "../visualComponents/Loading"

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
            <span className="wordDetailsInflexionsIndicator">{localDictionnary[tenseName]} {localDictionnary[modeName]}</span>
            <span className="wordDetailsInflexionsVerb">{inflexion['neutral']?.['main']}{inflexion['neutral']?.['ending']}</span>
        </div>
    )
}

const VerbInflexionTense = (props) => {
    const { tense, tenseName } = props

    return (
        <div className="wordDetailsInflexionsTense">
            {tense['affirmative'] && <VerbInflexionLine inflexion={tense['affirmative']} tenseName={tenseName} modeName={'affirmative'} />}
            {tense['negative'] && <VerbInflexionLine inflexion={tense['negative']} tenseName={tenseName} modeName={'negative'} />}
        </div>
    )
}

const Inflexions = (props) => {
    const { inflexions } = props

    return (
        <div id="wordDetailsInflexions">
            {inflexions['nonPast'] && <VerbInflexionTense tense={inflexions['nonPast']} tenseName={'nonPast'} />}
            {inflexions['past'] && <VerbInflexionTense tense={inflexions['past']} tenseName={'past'} />}
            {inflexions['adverb'] && <VerbInflexionTense tense={inflexions['adverb']} tenseName={'adverb'} />}
        </div>
    )
}

export const WordDetailsPlus = (props) => {
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

const Sentence = (props) => {
    const {
        imgPath,
        sentence,
        changeCurrentWordById,
        referenceId,
        pinnedSentence,
        handleSearch,
        setSearchExecuted,
    } = props

    const handleWordClick = (e, id) => {
        e.stopPropagation()
        if (id && referenceId !== id) changeCurrentWordById(id)
    }

    const handleSearchClick = () => {
        const sentenceString = sentence.elements.map((element) => element.word).join("")
        setSearchExecuted(true)
        handleSearch(sentenceString)
    }

    return (
        <div className="sentencesElement">
            <div className="sentence">
                <img
                    onClick={handleSearchClick}
                    className={pinnedSentence?.id === sentence.id ? "sentencePin highlighted" : "sentencePin clickable"}
                    src={`/img/${imgPath}/search.png`}
                    alt="unpin sentence"
                />
                <div>
                    {sentence.elements.map((element, i) => (
                        <span onClick={(e) => handleWordClick(e, element.id)} className={referenceId === element.id ? "highlighted" : (element.id ? "clickable" : "")} key={i}>
                            {element.word}
                        </span>
                    ))}
                </div>
            </div>
            <div className="sentencesElementTranslation">{sentence.translation}</div>
        </div>
    )
}

export const WordDetails = (props) => {
    const {
        imgPath,
        elements,
        sentences,
        loadingSentences,
        allDisplayed,
        expanded,
        changeCurrentKanjiById,
        changeCurrentWordById,
        pinnedSentence,
        handleSearch,
        setSearchExecuted,
        referenceId,
        originLanguage,
        originLanguageWord,
        precisions,
        relatedWords,
    } = props

    let hasRelatedContent = false

    return (
        <div id="wordDetails" className={allDisplayed ? (expanded ? 'hiddenElement selected expanded' : 'hiddenElement selected') : 'hiddenElement'}>
            <div id="wordDetailsKanjis">
                {originLanguage &&
                    <div id="wordLanguage">
                        <span>{dictionnary.languages[originLanguage]}</span>
                        <span>{originLanguageWord}</span>
                    </div>
                }
                {precisions && 
                    <div id="wordPrecisions">
                        <p id="wordPrecisionsText">
                            {precisions}
                        </p>
                    </div>
                }
                <div id="relatedKanji">
                    <p className="kanasReadingsHeader">KANJI</p>
                    {elements?.map((element, i) => (
                        <div>
                            <KanjiElement
                                kanji={element.details}
                                kanaToHighlight={element.kana}
                                changeCurrentKanjiById={changeCurrentKanjiById}
                                key={i}
                            />
                        </div>
                    ))}
                    {elements.length === 0 && <span className="tooltip">Ce mot n'est composé d'aucun kanji</span>}
                </div>
                <div id="relatedWords">
                    <p className="kanasReadingsHeader">MOTS ASSOCIÉS</p>
                    {relatedWords &&
                        Object.entries(relatedWords).map(([key, value]) => (
                            <>
                                {value.length > 0 && <p className="relatedWordsSubtitle">{localDictionnary[key]}</p>}
                                {value.length > 0 && value.map((relatedWord, i) => {
                                    hasRelatedContent = true
                                    return (
                                        <WordElement
                                            word={relatedWord}
                                            changeCurrentWordById={changeCurrentWordById}
                                            key={key + i}
                                        />
                                    )
                                })}
                            </>
                        ))
                    }
                    {!hasRelatedContent && <span className="tooltip">Aucun mot associé n'a été trouvé</span>}
                </div>
            </div>
            <div id="wordDetailsSentences">
                <p className="kanasReadingsHeader">PHRASES</p>
                {loadingSentences ?
                    <div className="loadingAnimationContainer">
                        <Loading
                            isLoading={loadingSentences}
                        />
                    </div>
                    :
                    <div>
                        {sentences?.map((sentence, i) => (
                            <Sentence
                                imgPath={imgPath}
                                sentence={sentence}
                                changeCurrentWordById={changeCurrentWordById}
                                referenceId={referenceId}
                                pinnedSentence={pinnedSentence}
                                handleSearch={handleSearch}
                                setSearchExecuted={setSearchExecuted}
                                key={i}
                            />
                        ))}
                        {sentences.length === 0 && <span className="tooltip">Aucune phrase trouvée avec ce mot</span>}
                    </div>
                }
            </div>
        </div>
    )
}