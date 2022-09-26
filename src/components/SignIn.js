import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../components/Sign.css";
import axios from "axios";
import Navbar from "./Navbar";

const Signin = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");

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
        // console.log(response);
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
        localStorage.setItem("username", response.data.user.username);
      }
    } catch (error) {
      alert(error.response.data.message);
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
      {/* <Footer/> */}
    </>
  );
};
export default Signin;
