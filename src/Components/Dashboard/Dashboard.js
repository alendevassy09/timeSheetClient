import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PieChart from "../SharedComponents/PieChart";
import TodayTasks from "../TodayTasks/TodayTasks";
import "./Dashboard.css";
import axios from '../../Axios'
function Dashboard() {
    let [show,setShow]=useState(true)
  return (
    <Box className="Dashboard-body">
      <Box
        className="body-nav"
        sx={{
          width: "49%",

          margin: 1,
        }}
      >
        <Box
          sx={{
            width: "60%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 1,
            textAlign: "center",
          }}
        >
          
          <PieChart data={show}></PieChart>
          
        </Box>
        <Box sx={{ marginTop: 2, width: "40%" }}>
          <Box sx={{display:"flex",width:"100%",justifyContent:"space-between"}}>
            <Typography variant="h6">Pending</Typography>
            <div style={{width:"1rem",height:"1rem",backgroundColor:"#ffeb3b",marginTop:"auto",marginBottom:"auto"}}></div>
          </Box>
         
          <Box sx={{display:"flex",width:"100%",justifyContent:"space-between"}}>
            <Typography variant="h6">Completed</Typography>
            <div style={{width:"1rem",height:"1rem",backgroundColor:"#ff7043",marginTop:"auto",marginBottom:"auto"}}></div>
          </Box>
         
          {/* <Box sx={{display:"flex",width:"100%",justifyContent:"space-between"}}>
            <Typography variant="h6">Incomplete</Typography>
            <div style={{width:"1rem",height:"1rem",backgroundColor:"#78909c",marginTop:"auto",marginBottom:"auto"}}></div>
          </Box> */}
         <Box sx={{ width: "100%",display:"flex",justifyContent:"end" }}>
            <Button onClick={()=>{
                if(show){
                    setShow(false)
                }else{
                    setShow(true)
                }
            }} sx={{marginLeft:"auto"}} variant="outlined">{show?"Next":"Prev"}</Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "49%", marginTop: 2 }}>
        <Box sx={{width:"100%"}}>
          <Typography variant="h4">Today's Tasks</Typography>
        </Box>
        <TodayTasks></TodayTasks>
      </Box>
    </Box>
  );
}

export default Dashboard;
