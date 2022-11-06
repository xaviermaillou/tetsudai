const ListElement = (props) => {
    const {
        isSelected,
        importance,
        child
    } = props

    return (
        <div className={importance ? `importance${importance} listElementContainer`: "listElementContainer"} >
            <div 
                className={isSelected ? "listElement selected" : "listElement"}
            >
                {child}
            </div>
        </div>
    )
}

export default ListElement