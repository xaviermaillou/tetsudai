const TrainingControls = (props) => {
    const {
        displayedElement,
        displayElements,
        allDisplayed,
        changeDisplayedElement,
        randomWord,
        filtersApplied,
        collection,
        level,
        grammar,
        checkTrainingFilters,
        toggleTraining,
    } = props;

    const collections = {
        1: "150 kanjis essentiels"
    }

    const classes = {
        1: "Noms communs",
        2: "Noms propres",
        3: "Verbes",
        4: "Adjectifs",
        5: "Adverbes",
    }

    return (
        <div id="selectorAndControls">
            <div id="selector">
                <span className={(displayedElement === 0 && !allDisplayed) ? 'selected' : ''} onClick={() => changeDisplayedElement(0)}>本</span>
                <span onClick={displayElements} className={allDisplayed ? 'selected' : ''}>
                    <img src={allDisplayed ? "/img/view-opened.png" : "/img/view-closed.png"} alt={allDisplayed ? "hide" : "view"} />
                </span>
                <span className={(displayedElement === 1 && !allDisplayed) ? 'selected' : ''} onClick={() => changeDisplayedElement(1)}>fr</span>
            </div>
            <div id="controls" >
                {window.innerWidth >= window.innerHeight && <div></div>}
                <div id="trainingClose">
                    <span onClick={() => toggleTraining(false)}>
                        <img src="/img/close.png" alt="stop training" />
                    </span>
                </div>
                <div id="trainingFilters" onClick={checkTrainingFilters}>
                    {filtersApplied && <span>Collection: {collection ? collections[collection] : "Toutes"}</span>}
                    {filtersApplied && <span>JLPT: {level ? level : "Tous"}</span>}
                    {filtersApplied && <span>Classe: {grammar ? classes[grammar] : "Toutes"}</span>}
                </div>
                <div id="trainingNext" onClick={randomWord}>
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