import "./styles.scss";
function Loading () {
  return (
    <div className="loader d-flex justify-content-center align-items-center">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
    </div>
  )
}

export default Loading;