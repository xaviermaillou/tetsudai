import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Icon from '../subComponents/Icon';

const PageNotFound = () => {
    const [cookies] = useCookies()
    const [imgPath, setImgPath] = useState('light')
    useEffect(() => {
        if (cookies.theme) setImgPath(cookies.theme)
    }, [cookies.theme])

    const navigate = useNavigate()

    return (
        <div id="App" className={imgPath}>
            <div id="logoContainer" className='full'>
                <Icon src={`/img/${imgPath}/Logo1.png`} alt='logo' />
                <Icon src={`/img/${imgPath}/Logo2.png`} alt='logo' />
                <Icon src={`/img/${imgPath}/Logo3.png`} alt='logo' />
            </div>
            <div id="pageNotFound">
                <Icon
                    id="pageNotFoundBackToHome"
                    className="clickable"
                    onClick={() => navigate('/')}
                    src={`/img/${imgPath}/up.png`}
                    alt="back to home"
                />
                <h1>404</h1>
                <p>
                    L'URL ne pointe vers aucune ressource.
                </p>
            </div>
        </div>
    )
}

export default PageNotFound