import { useRef, useEffect, useState } from "react";
import DashboardNav from "./DashboardNav";
import axios from "axios";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [updateNote, setUpdateNote] = useState([]);
  const newtitleRef = useRef("");
  const newdescriptionRef = useRef("");
  const token = localStorage.getItem("token");

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/note/`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setUpdateNote(res.data.find((n) => n._id === id)));
  }, [token,id]);

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
      .then((response) => alert(response.data));
    e.target.reset();
  };

  return (
    <>
      <DashboardNav />
      <div className="container">
        <form onSubmit={UpdateNote}>
          <h1 className="update-heading ">Update Note</h1>
          <div className="title-div">
            <input
            className="InputField"
              type="text"
              ref={newtitleRef}
              placeholder="Title"
              required
              defaultValue={updateNote.title}
            ></input>
          </div>
          <div className="description-div">
            <textarea
              className="DescriptionField"
              type="text"
              ref={newdescriptionRef}
              placeholder="Description"
              required
              defaultValue={updateNote.description}
            ></textarea>
          </div>
          <div>
            <button className="button update-button" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Edit;
