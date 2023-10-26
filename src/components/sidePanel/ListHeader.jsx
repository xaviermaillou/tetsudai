import { useContext, useEffect, useState } from "react"
import { dictionnary } from "tetsudai-common"
import { localDictionnary } from "../../lib/dictionnary"
import FilterModal from "./FilterModal"
import LanguageContext from "../../contexts/Language"


const ListHeader = (props) => {
    const {
        openFilter,
        setOpenFilter,
        imgPath,
        collection,
        setCollection,
        level,
        setLevel,
        grammar,
        setGrammar,
        handleSearch,
        searchExecuted,
        setSearchExecuted,
        currentElement,
    } = props

    const [lastSearch, setLastSearch] = useState(null)

    useEffect(() => {
        setLastSearch(JSON.parse(localStorage.getItem('search')))
    }, [])

    const language = useContext(LanguageContext)

    const handleFilterIconClick = () => {
        setOpenFilter(!openFilter)
    }

    const retrieveLastSearch = () => {
        setGrammar(lastSearch.grammar)
        setLevel(lastSearch.level)
        setCollection(lastSearch.collection)
        handleSearch(lastSearch.search)
        setSearchExecuted(true)
    }

    return (
        <div id="wordsListHeader">
            <div
                className={searchExecuted ? "clickable" : "lowOpacity"}
            >
            </div>
            <div
                id="wordsListFilterIcon"
                className={(searchExecuted || openFilter) ? "clickable" : "clickable highlighted"}
                onClick={() => handleFilterIconClick()}
            >
                <img
                    className={openFilter ? "open" : ""}
                    src={`/img/${imgPath}/up.png`}
                    alt="search"
                />
            </div>
            <div id="wordsListFilters">
                <div
                    id="filtersIndicator"
                    className="wordsListHeaderRow"
                >
                    <div></div>
                    {(collection !== "0" || level !== "0" || grammar !== "0") ? 
                        <div id="filtersIndicatorRow">
                            {grammar !== "0" &&
                                <span className="filtersIndicatorsElement">
                                    <span>{dictionnary[language].pluralClasses[grammar]}</span>
                                    <img className="clickable" src={`/img/${imgPath}/close.png`} alt="close filter" onClick={() => setGrammar("0")} />
                                </span>
                            }
                            {(level !== "0" && grammar !== "0") && <span>|</span>}
                            {level !== "0" &&
                                <span className="filtersIndicatorsElement">
                                    <span>{dictionnary[language].levels[level] ? `JLPT ${dictionnary[language].levels[level]}` : localDictionnary[language].noJLPT}</span>
                                    <img className="clickable" src={`/img/${imgPath}/close.png`} alt="close filter" onClick={() => setLevel("0")} />
                                </span>
                            }
                            {(collection !== "0" && level !== "0") && <span>|</span>}
                            {collection !== "0" &&
                                <span className="filtersIndicatorsElement">
                                    <span>{dictionnary[language].collections[collection]}</span>
                                    <img className="clickable" src={`/img/${imgPath}/close.png`} alt="close filter" onClick={() => setCollection("0")} />
                                </span>
                            }
                        </div>
                        :
                        (searchExecuted ?
                            <span id="filtersIndicatorsEmpty">
                                {localDictionnary[language].noSelection}
                            </span>
                            :
                            (lastSearch && <div
                                onClick={retrieveLastSearch}
                                className="clickable"
                            >
                                {localDictionnary[language].retrieveLastSearch}
                            </div>)
                        )
                    }
                    <div></div>
                </div>
                <div id="filtersTip" className={openFilter ? "wordsListHeaderRow open" : "wordsListHeaderRow"}>
                    {searchExecuted ?
                        <div className="tooltip">{localDictionnary[language].selectCategory2}</div>
                        :
                        <div className="tooltip expanded">{localDictionnary[language].selectCategory}</div>
                    }
                </div>
            </div>
            <FilterModal
                openFilter={openFilter}
                setOpenFilter={setOpenFilter}
                collection={collection}
                setCollection={setCollection}
                level={level}
                setLevel={setLevel}
                grammar={grammar}
                setGrammar={setGrammar}
                searchExecuted={searchExecuted}
                setSearchExecuted={setSearchExecuted}
                currentElement={currentElement}
            />
        </div>
    )
}

export default ListHeader