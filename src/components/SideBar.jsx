import { useNavigate } from 'react-router-dom';

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
                <img src={`/img/${imgPath}/Logo1.png`} alt='logo' />
                <img src={`/img/${imgPath}/Logo2.png`} alt='logo' />
                <img src={`/img/${imgPath}/Logo3.png`} alt='logo' />
            </div>
            {historyDisplayed && <div
                id="historyIconContainer"
                className={(openHistory || !searchExecuted) ? "hiddenElement" : "hiddenElement selected"}
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