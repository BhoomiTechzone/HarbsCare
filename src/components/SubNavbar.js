import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import "./Navbar.css";


const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#fff',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    borderTop: '3px solid #198754',
  },
}));



const SubNavbar = () => {
  return (
    <nav className='subnavbar'>
      <HtmlTooltip>
        <Button>HOME</Button>
      </HtmlTooltip>

      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">BEAUTY</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
        <Button>BEAUTY</Button>
      </HtmlTooltip>

      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">HAIR</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
        <Button>HAIR</Button>
      </HtmlTooltip>

      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">MEDICINE</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
        <Button>MEDICINE</Button>
      </HtmlTooltip>

      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">BABY</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
        <Button>BABY</Button>
      </HtmlTooltip>

      <HtmlTooltip>
        <Button>ABOUT</Button>
      </HtmlTooltip>

      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">BLOG</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
        <Button>BLOG</Button>
      </HtmlTooltip>

      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">CONTACT</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
        <Button>CONTACT</Button>
      </HtmlTooltip>

    </nav>
  )
}

export default SubNavbar;




