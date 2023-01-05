import { Box, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import "./AdminHome.css";
import SideBar from "../SideBar/SideBar";
function AdminHome() {
  return (
    <Box sx={{ width: "100%" }} className="AdminHome">
      <SideBar></SideBar>
      <Box
        className="Admin-home-body"
        sx={{ width: "80%",height:"100vh", backgroundColor: "#e8eaf6" }}
      >
        <Box className="outlet" sx={{borderRadius:2 }}>
          <Outlet></Outlet>
        </Box>
      </Box>
    </Box>
  );
}

export default AdminHome;
