const ThemeSwitcher = (props) => {
    const { darkMode, setDarkMode, historyDisplayed } = props
    return (
        <div id="themeSwitcher" className={historyDisplayed ? "down" : ""}>
            <div id="themeSwitcherPill" className="clickable" onClick={() => setDarkMode(!darkMode)}>
                <div id="themeSwitcherDot"></div>
            </div>
        </div>
    )
}

export default ThemeSwitcher