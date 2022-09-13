import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { saveAs } from 'file-saver';
import Navbar from '../../tool/navbar/Navbar'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';
import TextField from '@mui/material/TextField';
import './Register.css'


const Register = () => {

    const navigate = useNavigate()

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const type = "REGISTER";

    const register = async (e) =>{
      e.preventDefault();
      const response = await fetch('http://localhost:4000/register' ,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          password,
          type
        })
      })
      const data =await response.json()
      if(data.user){
        if(data.status === 'OK'){
          alert('Create new register.')
          localStorage.setItem('token', data.user.token)
          localStorage.setItem('firstname', data.user.fname)
          localStorage.setItem('lastname', data.user.lname)
          localStorage.setItem('email', data.user.email)
          window.location.href = '/main'
        }
      }else if(data.status === 'SAME'){
        alert('Your firstname or lastname is same another user.')
        navigate('/register', { replace: true })
      }
      console.log(data)
    };

    const itemData = [
        {
          img: 'https://images.pexels.com/photos/11095794/pexels-photo-11095794.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          title: 'Cloud',
        },
        {
          img: 'https://images.pexels.com/photos/11189048/pexels-photo-11189048.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          title: 'Coffee-time',
        },
        {
          img: 'https://images.pexels.com/photos/11485895/pexels-photo-11485895.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          title: 'Grandpera',
        },
        {
          img: 'https://images.pexels.com/photos/4460483/pexels-photo-4460483.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          title: 'Town',
        },
        {
          img: 'https://images.pexels.com/photos/4893864/pexels-photo-4893864.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          title: 'Think',
        },
        {
          img: 'https://images.pexels.com/photos/6481652/pexels-photo-6481652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          title: 'River',
        }
      ];
      

  return (
    <div>
        <Navbar/>
            <div className='register'>
                <div className='rheader'>
                    <div className='rcolumn'>
                            <Card sx={{ width: 500, height: 660 , margin: 'auto'}}>
                                <CardContent>
                                    <Typography sx={{fontSize:36, textAlign: 'center', padding:1.2 , fontWeight: 'bold'}} variant="h1" component="h1"> Let's join us</Typography>
                                    <Typography sx={{textAlign: 'center', padding:0.35 }} variant="div" component="div"> Download free photos and videos powered  </Typography>
                                    <Typography sx={{textAlign: 'center', padding:0.35}} variant="div" component="div"> by a community of photographers. </Typography>
                                    <Box component="form" sx={{'& > :not(style)': { m: 1}}} noValidate autoComplete="off">
                                        <TextField label="Fristname" sx={{ width: '25ch'}}  type="text" onChange={(e) => setFname(e.target.value)}/>
                                        <TextField label="Lastname" sx={{ width: '25ch'}}  type="text" onChange={(e) => setLname(e.target.value)}/>
                                        <TextField label="Email" sx={{ width: '52ch'}}  type="email" onChange={(e) => setEmail(e.target.value)}/>
                                        <TextField label="Password" sx={{ width: '52ch'}} type="password" onChange={(e) => setPassword(e.target.value)}/>
                                    </Box>
                                </CardContent>
                                <CardActions>
                                        <Button sx={{ textTransform: 'none', background : '#42b936' , justifyContent: 'center'}} variant="contained" className='buttonpadding' color='success' type='submit' onClick={(e) => register(e)} fullWidth>Create new account</Button>
                                </CardActions>
                                <CardContent>
                                    <Typography sx={{fontSize:16, textAlign: 'center', padding:0.8}} variant="h5" component="h5">OR</Typography>
                                    <Stack spacing={1} sx={{ m: 0.7 }}>
                                            <Button sx={{ color: 'White', textTransform: 'none', background: '#4267B2' }} color = "info" variant="contained" fullWidth> <FacebookIcon className='facebook'/> Facebook</Button>
                                            <Button sx={{ color: 'White', textTransform: 'none', background: '#1DA1F2' }} color = "primary" svariant="contained" fullWidth> <TwitterIcon className='twitter'/> Twitter</Button>
                                            <Button sx={{ color: 'White', textTransform: 'none', background: '#A2AAAD' }} color = "inherit" variant="contained" fullWidth> <AppleIcon className='apple'/> Apple</Button>
                                    </Stack>
                                </CardContent>
                            </Card>
                    </div>
                    <div className='rcolumn'>
                        <div className='rcenter'>
                            <ImageList sx={{ width: 450, height: 660 }} variant="woven" cols={3} gap={8} className='imagelist'>
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=161&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                        className='regimg'
                                    />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Register