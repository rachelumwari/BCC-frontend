import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./singin.css";


export default function LoginForm() {


  const handleSubmit = (event) => {
    event.preventDefault();
  };
  
  return (
    <div className="loginForm">
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
    </div>
  );
}
