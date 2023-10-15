
import { useContext } from "react"
import { dictionnary } from "tetsudai-common"
import LanguageContext from "../../contexts/Language"

const FilterModal = (props) => {
    const {
        openFilter,
        setOpenFilter,
        collection,
        setCollection,
        level,
        setLevel,
        grammar,
        setGrammar,
        searchExecuted,
        setSearchExecuted,
        currentElement
    } = props

    const language = useContext(LanguageContext)

    const handleClick = (key, filterSetter) => {
        filterSetter(key)
        if (!searchExecuted) setOpenFilter(false)
        setSearchExecuted(true)
    }

    return (
        <div id="wordsListFilterModal" className={openFilter ? (searchExecuted || currentElement ? "open" : "open expanded") : (searchExecuted || currentElement ? "" : "expanded")}>
            <div>
                {Object.entries(dictionnary[language].pluralClasses).map(([key, value]) => (
                    <span key={key} onClick={() => handleClick(key, setGrammar)} className={(!!searchExecuted && grammar === key) ? "selected clickable" : "clickable"}>{value}</span>
                ))}
            </div>
            <div>
                {Object.entries(dictionnary[language].levels).map(([key, value]) => (
                    <span key={key} onClick={() => handleClick(key, setLevel)} className={(!!searchExecuted && level === key) ? "selected clickable" : "clickable"}>{value ? (key === "0" ? value : `JLPT ${value}`) : 'Hors niveau'}</span>
                ))}
            </div>
            <div>
                {Object.entries(dictionnary[language].collections).map(([key, value]) => (
                    <span key={key} onClick={() => handleClick(key, setCollection)} className={(!!searchExecuted && collection === key) ? "selected clickable" : "clickable"}>{value}</span>
                ))}
            </div>
        </div>
    )
}

export default FilterModal