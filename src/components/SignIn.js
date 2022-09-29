import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../components/Sign.css";
import axios from "axios";
import Navbar from "./Navbar";
import Model from "./Model";

const Signin = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [open, setOpen] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [hide, setHide] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const CloseModel = () => {
    setOpen(false);
    setOverlay(false);
  };

  const onSignIN = async (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/users/signin",
        data
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
        localStorage.setItem("username", response.data.user.username);
      }
    } catch (error) {
      if (error.response.status === 404) {
        setErrorMessage(error.response.data.message);
        // navigate("/signup");
        setOpen(true);
        setOverlay(true);
        setHide(true);
      } else if (error.response.status === 401) {
        setErrorMessage(error.response.data.message);
        setOpen(true);
        setOverlay(true);
        setHide(true);

      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="parent-container">
        <div className="child-container">
          <div className="sub-child-left"></div>

          <div className="form-parent-div">
            <div className="form-child-left">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png"
                alt="logo"
                width="150px"
              />
              <h2>Safe Note</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="form-child-right">
              <form onSubmit={onSignIN}>
                <h1 className="formheading">Sign In</h1>
                <div>
                  <input
                    className="inputfield"
                    type="text"
                    ref={emailRef}
                    placeholder="Email"
                    required
                  ></input>
                </div>
                <div>
                  <input
                    className="inputfield"
                    type="password"
                    ref={passwordRef}
                    placeholder="Password"
                    required
                  ></input>
                </div>
                <div>
                  <button className="button" type="submit">
                    Sign In
                  </button>
                  <br />
                  <h5 className="have-account">
                    Don't have an account?
                    <Link className="linkforsignin" to="/signup">
                      Sign Up
                    </Link>
                  </h5>
                </div>
              </form>
            </div>
          </div>
          <div className="sub-child-right"></div>
        </div>
      </div>
      <Model
        hide={hide}
        open={open}
        CloseHandler={CloseModel}
        over={overlay}
        para={errorMessage}
      />
      {/* <Footer/> */}
    </>
  );
};
export default Signin;
