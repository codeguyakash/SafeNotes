import { useRef } from "react";
import axios from "axios";
import DashboardNav from "./DashboardNav";
import "./CreateNotes.css"

const CreateNotes = () => {
  const titleRef = useRef("");
  const descriptionRef = useRef("");
  const token = localStorage.getItem("token");

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
      .then((response) => alert(`Note Created ID is ${response.data._id}`));
      e.target.reset();
    
  };
  return (
    <>
      <DashboardNav />
      <div className="create-container">
        <form onSubmit={CreateNote}>
          <h2 className="">Create Note</h2>
          <div className="">
            <input className=""
              type="text"
              ref={titleRef}
              placeholder="Title"
              required
            ></input>
          </div>
          <div className="">
            <textarea
              className=""
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
    </>
  );
};
export default CreateNotes;
