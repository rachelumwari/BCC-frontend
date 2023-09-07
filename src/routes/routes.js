import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/Signin/Signin";
import Layout from "../component/siderbar/SiderbarDrawer";
import UserList from "../pages/Users/userList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Layout>
            <UserList />
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
        path="/l"
        element={
          <SignIn />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
