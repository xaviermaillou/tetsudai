import { useContext, useRef } from "react"
import Icon from "../subComponents/Icon"
import LanguageContext from "../../contexts/Language"
import { localDictionnary } from "../../lib/dictionnary"

const Search = (props) => {
    const {
        imgPath,
        currentElement,
        search,
        searchCopy,
        handleSearch,
        searchExecuted,
        open,
        toggle
    } = props

    const language = useContext(LanguageContext)

    const inputRef = useRef(null)

    const handleIconClick = () => {
        search ? handleSearch("") : inputRef.current?.focus()
    }

    return (
        <div id={currentElement ? "wordsListSearchContainer" : "wordsListSearchContainer expanded"}>
            {currentElement !== null &&
                <Icon
                    id="wordsListOpener"
                    className={open ? "open clickable" : "clickable"}
                    onClick={toggle}
                    src={`/img/${imgPath}/next.png`}
                    alt="see all words"
                />
            }
            <div id="wordsListSearch">
                <div className="icon clickable" onClick={handleIconClick}>
                    {search ?
                        <Icon className="close" src={`/img/${imgPath}/close.png`} alt="erase search" />
                        :
                        <Icon src={`/img/${imgPath}/search.png`} alt="search" />
                    }
                </div>
                <input
                    value={searchCopy}
                    className={searchExecuted ? "" : "highlighted"}
                    onChange={(e) => {handleSearch(e.target.value)}}
                    type="text"
                    spellCheck="false"
                    placeholder={localDictionnary[language].searchPlaceholder}
                    ref={inputRef}
                />
            </div>
        </div>
    )
}

export default Search