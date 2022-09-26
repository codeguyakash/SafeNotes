import "./Model.css";
const Model = (props) => {
  return (
    <>
      <div className={props.op ? "activeModel" : "model"}>
        <div className="model-header">
          <div className="title">{props.title}</div>
          <button className="close-button" onClick={props.CloseHandler}>
            &times;
          </button>

        </div>
        <hr className="model-hr"/>
        <div className="model-body">{props.para}</div>
        <hr className="model-hr"/>
        <div className="btndiv">
            <button className={props.btn?"closeBtn":"btndiv-hide"} onClick={props.CloseHandler}>Close</button>
        </div>
      </div>
      <div id="overlay" className={props.over ? "active" : ""}></div>
    </>
  );
};

export default Model;
