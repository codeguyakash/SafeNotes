import { useRef, useEffect, useState } from "react";
import DashboardNav from "./DashboardNav";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./CreateNotes.css";
import Model from "./Model";

const Edit = () => {
  const navigate = useNavigate();
  const [updateNote, setUpdateNote] = useState([]);
  const newtitleRef = useRef("");
  const newdescriptionRef = useRef("");
  const token = localStorage.getItem("token");
  const [open, setOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [hide, setHide] = useState(false);
  const [message, setMessage] = useState("");

  const CloseModel = () => {
    setOpen(false);
    setOverlay(false);
    navigate(-1);
  };

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/note/`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setUpdateNote(res.data.find((n) => n._id === id)));
  }, [token, id]);

  const UpdateNote = (e) => {
    e.preventDefault();
    const data = {
      title: newtitleRef.current.value,
      description: newdescriptionRef.current.value,
    };

    axios
      .put(`http://localhost:5000/note/${id}`, data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setOpen(true);
          setOverlay(true);
          setHide(true)
          setMessage("Your Note Update Sucessfully");
        }
      });
  };

  return (
    <>
      <DashboardNav />
      <div className="create-container">
        <form onSubmit={UpdateNote}>
          <h1 className="create-form-heading ">Update Note</h1>
          <div className="title-div">
            <input
              className="title-inputfield"
              type="text"
              ref={newtitleRef}
              placeholder="Title"
              required
              defaultValue={updateNote.title}
            ></input>
          </div>
          <div className="">
            <textarea
              className="description-inputfield"
              type="text"
              ref={newdescriptionRef}
              placeholder="Description"
              required
              defaultValue={updateNote.description}
            ></textarea>
          </div>
          <div>
            <button className="create-button" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
      <Model
       hide={hide}
       open={open}
       CloseHandler={CloseModel}
       over={overlay}
       popup={message}
      />
    </>
  );
};
export default Edit;
