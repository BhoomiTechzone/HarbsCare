import React from 'react';
import { Typography } from '@mui/material';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const TopNavbar = () => {
  return (
    <div style={{backgroundColor: "#2B6111", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"5px 0.5rem"}}>
      <Typography sx={{color: "#fff", fontSize: "14px" }}>Welcome to Harbs Care</Typography>
      <Typography sx={{color: "#fff", fontSize: "14px"}}></Typography>
      <Typography sx={{color: "#fff", fontSize: "14px"}}>100% Ayurvedic</Typography>
    </div>
  )
}

export default TopNavbar;
