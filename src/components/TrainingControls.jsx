const TrainingControls = (props) => {
    const {
        displayedElement,
        displayElements,
        allDisplayed,
        changeDisplayedElement,
        refreshWord,
        filtersApplied,
        level,
        grammar,
        applyFilters,
    } = props;

    const adjectives = {
        1: "Noms communs",
        2: "Noms propres",
        3: "Verbes",
        4: "Adjectifs"
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
                <div></div>
                <div className={filtersApplied ? "selected" : ""}>
                    <span onClick={applyFilters}>
                        <img src="/img/filter.png" alt="apply filters" />
                    </span>
                </div>
                <div>
                    {filtersApplied && <span>JLPT: {level ? level : "Tous"}</span>}
                    {filtersApplied && <span>Classe: {grammar ? adjectives[grammar] : "Toutes"}</span>}
                </div>
                <div onClick={refreshWord}>
                    <span>
                        <img src="/img/random.png" alt="random" />
                    </span>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default TrainingControls;