
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./component/Landing/Landing";
import SignIn from "./component/Signin/Signin";
import SignUp from "./component/Singup/Signup";
import Siderbar from "./component/Dashboard/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashbor" element={<Siderbar/>} />
      </Routes>
    </BrowserRouter>



  );
}

export default App;
