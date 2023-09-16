import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/Signin/Signin";
import Layout from "../component/siderbar/SiderbarDrawer";
import UserList from "../pages/Users/userList";
import Courses from "../pages/Courses/courses";
import ManagementCourses from "../pages/Courses/courseManagementPage";
import AddAssignment from "../pages/Courses/addAssignment";
import TakeAssignment from "../pages/Courses/takeAssignment";
import ProfilePage from "../pages/Profile/ProfilePage";
import Dashboard from "../pages/AdminDashboard/dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Layout>
            <ManagementCourses />
          </Layout>
        }
      />
      <Route
        exact
        path="/profile"
        element={
          <Layout>
            <ProfilePage />
          </Layout>
        }
      />
      <Route
        exact
        path="/course/:id"
        element={
          <Layout>
            <ManagementCourses />
          </Layout>
        }
      />
      <Route
        exact
        path="/view-assignment/"
        element={
          <Layout>
            <AddAssignment />
          </Layout>
        }
      />
      <Route
        exact
        path="/create-assignment/:id"
        element={
          <Layout>
            <AddAssignment />
          </Layout>
        }
      />
      <Route
        exact
        path="/take-assigment/:id"
        element={
          <Layout>
            <TakeAssignment />
          </Layout>
        }
      />
      <Route
        exact
        path="/courses"
        element={
          <Layout>
            <Courses />
          </Layout>
        }
      />
      <Route
        exact
        path="/users"
        element={
          <Layout>
            <UserList />
          </Layout>
        }
      />
      <Route
        exact
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route exact path="/auth" element={<SignIn />} />
    </Routes>
  );
};

export default AppRoutes;
