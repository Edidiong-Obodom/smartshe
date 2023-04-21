import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EmailVerification from "./pages/EmailVErification";
import Home from "./pages/Home.js";
import Admin from "./pages/Admin";
import Test from "./pages/Test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/test" element={<Test />} />
      <Route path="/checker" element={<Admin />} />
      <Route path="/verification" element={<EmailVerification />} />
    </Routes>
  );
}

export default App;
