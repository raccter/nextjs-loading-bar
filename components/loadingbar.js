const LoadingBar = ({progress}) => {
    return (
        <div className="loading-bar-container">
            <div className="loading-bar" />
            <div className="loading-bar-filled" style={{width: progress + '%'}} />
        </div>
    )
}

export default LoadingBar