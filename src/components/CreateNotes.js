import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DashboardNav from "./DashboardNav";
import "./CreateNotes.css";
import Model from "./Model";

const CreateNotes = () => {
  const navigate = useNavigate();
  const titleRef = useRef("");
  const descriptionRef = useRef("");
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

  const CreateNote = (e) => {
    e.preventDefault();
    const data = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
    };

    axios
      .post("http://localhost:5000/note/", data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setMessage(`Note ${response.statusText} Successfully`);
        console.log(response);
        setOpen(true);
        setOverlay(true);
        setHide(true)
      });
    e.target.reset();
  };
  return (
    <>
      <DashboardNav />
      <div className="create-container">
        <form onSubmit={CreateNote}>
          <h2 className="create-form-heading">Create Note</h2>
          <div className="">
            <input
              className="title-inputfield"
              type="text"
              ref={titleRef}
              placeholder="Title"
              required
            ></input>
          </div>
          <div className="">
            <textarea
              className="description-inputfield"
              type="text"
              ref={descriptionRef}
              placeholder="Description"
              required
            ></textarea>
          </div>
          <div>
            <button className="create-button" type="submit">
              Create
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
export default CreateNotes;
