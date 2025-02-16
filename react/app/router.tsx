import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./welcome/welcome";
import LogIn from "./login/login";
import SignUp from "./signup/signup";
import Upload from "./upload/upload";
import Verify from "./verify/verify";

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/verify" element={<Verify />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;