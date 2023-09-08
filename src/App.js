import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./component/Landing/Landing";
import SignIn from "./component/Signin/Signin";
import SignUp from "./component/Singup/Signup";
import Dashboard from "./pages/Dashboard/Dashborad";
import Users from "../src/component/Users/User";
import Teacher from "./component/Teacher/Teacher";
import Student from "./component/Student/Student";
import AddNewUser from "./pages/Dashboard/addNewUser";
import UserList from "./pages/userList/UserList";
import NewCourse from "./pages/courses/newCourse";
import UpdateNewCourse from "./pages/courses/updateNewCourse";
import ListAssignmentExam from "./pages/AssignmentExam/listAssignmentExam";
import Question from "./pages/Questions/question";
import BibleCertification from "./pages/userList/BibleCertification";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<Users />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/student" element={<Student />} />
        <Route path="/addNewUser" element={<AddNewUser />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/newCourse" element={<NewCourse />} />
        <Route path="/updateNewCourse" element={<UpdateNewCourse />} />
        <Route path="/listAssignmentExam" element={<ListAssignmentExam />} />
        <Route path="/question" element={<Question/>} />
        <Route path="/certificate" element={<BibleCertification/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
