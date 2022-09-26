// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import CreateNotes from "./components/CreateNotes";
import RequireAuth from "./components/Auth/RequireAuth";
import PublicAuth from "./components/Auth/PublicAuth";
import NotFound from "./components/NotFound";
import Edit from './components/Edit';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PublicAuth />}>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="createnote" element={<CreateNotes />} />
            <Route path="edit/:id" element={<Edit />} />
          </Route>
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
