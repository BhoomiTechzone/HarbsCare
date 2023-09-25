import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import Description from './Description';


const Footer = () => {

  return (
    <Box sx={{m: '2rem 0px'}}>
      <Box sx={{ display: 'flex', justifyContent:'space-around', border:'1px solid #ededed'}}>
        <Stack sx={{p:'1rem'}}>
          <Box sx={{fontSize: '18px', fontWeight:'bold'}}>USEFULL LINKS</Box>
          <Box>Privacy Policy</Box>
          <Box>Returns</Box>
          <Box>Terms & Conditions</Box>
          <Box>Terms & Conditions-Cashback</Box>
          <Box>FAQs</Box>
          <Box>We're Safe</Box>
          <Box>Track Order</Box>
          <Box>Contact Us</Box>
          <Box>Sitemap</Box>
          <Box>About Us</Box>
        </Stack>
        <Stack sx={{p:'1rem'}}>
          <Box sx={{fontSize: '18px', fontWeight:'bold'}} >CATEGORIES</Box>
          <Box>Body</Box>
          <Box>Beauty</Box>
          <Box>Hair</Box>
          <Box>Face</Box>
          <Box>Body</Box>
          <Box>Makeup</Box>
          <Box>Ingredient</Box>
          <Box>Gift Pack</Box>
        </Stack>
        <Stack sx={{p:'1rem'}}>
          <Box sx={{fontSize: '18px', fontWeight:'bold'}}>MY ACCOUNT</Box>
          <Box>Account</Box>
          <Box>Order</Box>
          <Box>Addresses</Box>
        </Stack>
      </Box>


      <Box sx={{ display: 'flex', justifyContent:'center', p:'2rem', border:'1px solid #ededed'}}>
        <Stack>
          <Box sx={{fontSize: '20px'}}>SHOW US SOME {<FavoriteIcon sx={{color:'#FF0000', fontSize:'32px'}} />} ON SOCIAL MEDIA</Box>
          <Box sx={{display: 'flex', justifyContent: 'space-evenly', mt: '1rem'}}>
            <FacebookIcon fontSize='large' sx={{color:"#58A321"}} />
            <InstagramIcon fontSize='large' sx={{color:"#58A321"}} />
            <LinkedInIcon fontSize='large' sx={{color:"#58A321"}} />
            <YouTubeIcon fontSize='large' sx={{color:"#58A321"}} />
            <TwitterIcon fontSize='large' sx={{color:"#58A321"}} />
          </Box>
        </Stack>
      </Box>

      <Box sx={{ display: 'flex', justifyContent:'center', p:'2rem', border:'1px solid #ededed'}}>
        <Stack>
          <Box sx={{fontSize: '16px'}}>© 2023 Harbs Care Limited. All Rights Reserved</Box>
        </Stack>
      </Box>
      <Description />
    </Box>
  )
}

export default Footer;


