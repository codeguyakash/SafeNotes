import Alert from "./Alert";
import "./Model.css";
const Model = (props) => {
  return (
    <>
    <Alert/>
      <div className={props.open ? "activeModel" : "model"}>
        <div className="model-header">
          <div className="title">{props.title}</div>
          <button className="close-button" onClick={props.CloseHandler}>
            &times;
          </button>
        </div>
        <hr className="model-hr" />
        <div className="model-body">{props.para}</div>
        <hr className="model-hr" />
        <div className="btndiv">
          <button className="actionbtn update" onClick={props.EditHandler}>
            Update
          </button>
          <button className="actionbtn delete" onClick={props.DeleteHandler}>
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
