import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./singin.css";
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
      {/* <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="center"
      > */}
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              //   className="text-field"
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            {/* <FormControl variant="outlined">
              <InputLabel required htmlFor="password-field">
                Password
              </InputLabel>
              <OutlinedInput
                id="password-field"
                fullWidth
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl> */}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              onClick={(e)=>handleSubmit(e)}
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </Box>
      {/* </Grid> */}
    </div>
  );
}
