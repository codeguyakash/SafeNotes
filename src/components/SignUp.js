import { useNavigate, Link } from "react-router-dom";
import { useRef } from "react";
import "../components/Sign.css";
import axios from "axios";
import Navbar from "./Navbar";
// import Footer from "./Footer";

const SignUp = () => {
  const navigate = useNavigate();
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const onSignUP = async (e) => {
    e.preventDefault();
    const data = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/users/signup",
        data
      );
      // console.log(response);
      if (response.status === 201) {
        console.log(response);
        alert("User Created");
        navigate("/signin");
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
              <form onSubmit={onSignUP}>
                <h1 className="formheading">Sign Up</h1>
                <div>
                  <input
                    className="inputfield"
                    type="text"
                    ref={usernameRef}
                    placeholder="Username"
                    required
                  ></input>
                </div>
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
                    Already have an account?
                    <Link className="linkforsignin" to="/signin">
                      Sign In
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
export default SignUp;
