import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import "./signup.css";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";


export default function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };
  return (
    <div className="loginForm">
   
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="userName"
              label="User Name"
              name="userName"
              autoComplete="userName"
            />
          </Grid>
          <Grid item xs={12}>
           
            <TextField
              required
              fullWidth
              type="password"
              id="email"
              label="Passoword"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
           
          <TextField
            required
            fullWidth
            type="dob"
            id="dob"
            label="DOB"
            name="dob"
            autoComplete="dob"
          />
        </Grid>
        <Grid item xs={12}>
           
        <TextField
          required
          fullWidth
          type="churchOccupation"
          id="churchOccupation"
          label="ChurchOccupation"
          name="churchOccupation"
          autoComplete="churchOccupation"
        />
      </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              onClick={(e)=>handleSubmit(e)}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Box>
      {/* </Grid> */}
    </div>
  );
}
