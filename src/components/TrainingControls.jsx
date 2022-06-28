import { pluralClasses, collections, levels} from "../lib/common";

const TrainingControls = (props) => {
    const {
        imgPath,
        displayedElement,
        displayElements,
        allDisplayed,
        changeDisplayedElement,
        randomKanji,
        collection,
        level,
        grammar,
        checkTrainingFilters,
        toggleTraining,
        endedTraining
    } = props;

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
                        <span>{grammar ? pluralClasses[grammar] : "Toutes"}</span>
                        <span>{level ? (levels[level] ? levels[level] : "Hors niveau") : "Tous"}</span>
                        <span>{collection ? collections[collection] : "Toutes"}</span>
                    </div>
                </div>
                <div id="trainingNext" onClick={randomKanji} className="clickable">
                    <span>
                        <img src={endedTraining ? `/img/${imgPath}/reset.png` : `/img/${imgPath}/next.png`} alt="random" />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default TrainingControls;