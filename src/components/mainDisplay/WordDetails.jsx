import { useContext, useState } from "react"
import { localDictionnary } from "../../lib/dictionnary"
import { dictionnary } from "tetsudai-common"
import KanjiElement from "../subComponents/KanjiElement"
import WordElement from "../subComponents/WordElement"
import Loading from "../visualComponents/Loading"
import LanguageContext from "../../contexts/Language"
import FiveFirstElements from "../subComponents/FiveFirstElements"
import Icon from "../subComponents/Icon"

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
                <div className="kosoadoIndicator">déterminatif</div>
            </div>
            <div className="kosoadoRow">
                <div onClick={() => changeCurrentWordById(614)} className={referenceId === 614 ? "selected" : "clickable"}>こちら</div>
                <div onClick={() => changeCurrentWordById(936)} className={referenceId === 936 ? "selected" : "clickable"}>そちら</div>
                <div onClick={() => changeCurrentWordById(756)} className={referenceId === 756 ? "selected" : "clickable"}>あちら</div>
                <div onClick={() => changeCurrentWordById(984)} className={referenceId === 984 ? "selected" : "clickable"}>どちら</div>
                <div className="kosoadoIndicator">direction</div>
            </div>
            <div className="kosoadoRow">
                <div onClick={() => changeCurrentWordById(1027)} className={referenceId === 1027 ? "selected" : "clickable"}>こんな</div>
                <div onClick={() => changeCurrentWordById(1203)} className={referenceId === 1203 ? "selected" : "clickable"}>そんな</div>
                <div onClick={() => changeCurrentWordById(1204)} className={referenceId === 1204 ? "selected" : "clickable"}>あんあ</div>
                <div onClick={() => changeCurrentWordById(1205)} className={referenceId === 1205 ? "selected" : "clickable"}>どんな</div>
                <div className="kosoadoIndicator">type</div>
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
    const { inflexion, modeName } = props
    const language = useContext(LanguageContext)
    
    return (
        <div className="wordDetailsInflexionsLine">
            <span className="wordDetailsInflexionsVerb">{inflexion['polite']?.['main']}{inflexion['polite']?.['ending']}</span>
            <span className="wordDetailsInflexionsIndicator bold">{localDictionnary[language][modeName]}</span>
            <span className="wordDetailsInflexionsVerb">{inflexion['neutral']?.['main']}{inflexion['neutral']?.['ending']}</span>
        </div>
    )
}

const VerbInflexionTense = (props) => {
    const { tense, tenseName } = props
    const language = useContext(LanguageContext)

    return (
        <div className="wordDetailsInflexionsTense">
            <p className="wordDetailsInflexionsTenseTitle">{localDictionnary[language][tenseName]}</p>
            {tense['affirmative'] && <VerbInflexionLine inflexion={tense['affirmative']} modeName={'affirmative'} />}
            {tense['negative'] && <VerbInflexionLine inflexion={tense['negative']} modeName={'negative'} />}
        </div>
    )
}

const VerbInflexionMood = (props) => {
    const { nonPastTense, pastTense, moodName } = props
    const language = useContext(LanguageContext)

    return (
        <div className="wordDetailsInflexionsMood">
            <p className="wordDetailsInflexionsMoodTitle">{localDictionnary[language][moodName]}</p>
            <VerbInflexionTense tense={nonPastTense} tenseName={'nonPast'} />
            <VerbInflexionTense tense={pastTense} tenseName={'past'} />
        </div>
    )
}

const Inflexions = (props) => {
    const { inflexions } = props

    return (
        <div id="wordDetailsInflexions">
            {(inflexions['nonPast'] && inflexions['past']) &&
                <VerbInflexionMood nonPastTense={inflexions['nonPast']} pastTense={inflexions['past']} moodName={'indicative'} />
            }
            {(inflexions['nonPastProgressive'] && inflexions['pastProgressive']) &&
                <VerbInflexionMood nonPastTense={inflexions['nonPastProgressive']} pastTense={inflexions['pastProgressive']} moodName={'progressive'} />
            }
            {(inflexions['nonPastDesiderative'] && inflexions['pastDesiderative']) &&
                <VerbInflexionMood nonPastTense={inflexions['nonPastDesiderative']} pastTense={inflexions['pastDesiderative']} moodName={'desiderative'} />
            }
            {/* {inflexions['volitional'] && <VerbInflexionTense tense={inflexions['volitional']} tenseName={'volitional'} />} */}
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

    const language = useContext(LanguageContext)
    
    const [open, setOpen] = useState(false)

    return (
        <div id="wordDetailsPlus" className={open ? "expanded" : ""}>
            <div id="wordDetailsPlusIndicator" className="clickable bold" onClick={() => setOpen(!open)}>
                {inflexions && <span>{localDictionnary[language].inflexions}</span>}
                {kosoado && <span>KOSOADO</span>}
                {open ?
                    <Icon className="open" src={`/img/${imgPath}/less.png`} alt="hide readings" />
                    :
                    <Icon src={`/img/${imgPath}/plus.png`} alt="show readings" />
                }
            </div>
            {inflexions && <Inflexions inflexions={inflexions} />}
            {kosoado && <Kosoado referenceId={referenceId} changeCurrentWordById={changeCurrentWordById} />}
        </div>
    )
}

const Sentence = (props) => {
    const {
        sentence,
        referenceId,
        pinnedSentence,
        handleSearch,
        setSearchExecuted,
        setMenuOpen,
    } = props

    const language = useContext(LanguageContext)

    const handleSentenceClick = () => {
        const sentenceString = sentence.sections.map((section) => section.string).join("")
        setSearchExecuted(true)
        handleSearch(sentenceString)
        setMenuOpen(true)
    }

    return (
        <div onClick={handleSentenceClick} className={`sentencesElement clickable${pinnedSentence?.id === sentence.id ? ' selected' : ''}`}>
            <div className="sentence">
                <div>
                    {sentence
                        .sections.map((section, i) => (
                            section.match ?
                                <span className="highlighted" key={section.string}>{section.string}</span>
                                :
                                section.string.split("").map(char => <span key={char}>{char}</span>)
                            
                        ))
                    }
                </div>
            </div>
            <div className="sentencesElementTranslation">{sentence.translation[language]}</div>
        </div>
    )
}

export const WordDetails = (props) => {
    const {
        elements,
        sentences,
        loadingSentences,
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
        bottomSpace,
        setMenuOpen,
    } = props

    const language = useContext(LanguageContext)

    let hasRelatedContent = false

    return (
        <div id="wordDetails" className='expanded'>
            <div id="wordDetailsKanjis" className={bottomSpace ? "bottomSpace" : ""}>
                {originLanguage &&
                    <div id="wordLanguage">
                        <span>{dictionnary[language].languages[originLanguage]}</span>
                        <span>{originLanguageWord}</span>
                    </div>
                }
                {precisions[language] && 
                    <div id="wordPrecisions">
                        <p id="wordPrecisionsText">
                            {precisions[language]}
                        </p>
                    </div>
                }
                <div id="relatedKanji">
                    <p className="kanasReadingsHeader">KANJI</p>
                    {elements?.map((element, i) => (
                        <div key={i}>
                            <KanjiElement
                                kanji={element.details}
                                kanaToHighlight={element.kana}
                                changeCurrentKanjiById={changeCurrentKanjiById}
                            />
                        </div>
                    ))}
                    {elements.length === 0 && <span className="tooltip">{localDictionnary[language].noKanji}</span>}
                </div>
                <div id="relatedWords">
                    <p className="kanasReadingsHeader">{localDictionnary[language].relatedWords}</p>
                    {relatedWords &&
                        Object.entries(relatedWords).map(([key, value]) => {
                            if (value.length > 0) hasRelatedContent = true
                            return (
                                <div key={key}>
                                    {value.length > 0 && <p className="relatedWordsSubtitle">{localDictionnary[language][key]}</p>}
                                    <FiveFirstElements
                                        loop={value.map((relatedWord, i) => (
                                            <div className="mainDisplayElementContainer" key={i}>
                                                <WordElement
                                                    word={relatedWord}
                                                    changeCurrentWordById={changeCurrentWordById}
                                                />
                                            </div>
                                        ))}
                                    />
                                </div>
                            )
                        })
                    }
                    {!hasRelatedContent && <span className="tooltip">{localDictionnary[language].noWord}</span>}
                </div>
            </div>
            <div id="wordDetailsSentences" className={bottomSpace ? "bottomSpace" : ""}>
                <p className="kanasReadingsHeader">{localDictionnary[language].sentences}</p>
                {loadingSentences ?
                    <div className="loadingAnimationContainer">
                        <Loading
                            isLoading={loadingSentences}
                        />
                    </div>
                    :
                    <div>
                        <FiveFirstElements
                            loop={sentences?.map((sentence, i) => (
                                <div className="mainDisplaySentenceContainer" key={i}>
                                    <Sentence
                                        sentence={sentence}
                                        referenceId={referenceId}
                                        pinnedSentence={pinnedSentence}
                                        handleSearch={handleSearch}
                                        setSearchExecuted={setSearchExecuted}
                                        setMenuOpen={setMenuOpen}
                                    />
                                </div>
                            ))}
                        />
                        {sentences.length === 0 && <span className="tooltip">{localDictionnary[language].noSentence}</span>}
                    </div>
                }
            </div>
        </div>
    )
}