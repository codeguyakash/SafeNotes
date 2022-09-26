import { useState, useEffect } from "react";
import axios from "axios";
import Notes from "./Notes";
import "./Dashboard.css";
import DashboardNav from "./DashboardNav";

const Home = () => {
  const [notes, setNotes] = useState([]);
  // const token1 = localStorage.perse("token", response.data.token);
  // const username = localStorage.getItem("username");
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
  // console.log(token);
  return (
    <>
      <DashboardNav />
      {/* <div className="greet-user">
        <h1>Welcome {username}</h1>
      </div> */}
      <div className="note-container">  
        {notes.map((note) => (
          <Notes item={note} key={note._id} />
        ))}
      </div>
    </>
  );
};
export default Home;
