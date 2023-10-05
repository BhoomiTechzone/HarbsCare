import { Dialog, Box, TextField, Button, Typography, styled } from '@mui/material';
import React, { useState } from 'react';

const Component = styled(Box)`
   height: 70vh;
   width: 90vh;
`;

const Image = styled(Box)`
    background: #0dd url(https://raw.githubusercontent.com/Bhi2710/Image/main/android-icon-144x144.png) center 85% no-repeat;
    height: 100%;
    width: 40%;
    padding: 45px 35px;
    & > p, & > h4{
      color: #ffffff;
    }
`;

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div, & > button, & > p{
        margin-top: 25px;
    }
`;

const LoginButton = styled(Button)`
    background: #2B6111;
    color: #fff;
    height: 48px;
    font-weight: bold;
`;

const accountIntitialValues = {
    login: {
        view: "login",
        heading: "Login",
        subHeading: "Get Login to Harbs Care Pvt. Ltd."
    },
    signup: {
        view: "signup",
        heading: "Signup",
        subHeading: "Sign up with your Email to get started"
    },
}

const Login = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(accountIntitialValues.login);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountIntitialValues.login);
    }

    const toggleSignup = () => {
        toggleAccount(accountIntitialValues.signup);
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>

                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant='h4'>{account.heading}</Typography>
                        <Typography>{account.subHeading}</Typography>
                    </Image>
                    {
                        account.view === 'login' ?
                            <Wrapper>
                                <TextField variant='standard' label="Enter Email" />
                                <TextField variant='standard' label="Enter password" type='password' />
                                <Typography style={{ fontSize: 'small' }}>By continuing you agree to Bhoomi Techzone Pvt. Ltd. Teams of Use and Privacy Policy.</Typography>
                                <LoginButton>Login</LoginButton>
                                <Typography style={{ textAlign: 'center' }}>OR</Typography>
                                <Typography style={{ textAlign: 'center', fontSize: "15px", color: "green", cursor: "pointer" }} onClick={() => toggleSignup()}>Create New Account ?</Typography>
                            </Wrapper>
                            :
                            <Wrapper>
                                <TextField variant='standard' label="Enter Firstname" />
                                <TextField variant='standard' label="Enter Lastname" />
                                <TextField variant='standard' label="Enter Username" />
                                <TextField variant='standard' label="Enter Email" />
                                <TextField variant='standard' label="Enter Phone" />
                                <LoginButton>Continue</LoginButton>
                            </Wrapper>
                    }

                </Box>
            </Component>
        </Dialog>
    )
}

export default Login;