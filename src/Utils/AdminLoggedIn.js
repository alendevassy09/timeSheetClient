import { Outlet, Navigate } from "react-router-dom";
import React,{useEffect} from "react";
// import axios from "../Axios/axios";
import { useState } from "react";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";

const LoggedIn = () => {
  //{authtoken:localStorage.getItem('userToken')}
  //let auth={authtoken:true}
  const [auth,setAuth]=useState({
    authtoken:"loading"
  })
  // useEffect(()=>{
  //   axios.get('/authCheck',{headers:{token:localStorage.getItem('adminToken')}}).then((response)=>{
  //     if(response.data.status){
  //       console.log(response);
  //       setAuth({authtoken:true})
  //     }else{
  //       localStorage.removeItem('adminToken')
  //       setAuth({authtoken:false})
  //     }
  //   })
  // },[])

  useEffect(()=>{
    setAuth({authtoken:true})
  },[])
  if(auth.authtoken==="loading"){
return(
  <Box sx={{width:"100%",height:"95vh",display:"flex",justifyContent:"center",alignItems:"center"}}> <CircularProgress/></Box>
)
  }else{
    return(
      auth.authtoken?<Outlet/>:<Navigate to='/admin-login'/>
  )
  }

   
};
 
export default LoggedIn