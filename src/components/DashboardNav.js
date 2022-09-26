import { Link, useNavigate } from "react-router-dom";
import "./Button.css"

const DashboardNav = () => {
  const navigate = useNavigate();

  const SignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
  };
  const CreateNotes = () => {
    navigate("/createnote");
  };

  return (
    <>
      <div className="nav-div">
        <nav className="nav">
          <Link className="navbar" to="/dashboard">
            Dashboard
          </Link>
          <button className="nav-button" onClick={CreateNotes}>Create Notes</button>
          <button className="nav-button" onClick={SignOut}>Log Out</button>
        </nav>
      </div>
        <div className="side-bar">

        </div>
    </>
  );
};
export default DashboardNav;
