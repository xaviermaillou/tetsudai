const Loading = (props) => {
    const {
        isLoading,
    } = props

    if (isLoading) return (
        <div className="loadingAnimation">
            <div className="fourDotsContainer">
                <div className="dotsRow">
                    <div className="dotsCell"></div>
                    <div className="dotsCell dot">
                        <div></div>
                    </div>
                    <div className="dotsCell"></div>
                </div>
                <div className="dotsRow">
                    <div className="dotsCell dot">
                        <div></div>
                    </div>
                    <div className="dotsCell"></div>
                    <div className="dotsCell dot">
                        <div></div>
                    </div>
                </div>
                <div className="dotsRow">
                    <div className="dotsCell"></div>
                    <div className="dotsCell dot">
                        <div></div>
                    </div>
                    <div className="dotsCell"></div>
                </div>
            </div>
        </div>
    )
}

export default Loading