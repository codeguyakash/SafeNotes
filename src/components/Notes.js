import "./Notes.css";
import EditIcon from "../Icons/edit-icon.svg";
import DeleteIcon from "../Icons/delete-icon.svg";
// import CopyIcon from "../Icons/copy-icon.svg";
// import DownloadIcon from "../Icons/download-icon.svg";
// import ShareIcon from "../Icons/share-icon.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Model from "./Model";

const Notes = ({ item }) => {
  const [desc, setDesc] = useState(0);
  const [moreBtn, setMoreBtn] = useState(true);
  const [open, setOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [btnshow, setBtnShow] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // const date = new Date(item.createdAt).toLocaleDateString();
  const day = new Date(item.createdAt).getDate();
  const month = new Date(item.createdAt).toLocaleDateString("default", {
    month: "short",
  });
  const year = new Date(item.createdAt).getFullYear();

  const description = item.description;

  useEffect(() => {
    if (description.length >= 120) {
      setDesc(description.slice(0, 120));
    } else {
      setDesc(description);
      setMoreBtn(false);
    }
  }, []);

  const OpenModel = () => {
    setOpen(true);
    setOverlay(true);
    // setBtnShow(true);
  };
  const CloseModel = () => {
    setOpen(false);
    setOverlay(false);
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
      .then((res) => OpenModel(),setBtnShow(true));
  };
  return (
    <>
      <div className="notes-card">
        <p className="date">{`${day}-${month}-${year}`}</p>
        <div className="note-title-div">
          <div className="dot"></div>
          <h3 className="note-title">{item.title}</h3>
        </div>
        {/* <hr /> */}
        <p className="note-description">
          {desc}{" "}
          <span
            className={moreBtn ? "more-content" : "more-content-hide"}
            onClick={OpenModel}
          >
            more.
          </span>
        </p>
        <div className="crud-icons-div">
          <img
            className="crud-icons"
            title="Edit"
            src={EditIcon}
            alt="edit-icon"
            onClick={EditNote}
          />
          <img
            className="crud-icons"
            title="Delete"
            src={DeleteIcon}
            alt="delete"
            onClick={DeleteNote}
          />
        </div>
      </div>
      <Model
        op={open}
        btn={btnshow}
        CloseHandler={CloseModel}
        over={overlay}
        title={item.title}
        para={item.description}
      />
    </>
  );
};
export default Notes;
