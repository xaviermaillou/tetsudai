const TrainingModal = (props) => {
    const {
        imgPath,
        openTrainingModal,
        setOpenTrainingModal,
        trainingMode,
        toggleTraining,
    } = props

    const handleClick = (mode) => {
        setOpenTrainingModal(false)
        toggleTraining(mode)
    }

    return (
        <div id="wordsListTrainingModal" className={openTrainingModal ? "open" : ""}>
            <div className="tooltip">
                Lancer le mode entraînement pour apprendre et réviser les kanji ou le vocabulaire correspondant aux catégories sélectionnées
            </div>
            <div id="wordsListTrainingModalScreenshot">
                <img src={`/img/${imgPath}/TrainingScreen3.png`} alt="training screen" />
                <img src={`/img/${imgPath}/TrainingScreen2.png`} alt="training screen" />
                <img src={`/img/${imgPath}/TrainingScreen.png`} alt="training screen" />
            </div>
            <div id="wordsListTrainingModalButtons">
                <span className={trainingMode === 1 ? "selected clickable" : "clickable"} onClick={() => handleClick(1)}>Réviser les kanji</span>
                <span className={trainingMode === 2 ? "selected clickable" : "clickable"} onClick={() => handleClick(2)}>Réviser le vocabulaire</span>
            </div>
        </div>
    )
}

export default TrainingModal