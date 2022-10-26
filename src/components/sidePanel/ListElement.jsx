const ListElement = (props) => {
    const {
        id,
        currentElement,
        importance,
        child
    } = props

    return (
        <div className={importance ? `importance${importance} kanjisListElementContainer`: "kanjisListElementContainer"} >
            <div 
                className={(currentElement && currentElement.kanji && currentElement.id === id) ?
                    "kanjisListElement selected" : "kanjisListElement"}
            >
                {child}
            </div>
        </div>
    )
}

export default ListElement