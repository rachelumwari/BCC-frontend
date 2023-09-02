import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";

import NavBar from "./navBar";
// import Footer from "../../Footer";

const useStyles = makeStyles(() => ({
  content: {
    height: "100%",
  },
}));

const Layout = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <main className={classes.content}>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
