import { classes, collections, levels} from "../lib/common";

const TrainingControls = (props) => {
    const {
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
    } = props;

    return (
        <div id="selectorAndControls">
            <div id="selector">
                <span className={(displayedElement === 0 && !allDisplayed) ? 'selected clickable' : 'clickable'} onClick={() => changeDisplayedElement(0)}>本</span>
                <span onClick={displayElements} className={allDisplayed ? 'selected clickable' : 'clickable'}>
                    <img src={allDisplayed ? "/img/view-opened.png" : "/img/view-closed.png"} alt={allDisplayed ? "hide" : "view"} />
                </span>
                <span className={(displayedElement === 1 && !allDisplayed) ? 'selected clickable' : 'clickable'} onClick={() => changeDisplayedElement(1)}>fr</span>
            </div>
            <div id="controls" >
                {window.innerWidth >= window.innerHeight && <div></div>}
                <div id="trainingClose" className="clickable">
                    <span onClick={() => toggleTraining(0)}>
                        <img src="/img/close.png" alt="stop training" />
                    </span>
                </div>
                <div id="trainingFilters" onClick={checkTrainingFilters} className="clickable">
                    <span>Collection: {collection ? collections[collection] : "Toutes"}</span>
                    <span>JLPT: {level ? levels[level] : "Tous"}</span>
                    <span>Classe: {grammar ? classes[grammar] : "Toutes"}</span>
                </div>
                <div id="trainingNext" onClick={randomKanji} className="clickable">
                    <span>
                        <img src="/img/next.png" alt="random" />
                    </span>
                </div>
                {window.innerWidth >= window.innerHeight && <div></div>}
            </div>
        </div>
    );
}

export default TrainingControls;