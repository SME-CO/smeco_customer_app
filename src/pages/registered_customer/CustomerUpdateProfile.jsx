import * as React from "react";
import Navbarr from "../../components/Navbarr";
import SideNavr from "../../components/SideNavr";
import { useNavigate } from "react-router-dom";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useEffect, useState } from "react";
import ApiIndex from "../../api/index";


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
      (!data.get("firstName") ||
        !data.get("lastName") ||
        !data.get("password"),
       !data.get("cpassword"))
    ) {
      setAlertType("error");
      setAlertMessage("All fields are required!");
      setIsAlert(true);
      return;
    }

    

    // if (!validateEmail(data.get("email"))) {
    //   setAlertType("error");
    //   setAlertMessage("Please enter valid email");
    //   setIsAlert(true);
    //   return;
    // }

    // if (data.get("password") !== data.get("cpassword")) {
    //   setAlertType("error");
    //   setAlertMessage("Password Mismatch");
    //   setIsAlert(true);
    //   return;
    // }

    try {
      let formData = {
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
       
      };

      let response = await ApiIndex.CustomerApi.updateCustomer(formData.id);
      setAlertType("success");
      setAlertMessage("update Successfull !");
      setIsAlert(true);

      navigate("/login");
    } catch (error) {
      console.log(error);
      setAlertType("error");
      if (error.code == 400) {
        setAlertMessage(error.message);
      } else if (error.code == 500) {
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
    const  imageHandler = (e) => {
      const reader = new FileReader();
      reader.onload = () =>{
        if(reader.readyState === 2){
          this.setState({profileImg: reader.result})
        }
      }
      reader.readAsDataURL(e.target.files[0])
    }
  };

  return (
    <div>
      <Navbarr/>
      
<div class="max-w-2xl mx-auto bg-white p-16">
  <h1 className="text-center text-2xl">update Profile</h1>
  <br></br>
  <br></br>

	<form onSubmit={handleSubmit}>
    <div class="grid gap-6 mb-6 lg:grid-cols-2">
      <from >
        
        
        <div>
            <label for="fristName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Frist Name</label>
            <input type="text" id="fristName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required></input>
        </div>  
        {/* <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
            <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input>
        </div> */}
        <div>
            <label for="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
            <input type="text" id="lastName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required></input>
        </div>
        </from>
        {/* <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label> 
            <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required></input>
  </div> */}
    </div>
    {/* <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required></input> 
    </div>  */}
    {/* <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required></input>
    </div>  */}
    {/* <div class="mb-6">
        <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
        <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required></input>
    </div>  */}
    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        {/* <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required></input> */}
        </div>
        {/* <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label> */}
    </div>
    <div className='pl-32'>
                <button className='border-none my-6 mx-auto px-3 py-2'>Submit</button>
              </div>
    <div>
                

               
                <div>
                  
                </div>
            </div>
    
    
</form>

	
</div>
<SideNavr/>
    </div>
    
  );

  // function myFunction(){
  //   <Alert severity="error">This is an error</Alert>
  // }
}
