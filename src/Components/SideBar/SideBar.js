import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import "./SideBar.css";
import { Assignment, People, SafetyCheck } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function SideBar() {
    let [pop,setPop]=useState(1)
    let navigate=useNavigate()
  return (
    <Box
      sx={{
        width: { md: "20%", sm: "50%" },
        height: "100vh",
        backgroundColor: "#5c6bc0",
      }}
      className="SideBar"
    >
      <Box sx={{ marginLeft: 2, display: "flex", height: "15%" }}>
        <SafetyCheck
          color="action"
          sx={{ marginTop: "auto", fontSize: 60, marginBottom: "auto" }}
        ></SafetyCheck>

        <Typography
          sx={{
            height: "fit-content",
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: 1,
          }}
          className="Button-name"
          variant="h4"
        >
          Admin
        </Typography>
      </Box>
      <Box className="Buttons" sx={{marginTop:1,cursor:"pointer",boxShadow:pop==1?8:0,backgroundColor:pop==1?"#e8eaf6":"#9fa8da" }} >
        <Box className="Button-body" sx={{ marginLeft: 2 }} onClick={()=>{
            setPop(1)
            navigate("/dashboard")
        }}>
          <DashboardIcon
            sx={{ marginTop: "auto", marginBottom: "auto" }}
          ></DashboardIcon>

          <Typography
            sx={{
              height: "fit-content",
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: 1,
            }}
            className="Button-name"
            variant="h6"
          >
            Dashboard
          </Typography>
        </Box>
      </Box>
      <Box className="Buttons" sx={{marginTop:1,cursor:"pointer",boxShadow:pop==2?8:0,backgroundColor:pop==2?"#e8eaf6":"#9fa8da"}} onClick={()=>{
        setPop(2)
            navigate("/tasks")
        }}>
        <Box className="Button-body" sx={{ marginLeft: 2 }}>
          <Assignment
            sx={{ marginTop: "auto", marginBottom: "auto" }}
          ></Assignment>

          <Typography
            sx={{
              height: "fit-content",
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: 1,
            }}
            className="Button-name"
            variant="h6"
          >
            Daily Task
          </Typography>
        </Box>
      </Box>
      <Box className="Buttons" sx={{marginTop:1,cursor:"pointer",boxShadow:pop==3?8:0,backgroundColor:pop==3?"#e8eaf6":"#9fa8da"}} onClick={()=>{
        setPop(3)
            navigate("/users")
        }}>
        <Box className="Button-body" sx={{ marginLeft: 2 }}>
          <People sx={{ marginTop: "auto", marginBottom: "auto" }}></People>

          <Typography
            sx={{
              height: "fit-content",
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: 1,
            }}
            className="Button-name"
            variant="h6"
          >
            Users
          </Typography>
        </Box>
      </Box>
      <Box className="Buttons"  sx={{marginTop:1,cursor:"pointer",boxShadow:pop==4?8:0,backgroundColor:pop==4?"#e8eaf6":"#9fa8da"}} onClick={()=>{
        // #9fa8da
        setPop(4)
            navigate("/timesheet")
        }}>
        <Box className="Button-body" sx={{ marginLeft: 2 }}>
          <People sx={{ marginTop: "auto", marginBottom: "auto" }}></People>

          <Typography
            sx={{
              height: "fit-content",
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: 1,
            }}
            className="Button-name"
            variant="h6"
          >
            TimeSheet
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default SideBar;
