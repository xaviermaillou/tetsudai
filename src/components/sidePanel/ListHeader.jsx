import { useEffect, useState } from "react"
import { dictionnary } from "tetsudai-common"
import FilterModal from "./FilterModal"


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
        filterIndication,
        searchExecuted,
        setSearchExecuted,
        currentElement,
    } = props

    useEffect(() => {
        if (filterIndication) {
            setOpenFilter(true)
        }
    }, [filterIndication, setOpenFilter])
    const handleFilterIconClick = () => {
        setOpenFilter(!openFilter)
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
                    className={searchExecuted ? "wordsListHeaderRow" : "wordsListHeaderRow lowOpacity"}
                >
                    <div></div>
                    {(collection !== "0" || level !== "0" || grammar !== "0") ? 
                        <div id="filtersIndicatorRow">
                            {grammar !== "0" &&
                                <span className="filtersIndicatorsElement">
                                    <span>{dictionnary.pluralClasses[grammar]}</span>&nbsp;&nbsp;
                                    <img className="clickable" src={`/img/${imgPath}/close.png`} alt="close filter" onClick={() => setGrammar("0")} />
                                </span>
                            }
                            {(level !== "0" && grammar !== "0") && <span>|</span>}
                            {level !== "0" &&
                                <span className="filtersIndicatorsElement">
                                    <span>{dictionnary.levels[level] ? `JLPT ${dictionnary.levels[level]}` : 'Hors JLPT'}</span>&nbsp;&nbsp;
                                    <img className="clickable" src={`/img/${imgPath}/close.png`} alt="close filter" onClick={() => setLevel("0")} />
                                </span>
                            }
                            {(collection !== "0" && level !== "0") && <span>|</span>}
                            {collection !== "0" &&
                                <span className="filtersIndicatorsElement">
                                    <span>{dictionnary.collections[collection]}</span>&nbsp;&nbsp;
                                    <img className="clickable" src={`/img/${imgPath}/close.png`} alt="close filter" onClick={() => setCollection("0")} />
                                </span>
                            }
                        </div>
                        :
                        (searchExecuted && <span id="filtersIndicatorsEmpty">
                            Aucune catégorie sélectionnée
                        </span>)
                    }
                    <div></div>
                </div>
                <div id="filtersTip" className={openFilter ? "wordsListHeaderRow open" : "wordsListHeaderRow"}>
                    {searchExecuted ?
                        <div className="tooltip">Filtrer par classe grammaticale, niveau JLPT ou collection</div>
                        :
                        <div className="tooltip expanded">Sélectionner une catégorie pour en afficher le contenu</div>
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