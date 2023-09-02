
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./component/Landing/Landing";
import SignIn from "./component/Signin/Signin";
import SignUp from "./component/Singup/Signup";
import Dashboard from "./pages/Dashboard/Dashborad";
import Users from "../src/component/Users/User";
import Teacher from "./component/Teacher/Teacher";
import Student from "./component/Student/Student";
import Layout from "./component/layout/appLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/user" element={<Users/>} />
        <Route path="/teacher" element={<Teacher/>} />
        <Route path="/student" element={<Student/>} />
      </Routes>
    </BrowserRouter>



  );
}

export default App;
