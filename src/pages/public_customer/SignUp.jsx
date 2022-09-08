

import * as React from 'react';
import Navbar from "../../components/Navbar";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logoImg from '../../assets/logo.png'

function Copyright(props) {
  return (


    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      phonenumber: data.get('phonenumber'),
      email: data.get('email'),
      password: data.get('password'),
      cpassword: data.get('cpassword'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Grid container component="main" sx={{ height: '70vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://img.freepik.com/free-vector/team-happy-employees-winning-award-celebrating-success-business-people-enjoying-victory-getting-gold-cup-trophy-vector-illustration-reward-prize-champions-s_74855-8601.jpg?w=740&t=st=1659653049~exp=1659653649~hmac=ec759371b0d5dc5e45418a5763d8cd05cc12b372a1d756d3ae93c18bdb901f22)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img className='object-contain h-20' src={logoImg} alt="logo" />
            <Typography component="h1" variant="h5">
              Create Account
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                type="cpassword"
                id="cpassword"
                autoComplete="current-password"
              /><br /><br />
              {/* <Button onclick="myFunction()"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button> */}
              <div className='pl-4 pr-4'>
                <button className='border-none w-[515px] px-7 py-2'>Sign Up</button>
              </div><br />

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