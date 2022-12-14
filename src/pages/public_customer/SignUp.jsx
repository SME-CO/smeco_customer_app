import * as React from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
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
import signup from "../../assets/sign.png";

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

export default function SignUp() {
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

    if (
      (!data.get("name") ||
        !data.get("phonenumber") ||
        !data.get("email") ||
        !data.get("password"),
        !data.get("cpassword"))
    ) {
      setAlertType("error");
      setAlertMessage("All fields are required!");
      setIsAlert(true);
      return;
    }

    if (data.get("phonenumber").length != 10) {
      setAlertType("error");
      setAlertMessage("Please enter valid phone number");
      setIsAlert(true);
      return;
    }

    if (!validateEmail(data.get("email"))) {
      setAlertType("error");
      setAlertMessage("Please enter valid email");
      setIsAlert(true);
      return;
    }

    if (data.get("password") !== data.get("cpassword")) {
      setAlertType("error");
      setAlertMessage("Password Mismatch");
      setIsAlert(true);
      return;
    }

    try {
      let formData = {
        firstName: data.get("name"),
        mobile: data.get("phonenumber"),
        email: data.get("email"),
        password: data.get("password"),
      };

      let response = await ApiIndex.CustomerApi.registerCustomer(formData);
      setAlertType("success");
      setAlertMessage("Registration Successfull !");
      setIsAlert(true);

      navigate("/login");
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
    //   name: data.get('name'),
    //   phonenumber: data.get('phonenumber'),
    //   email: data.get('email'),
    //   password: data.get('password'),
    //   cpassword: data.get('cpassword'),
    // });
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <Grid container component="main" sx={{ height: "70vh" }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7}>
          <img src={signup} className="pt-2"></img>
        </Grid>
        <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 3,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="object-contain h-20" src={logoImg} alt="logo" />
            <br></br>
            <h1>
              <b className="text-[#03045E]">Create Account</b>
            </h1>
            {isAlert && (
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: "11vh" }}
              >
                <Grid item xs={6}>
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
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                type="number"
                maxlength="10"
                required
                fullWidth
                id="phonenumber"
                label="Phone Number"
                name="phonenumber"
                autoComplete="phonenumber"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="cpassword"
                label="Confirm password"
                type="password"
                id="cpassword"
                autoComplete="current-password"
              />
              {/* <Button
                onclick="myFunction()"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button> */}
              <div className='pl-4 pr-4 pt-3'>
                <button className='border-none w-[500px] px-7 py-2'>Sign Up</button>
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );

  // function myFunction(){
  //   <Alert severity="error">This is an error</Alert>
  // }
}
