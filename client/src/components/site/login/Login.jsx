import React , {useState, useRef, useEffect } from 'react'
import './Login.css'
import Alert from '@mui/material/Alert';
import { Link , useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Navbar from '../../tool/navbar/Navbar'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        facebook: {
        // Purple and green play nicely together.
        main: '#4267B2',
      },
      twitter: {
        // This is green.A700 as hex.
        main: '#1DA1F2',
      },
      apple: {
        // This is green.A700 as hex.
        main: '	#A2AAAD',
      },
    },
  });


const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/login' ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      })
    })
    const data =await response.json()
    if(data.user.token){
      if(data.user.type === "REGISTER"){
        localStorage.setItem('token', data.user.token)
        localStorage.setItem('firstname', data.user.fname)
        localStorage.setItem('lastname', data.user.lname)
        localStorage.setItem('email', data.user.email)
        alert('Login success')
        window.location.href = '/main'
      }
      else if(data.user.type ==="CONTRIBUTOR"){
        localStorage.setItem('token', data.user.token)
        localStorage.setItem('firstname', data.user.fname)
        localStorage.setItem('lastname', data.user.lname)
        localStorage.setItem('email', data.user.email)
        alert('Login success')
        window.location.href = '/creater'
      }
    }else if(data.data.type === 'ERROR'){ 
      alert('Please check Your email or password')
      navigate('/login', { replace: true })
    }
  };

  return (
    <>
        <Navbar/>     
        <div className='login'>
            <div className='lheader'>
                <div className='lbackground'>
                    <Card sx={{ minWidth: 800}}>
                        <CardContent>
                            <Typography sx={{ fontSize: 30 , fontWeight: 'bold' , fontFamily: 'Oswald'}} variant="h1"  component="div" className='tittlecenter' >
                            Welcome to Root
                            </Typography>
                            <Box sx={{ m: 0.5 }}>
                                <TextField id="email" label="Email" variant="outlined" margin="normal" helperText="Please enter your email" type="email" value={email}   onChange={(e) => setEmail(e.target.value)} required fullWidth />
                                <TextField id="password" label="Password" variant="outlined" margin="normal" helperText="Please enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required fullWidth />
                            </Box>
                            <Button type="submit" sx={{ textTransform: 'none' }} variant="contained" className='buttonpadding' color='success' onClick={(e) => login(e)} fullWidth>Login</Button>
                            <Typography variant="body2" sx={{ fontWeight: 'light' , textAlign: 'left'  }}>
                               <Link to="/" className='forgotpadding'>forgot password?</Link>
                            </Typography>
                            <Typography variant="subtitle2" sx={{ fontWeight: 'Medium' , textAlign: 'center' }}  className='orpadding'>
                                    OR
                            </Typography>
                            <Stack spacing={2} sx={{ m: 0.7 }}>
                                <ThemeProvider theme={theme}>
                                    <Button  sx={{ color: 'secondary.contrastText', textTransform: 'none' }} variant="contained" color="facebook"> <FacebookIcon className='facebook'/> Facebook</Button>
                                    <Button  sx={{ color: 'secondary.contrastText', textTransform: 'none' }} variant="contained" color="twitter"> <TwitterIcon className='twitter'/> Twitter</Button>
                                    <Button  sx={{ color: 'secondary.contrastText', textTransform: 'none' }} variant="contained" color="apple" clasName='textwhite'> <AppleIcon className='apple'/> Apple</Button>
                                </ThemeProvider>
                            </Stack>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login