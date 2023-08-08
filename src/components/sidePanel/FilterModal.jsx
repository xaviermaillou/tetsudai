
import { dictionnary } from "tetsudai-common"

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

    const handleClick = (key, filterSetter) => {
        filterSetter(key)
        if (!searchExecuted) setOpenFilter(false)
        setSearchExecuted(true)
    }

    return (
        <div id="wordsListFilterModal" className={openFilter ? (searchExecuted || currentElement ? "open" : "open expanded") : (searchExecuted || currentElement ? "" : "expanded")}>
            <div>
                {Object.entries(dictionnary.pluralClasses).map(([key, value]) => (
                    <span key={key} onClick={() => handleClick(key, setGrammar)} className={grammar === key ? "selected clickable" : "clickable"}>{value}</span>
                ))}
            </div>
            <div>
                {Object.entries(dictionnary.levels).map(([key, value]) => (
                    <span key={key} onClick={() => handleClick(key, setLevel)} className={level === key ? "selected clickable" : "clickable"}>{value ? (key === "0" ? value : `JLPT ${value}`) : 'Hors niveau'}</span>
                ))}
            </div>
            <div>
                {Object.entries(dictionnary.collections).map(([key, value]) => (
                    <span key={key} onClick={() => handleClick(key, setCollection)} className={collection === key ? "selected clickable" : "clickable"}>{value}</span>
                ))}
            </div>
        </div>
    )
}

export default FilterModal