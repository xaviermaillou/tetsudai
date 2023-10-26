import { useContext, useState } from "react"
import { localDictionnary } from "../../lib/dictionnary"
import LanguageContext from "../../contexts/Language"

const FiveFirstElements = (props) => {
    const {
        loop
    } = props

    const language = useContext(LanguageContext)

    const [open, setOpen] = useState(false)

    return (
        <div className="fiveFirstElements">
            <div>{loop.slice(0, 5)}</div>
            <div className={open ? "moreThanFive open" : "moreThanFive"}>{loop.slice(5)}</div>
            {loop.length > 5 &&
                <div
                    onClick={() => setOpen(!open)}
                    className="tooltip clickable"
                >
                    {open ? localDictionnary[language].seeLess : localDictionnary[language].seeMore}
                </div>
            }
        </div>
    )
}

export default FiveFirstElements