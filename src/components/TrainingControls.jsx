import { useState } from "react"
import { dictionnary } from "tetsudai-common"

const TrainingControls = (props) => {
    const {
        imgPath,
        displayedElement,
        displayElements,
        allDisplayed,
        changeDisplayedElement,
        nextTrainingElement,
        collection,
        level,
        grammar,
        checkTrainingFilters,
        toggleTraining,
        endedTraining
    } = props

    const [ready, setReady] = useState(false)

    const handleNext = (review) => {
        setReady(false)
        nextTrainingElement(review)
    }

    return (
        <div id="selectorAndControls">
            <div id="selector">
                <span className={(displayedElement === 0 && !allDisplayed) ? 'selected clickable' : 'clickable'} onClick={() => changeDisplayedElement(0)}>本</span>
                <span onClick={displayElements} className={allDisplayed ? 'selected clickable' : 'clickable'}>
                    <img src={allDisplayed ? `/img/${imgPath}/view-opened.png` : `/img/${imgPath}/view-closed.png`} alt={allDisplayed ? "hide" : "view"} />
                </span>
                <span className={(displayedElement === 1 && !allDisplayed) ? 'selected clickable' : 'clickable'} onClick={() => changeDisplayedElement(1)}>fr</span>
            </div>
            <div id="controls" >
                <div id="trainingClose" className="clickable">
                    <span onClick={() => toggleTraining(0)}>
                        <img src={`/img/${imgPath}/close.png`} alt="stop training" />
                    </span>
                </div>
                <div id="trainingFilters" onClick={checkTrainingFilters} className="clickable">
                    <div>
                        <span>Classe</span>
                        <span>JLPT</span>
                        <span>Collection</span>
                    </div>
                    <div>
                        <span>{grammar ? dictionnary.pluralClasses[grammar] : "Toutes"}</span>
                        <span>{level ? (dictionnary.levels[level] ? dictionnary.levels[level] : "Hors niveau") : "Tous"}</span>
                        <span>{collection ? dictionnary.collections[collection] : "Toutes"}</span>
                    </div>
                </div>
                <div id="trainingNext" className="clickable" width="20px">
                    <span id="trainingNextChoice" className={ready ? "open" :  ""}>
                        <img
                            onClick={() => handleNext(true)}
                            src={`/img/${imgPath}/good.png`}
                            alt="good"
                        />
                        <img
                            onClick={() => handleNext(false)}
                            src={`/img/${imgPath}/good.png`}
                            alt="good"
                        />
                    </span>
                    <span>
                        <img
                            onClick={() => endedTraining ? handleNext() : setReady(!ready)}
                            src={endedTraining ? `/img/${imgPath}/reset.png` : `/img/${imgPath}/next.png`}
                            alt="next"
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TrainingControls