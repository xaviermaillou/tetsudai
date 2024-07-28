import isElectron from "is-electron"

const Icon = (props) => {
    const { onClick, id, className, src, alt } = props
    
    return (
        <img onClick={onClick} id={id} className={className} src={src.slice(isElectron() ? 1 : 0)} alt={alt} />
    )
}

export default Icon