import { useState } from 'react'
import ThemeSwitcher from "./ThemeSwitcher"

const SideBar = (props) => {
    const {
        imgPath,
        displayHistory,
        historyDisplayed,
        openHistory,
        setOpenHistory,
        kanji,
        word,
        darkMode,
        setDarkMode,
        loadingMainDisplay
    } = props

    return (
        <div id="sideBar">
            <ThemeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} historyDisplayed={displayHistory.length > 1} />
            <div onClick={() => window.location.reload(false)} id="logoContainer" className={kanji === null && word === null && !loadingMainDisplay ? 'full' : 'clickable'}>
                <img src={`/img/${imgPath}/Logo1.png`} alt='logo' />
                <img src={`/img/${imgPath}/Logo2.png`} alt='logo' />
                <img src={`/img/${imgPath}/Logo3.png`} alt='logo' />
            </div>
            {historyDisplayed && <div
                id="historyIconContainer"
                className={openHistory ? "hiddenElement" : "hiddenElement selected"}
            >
                <img
                    className='clickable'
                    src={`/img/${imgPath}/history.png`}
                    alt='history'
                    onClick={() => setOpenHistory(true)}
                />
            </div>}
        </div>
    )
}

export default SideBar