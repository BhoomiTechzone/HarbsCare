import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import "./Navbar.css";
import { Link } from 'react-router-dom';
// import { red } from '@mui/material/colors';



const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'transparent',
    color: 'rgba(0, 0, 0, 1)',
  },
}));


const SubNavbar = () => {
  return (
    <nav className='subnavbar'>
      <HtmlTooltip>
        <Link to='/'>
          <Button sx={{color:'#58A321', marginRight:'10px'}} >HOME</Button>
        </Link>
      </HtmlTooltip>

      <HtmlTooltip
        title={
          <Card sx={{ minWidth: 375 }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px solid #58A321' }}>
              <Box>
                <Typography sx={{ fontSize: 16 }} component="div">
                  View
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
              </Box>
              <div style={{ width: "0.5px", backgroundColor: "gray" }}></div>
              <Box>
                <Typography color={"#58A321"} sx={{ fontSize: 16 }} component="div">
                  BEAUTY
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
              </Box>
              <div style={{ width: "0.5px", height: "30px", backgroundColor: "gray" }}></div>
              <Box>
                <Typography sx={{ color: "#58A321", cursor: "pointer" }}>
                  See All
                </Typography>
              </Box>
            </CardContent>
          </Card>
        }
      >
        <Button sx={{color:'#58A321', marginRight:'10px'}}>BEAUTY</Button>
      </HtmlTooltip>

      <HtmlTooltip
        title={
          <Card sx={{ minWidth: 375 }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px solid #58A321' }}>
              <Box>
                <Typography sx={{ fontSize: 16 }} component="div">
                  View
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
              </Box>
              <div style={{ width: "0.5px", backgroundColor: "gray" }}></div>
              <Box>
                <Typography color={"#58A321"} sx={{ fontSize: 16 }} component="div">
                  BEAUTY
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
              </Box>
              <div style={{ width: "0.5px", height: "30px", backgroundColor: "gray" }}></div>
              <Box>
                <Typography sx={{ color: "#58A321", cursor: "pointer" }}>
                  See All
                </Typography>
              </Box>
            </CardContent>
          </Card>
        }
      >
        <Button sx={{color:'#58A321', marginRight:'10px'}} >HAIR</Button>
      </HtmlTooltip>

      <HtmlTooltip
        title={
          <Card sx={{ minWidth: 375 }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px solid #58A321' }}>
              <Box>
                <Typography sx={{ fontSize: 16 }} component="div">
                  View
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
              </Box>
              <div style={{ width: "0.5px", backgroundColor: "gray" }}></div>
              <Box>
                <Typography color={"#58A321"} sx={{ fontSize: 16 }} component="div">
                  Medicine
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
              </Box>
              <div style={{ width: "0.5px", height: "30px", backgroundColor: "gray" }}></div>
              <Box>
                <Typography sx={{ color: "#58A321", cursor: "pointer" }}>
                  See All
                </Typography>
              </Box>
            </CardContent>
          </Card>
        }
      >
        <Button sx={{color:'#58A321', marginRight:'10px'}} >MEDICINE</Button>
      </HtmlTooltip>

      <HtmlTooltip
        title={
          <Card sx={{ minWidth: 375 }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px solid #58A321' }}>
              <Box>
                <Typography sx={{ fontSize: 16 }} component="div">
                  View
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
              </Box>
              <div style={{ width: "0.5px", backgroundColor: "gray" }}></div>
              <Box>
                <Typography color={"#58A321"} sx={{ fontSize: 16 }} component="div">
                  BEAUTY
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
              </Box>
              <div style={{ width: "0.5px", height: "30px", backgroundColor: "gray" }}></div>
              <Box>
                <Typography sx={{ color: "#58A321", cursor: "pointer" }}>
                  See All
                </Typography>
              </Box>
            </CardContent>
          </Card>
        }
      >
        <Button sx={{color:'#58A321', marginRight:'10px'}} >BABY</Button>
      </HtmlTooltip>

      <HtmlTooltip>
        <Link to='/about'>
          <Button sx={{color:'#58A321', marginRight:'10px'}} >ABOUT</Button>
        </Link>
      </HtmlTooltip>

      <HtmlTooltip
        title={
          <Card sx={{ minWidth: 375 }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px solid #58A321' }}>
              <Box>
                <Typography sx={{ fontSize: 16 }} component="div">
                  View
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
              </Box>
              <div style={{ width: "0.5px", backgroundColor: "gray" }}></div>
              <Box>
                <Typography color={"#58A321"} sx={{ fontSize: 16 }} component="div">
                  BEAUTY
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word Day
                </Typography>
              </Box>
              <div style={{ width: "0.5px", height: "30px", backgroundColor: "gray" }}></div>
              <Box>
                <Typography sx={{ color: "#58A321", cursor: "pointer" }}>
                  See All
                </Typography>
              </Box>
            </CardContent>
          </Card>
        }
      >
        <Button sx={{color:'#58A321', marginRight:'10px'}} >BLOG</Button>
      </HtmlTooltip>

      <HtmlTooltip>
        <Link to='/contact'>
          <Button sx={{color:'#58A321', marginRight:'10px'}} >CONTACT</Button>
        </Link>
      </HtmlTooltip>

    </nav>
  )
}

export default SubNavbar;









