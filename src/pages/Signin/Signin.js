import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./singin.css";
import LoginForm from "./loginForm";
// import Link from "@mui/material/Link";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         RachelU
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// export default function SignIn() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };

//   return (
//     // <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         {/* <CssBaseline /> */}
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           {
//             // <Avatar sx={{ m: 1, bgcolor: '#D21404' }}>
//             //   <LockOutlinedIcon />
//             // </Avatar>
//           }
//           <Typography component="h1" variant="h4">
//             Log in to your account
//           </Typography>
//           <Typography component="small" variant="subtitle1">
//             Welcome back! Please enter your details
//           </Typography>
//           <Box
//             component="form"
//             noValidate
//             onSubmit={handleSubmit}
//             sx={{ mt: 3 }}
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//             </Grid>
//             <Link to="/sigin">
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//                 color="secondary"
//               >
//                 Sign In
//               </Button>
//             </Link>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link
//                   to="/SignUp"
//                   variant="body2"
//                   style={{ textDecoration: "none" }}
//                 >
//                   Already have an account? Sign up
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 5 }} />
//       </Container>
//     // </ThemeProvider>
//   );
// }

export default function SignIn() {
  
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

      <div className="container">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "60vh" }}
        >
          <Grid item>
            <Typography component="h1" variant="h4">
              Log in to your account
            </Typography>
            <Typography component="small" color="fentColor" variant="subtitle1">
              Welcome back! Please enter your details.
            </Typography>
          </Grid>
          <Grid item>
            <LoginForm />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
