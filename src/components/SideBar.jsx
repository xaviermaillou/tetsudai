import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
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
        loadingMainDisplay
    } = props

    const navigate = useNavigate()
    const reloadPage = () => {
        console.log('RELOAD')
        navigate('/')
        window.location.reload(false)
    }

    return (
        <div id="sideBar">
            <ThemeSwitcher historyDisplayed={displayHistory.length > 1} />
            <div onClick={reloadPage} id="logoContainer" className={kanji === null && word === null && !loadingMainDisplay ? 'full' : 'clickable'}>
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