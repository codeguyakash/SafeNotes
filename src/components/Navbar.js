import { Link, useNavigate } from "react-router-dom";
// import Logo from "../Icons/Logo.png"
import "./Navbar.css";
import "./Button.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-div">
        <nav className="nav">
          <div>
            <Link className="navbar" to="/">
              Safe Note
            </Link>
          </div>
          <div>
            <button className="nav-button" onClick={() => navigate("/signin")}>
              SIGN IN
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
