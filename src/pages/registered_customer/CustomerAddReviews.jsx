import {React, useState,useEffect} from 'react'
import Navbarr from '../../components/Navbarr';
import SideNavr from "../../components/SideNavr";
import watch1 from '../../assets/watch1.jpg';
import ApiIndex from "../../api/index";
import { FaStar } from "react-icons/fa";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
//import * as React from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
//mport Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
//import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logoImg from "../../assets/logo.png";
//import { useEffect, useState } from "react";
//import ApiIndex from "../../api/index";
import signup from "../../assets/sign.png";
import StarRatingCard from "../../components/StarRatingCard";
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
  
};


const CustomerAddReviews = () => {

  const [state, setState] = useState({ date: new Date() });
  //const [isOTPSent, setIsOTPSent] = useState(false);
  // const [openOTPSuccess, setOpenOTPSuccess] = React.useState(false);
  // const [openOTPFail, setOpenOTPFail] = React.useState(false);

  

  const handleSubmit = async (value) => {
    try {

      const formData = {
          description : state.description,
          rating:state.rating,
        
      }
      console.log(formData);

      const response = await ApiIndex.ReviewApi.createReview(formData);
      // cleanForm();
    } catch (error) {
      console.log(error);
    }
  };

  

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const cleanForm = () => {
    setState({description : ""});
  }
 


  const {
    description,
    
  } = state;

       
    return (
       <div>
         <Navbarr />
            <div >
             <div className='pt-20'>
              
                  
                  {/* <p className='text-3xl text-center'><b> Rolex watch</b><br></br><br /></p> */}
                  </div>
                
                <div >
                
      
      <br></br>
      <br></br>
      <br></br>
      <Grid container component="main" sx={{ height: "70vh" }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7}>
          
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
            {/* <img className="object-contain h-20" src={logoImg} alt="logo" />
            <br></br>
            <h1>
              <b className="text-[#03045E]">Create Account</b>
            </h1> */}
            
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                value={description}
                required
                fullWidth
                id="description"
                label="Add Your description Here"
                name="description"
                autoFocus
                
              />
              <Box>
                <StarRatingCard/>
                
              </Box>
             
             
              
              
              <Button
                //onSubmit={handleSubmit}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Done
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
  
                {/* <input class=" placeholder:italic placeholder:uppercase w-50 px-5 py-5 rounded-full outline-.5px shadow-2xl"   placeholder="Add Your Review Here" /> */}
                {/* <div >
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={30}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div> */}
                  
                

                    
                    <div className=' flex-col justify-center'>
                    
                        
                        <p className='text-2xl  pt-3'><b></b><br /></p>
                        <div className=' mx-auto grid md:grid-cols-3'>
                    <div className=' pl-32'>
                      {/* <Box>
                    <Button className='border-none w-[150px] px-2 py-2 rounded-full'
                onclick="myFunction()"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                 Submit
              </Button>
              </Box> */}
                        
                       
                        
                    </div>
                    {/* <div className=' pl-8'>
                      <form action='../CustomerReviews'>
                        <button className='border-none w-[150px] px-2 py-2 rounded-full'>Back</button>
                        </form>
                    </div> */}
                    </div>
                        
                    </div>
                    </div>
                    <div> 
                    
                    </div>
                    
                

                

                

                
                <SideNavr />
            </div>
       </div>
        
    )
}

export default CustomerAddReviews