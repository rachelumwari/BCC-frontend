import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./singin.css";
import { useDispatch, useSelector } from "react-redux";
import { getAuthStatus, loginUser } from "../../features/Auth/loginSlice";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [input, setInput] = useState({ userName: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStatus = useSelector(getAuthStatus);

  useEffect(() => {
    if (authStatus === "succeeded") {
      navigate("/profile");
    }
  }, [authStatus, dispatch, navigate]);
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(input));
  };

  return (
    <div className="loginForm">
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              value={input.userName}
              color="info"
              id="username"
              label="User Name"
              name="userName"
              autoComplete="userName"
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              type="password"
              color="info"
              value={input.password}
              id="password"
              label="Passoword"
              name="password"
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              onClick={(e) => handleSubmit(e)}
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
