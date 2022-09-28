import "./Notes.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Model from "./Model";
import Alert from "./Alert";

const Notes = ({ item }) => {
  const [desc, setDesc] = useState("");
  const [moreBtn, setMoreBtn] = useState(true);
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const day = new Date(item.createdAt).getDate();
  const month = new Date(item.createdAt).toLocaleDateString("default", {
    month: "short",
  });
  const year = new Date(item.createdAt).getFullYear();

  const description = item.description;

  useEffect(() => {
    if (description.length >= 168) {
      setDesc(description.slice(0, 165));
    } else {
      setDesc(description);
      setMoreBtn(false);
    }
  },[description]);

  const OpenModel = () => {
    setOpen(true);
    setOverlay(true);
  };
  const CloseModel = () => {
    setOpen(false);
    setOverlay(false);
    setAlert(false);
   
  };
  const EditNote = () => {
    navigate(`/edit/${item._id}`);
  };

  const DeleteNote = () => {
    axios
      .delete(`http://localhost:5000/note/${item._id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (res.status === 202) {
          setOpen(false);
          setOverlay(false);
          // setAlert(true);
        }
      });
  };
  return (
    <>
      <div className="notes-card" onClick={OpenModel}>
        <div className="date">{`${day}-${month}-${year}`}</div>
        <div className="note-title-div">
          <div className="dot"></div>
          <h3 className="note-title">{item.title}</h3>
        </div>
        <div className="note-paragraph-div">
          <p className="note-description">
            {desc}{" "}
            <span className={moreBtn ? "more-content" : "more-content-hide"}>
              more.
            </span>
          </p>
        </div>
      </div>
      <Alert  AlertClose={CloseModel} alertopen={alert} />
      <Model
        open={open}
        CloseHandler={CloseModel}
        EditHandler={EditNote}
        DeleteHandler={DeleteNote}
        over={overlay}
        title={item.title}
        para={item.description}
      />
    </>
  );
};
export default Notes;
