import * as React from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logoImg from "../../assets/logo.png";
import { useEffect, useState } from "react";
import ApiIndex from "../../api/index";
import gift from "../../assets/cart1.png";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();

  const [isAlert, setIsAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");
  const [alertType, setAlertType] = React.useState("");

  const hideAlert = () => {
    if (isAlert) {
      setTimeout(() => {
        setIsAlert(false);
      }, 3000);
    }
  };

  useEffect(() => {
    hideAlert();
  }, [hideAlert]);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (!data.get("email") || !data.get("password")) {
      setAlertType("error");
      setAlertMessage("Please enter Email and Password");
      setIsAlert(true);
      return;
    }

    if (!validateEmail(data.get("email"))) {
      setAlertType("error");
      setAlertMessage("Please enter valid email");
      setIsAlert(true);
      return;
    }

    try {
      let formData = {
        email: data.get("email"),
        password: data.get("password"),
      };

      let response = await ApiIndex.CustomerApi.login(formData);
      console.log(response);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('customerId', response.data.user.id);
      localStorage.setItem('customerName', response.data.user.firstName);

      setAlertType('success');
      setAlertMessage('Logged In Successfull !');
      setIsAlert(true);

      setTimeout(() => {
        navigate("/dashboard");
        window.location.reload();
      }, 4000);
    } catch (error) {
      console.log(error);
      setAlertType("error");
      if (error.code == 400) {
        setAlertMessage(error.message);
      } else if (error.code == 500) {
        setAlertMessage("Sorry, something went wrong, Please try again later");
      } else {
        setAlertMessage("Sorry, server not connected, Please try again later");
      }

      setIsAlert(true);
    }

    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <br></br>
      <br></br>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7}>
          <br></br>
          <br></br>
          <br></br>
          <img src={gift} alt="" height={100} />
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="object-contain h-20" src={logoImg} alt="logo" />
            <h1>
              <b className="text-[#03045E]">Login to Smeco</b>
            </h1>

            {isAlert && (
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: "11vh" }}
              >
                <Grid item xs={7}>
                  <Alert severity={alertType}>{alertMessage}</Alert>
                </Grid>
              </Grid>
            )}

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address/Phone Number"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {/* <Button 
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button> */}
              <div className="pl-4 pr-4 pt-3">
                <button className="border-none w-[500px] px-7 py-2">
                  Login
                </button>
              </div>
              <br />
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <p className="pr-3">
                    Don't have an account?
                    <Link className="pl-2" href="/signup" variant="body2">
                      Sign Up
                    </Link>
                  </p>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
