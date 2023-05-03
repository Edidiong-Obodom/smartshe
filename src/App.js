import { Route, Routes } from "react-router-dom";
import Login from "./pages/Unauth/Login";
import Signup from "./pages/Unauth/Signup";
import Home from "./pages/Unauth/Home.js";
import Admin from "./pages/Auth/Admin";
import About from "./pages/Unauth/About";
import OurTeam from "./pages/Unauth/Team";
// import Test from "./pages/Test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/ourteam" element={<OurTeam />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/test" element={<Test />} /> */}
      <Route path="/checker" element={<Admin />} />
    </Routes>
  );
}

export default App;
