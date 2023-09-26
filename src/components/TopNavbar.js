import React from 'react';
import { Typography } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const TopNavbar = () => {
  return (
    <div style={{backgroundColor: "red", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"5px 2rem"}}>
      <Typography sx={{color: "#fff", fontSize: "14px"}}>India' 1st Brand with MADE SAFE Certified Products</Typography>
      <Typography sx={{color: "#fff", fontSize: "14px"}}>OMG Sale is Live | Buy 1 Get 1 FREE | Coupon:OMG | Click To Shop</Typography>
      <Typography sx={{color: "#fff", fontSize: "14px"}}><PersonOutlineOutlinedIcon /></Typography>
    </div>
  )
}

export default TopNavbar;
