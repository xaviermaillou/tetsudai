import { useCookies } from "react-cookie"

const ThemeSwitcher = (props) => {
    const { historyDisplayed } = props

    const [cookies, setCookie] = useCookies()

    function handleCookie() {
        setCookie("theme", cookies.theme === 'dark' ? 'light' : 'dark', {
            path: "/"
        })
    }

    return (
        <div id="themeSwitcher" className={historyDisplayed ? "down" : ""}>
            <div id="themeSwitcherPill" className="clickable" onClick={handleCookie}>
                <div id="themeSwitcherDot"></div>
            </div>
        </div>
    )
}

export default ThemeSwitcher