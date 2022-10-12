import { useState, useEffect } from "react";
import axios from "axios";
import Notes from "./Notes";
import "./Dashboard.css";
import DashboardNav from "./DashboardNav";

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("http://localhost:5000/note/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setNotes(res.data));
  }, [token]);

  console.log(notes);
  return (
    <>
      <DashboardNav />
      <div className="note-container">
        <div className="add-notes">
          <div className="cir">
            <div className="plus">+</div>
          </div>
          <h3 className="add">Add New</h3>
        </div>
        {notes.map((note) => (
          <Notes item={note} key={note._id} />
        ))}
      </div>
    </>
  );
};
export default Dashboard;
