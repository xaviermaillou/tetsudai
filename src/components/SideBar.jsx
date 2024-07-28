import { useNavigate } from 'react-router-dom';
import Icon from './subComponents/Icon';
import isElectron from 'is-electron';

const SideBar = (props) => {
    const {
        imgPath,
        historyDisplayed,
        openHistory,
        setOpenHistory,
        kanji,
        word,
        loadingMainDisplay,
        searchExecuted,
    } = props

    const navigate = useNavigate()
    const reloadPage = () => {
        navigate('/')
        window.location.reload(false)
    }

    return (
        <div id="sideBar">
            <div
                onClick={reloadPage}
                id="logoContainer"
                className={kanji === null && word === null && !loadingMainDisplay ?
                    (searchExecuted ? 'full executed' : 'full')
                    :
                    'clickable'
                }
            >
                <Icon src={`/img/${imgPath}/Logo1.png`} alt='logo' />
                <Icon src={`/img/${imgPath}/Logo2.png`} alt='logo' />
                <Icon src={`/img/${imgPath}/Logo3.png`} alt='logo' />
            </div>
            {historyDisplayed && <div
                id="historyIconContainer"
                className={`hiddenElement${openHistory || !searchExecuted ? "" : " selected"}${isElectron() ? " electron" : ""}`}
            >
                <Icon
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