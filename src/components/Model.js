import "./Model.css";
const Model = (props) => {
  return (
    <>
      <div className={props.open ? "activeModel" : "model"}>
        <div className="model-header">
          <div className="title">{props.title}</div>
          <button
            className={props.hide ? "hide" : "close-button"}
            onClick={props.CloseHandler}
          >
            &times;
          </button>
        </div>
        <hr className={props.hide ? "hide" : "model-hr"} />
        <div className={props.hide ? "hide":"model-body"}>{props.para}</div>
        <h3 className={props.hide ? "popup-msg" : "hide"}>{props.popup}</h3>
        <hr className={props.hide ? "hide" : "model-hr"} />
        <div className="btndiv">
          <button
            className={props.hide ? "hide" : "actionbtn update"}
            onClick={props.EditHandler}
          >
            Update
          </button>
          <button
            className={props.hide ? "hide" : "actionbtn delete"}
            onClick={props.DeleteHandler}
          >
            Delete
          </button>
          <button className="actionbtn" onClick={props.CloseHandler}>
            Close
          </button>
        </div>
      </div>
      <div id="overlay" className={props.over ? "active" : ""}></div>
    </>
  );
};

export default Model;
