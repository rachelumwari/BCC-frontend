import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "../component/Signin/Signin";
import Layout from "../component/siderbar/SiderbarDrawer";
import AddNewUser from "../pages/Dashboard/addNewUser";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Layout>
            <AddNewUser />
          </Layout>
        }
      />
      <Route
        exact
        path="/singin"
        element={
          <Layout>
            <SignIn />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
