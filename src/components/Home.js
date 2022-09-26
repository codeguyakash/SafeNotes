// import Footer from "./Footer";
import Navbar from "./Navbar";
import "./Home.css";
import Model from "./Model";
const Home = () => {
  return (
    <>
      <Navbar />
      <Model/>
      <div className="home-container">
        <div className="items item1"><h1>Daily Notes</h1></div>
        <div className="items item2"><h1>Study Notes</h1></div>
        <div className="items item3"><h1>Private Notes</h1></div>
        <div className="items item4"><h1>Other</h1></div>
        <div className="items item4"><h1>Other</h1></div>
        <div className="items item4"><h1>Other</h1></div>
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default Home;
