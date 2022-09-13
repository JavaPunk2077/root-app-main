import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../tool/navbar/Navbar'
import Register from '../../../assets/pictures/Register.jpg'
import Contributor from '../../../assets/pictures/Creater.jpg'
import './onBoard.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAuth0 } from '@auth0/auth0-react';

const onBoard = () => {

  return (
    <div>
        <Navbar/>
        <div className='onboard'>
            <div>
               <h1 className='oh2center'>What do you mainly want to do?</h1> 
            <div className='oheader'>
                <div className='ocolumn'>
                    <div className='ocenter'>
                    <Card sx={{ minWidth: 275 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={Register}
                            alt="green iguana"
                        />
                        <CardContent>
                            <div className='betpadding'>
                            <Typography component="div" sx={{ mb: 1.5 }} color="text.secondary">
                                I'm here to download free photos and videos and etc.
                            </Typography>
                            </div>
                        </CardContent>
                        <CardActions style={{justifyContent: 'center'}}>
                        <Link to="/register"><Button size="large"  sx={{ textTransform: 'none', justifyContent: 'center' }} variant="contained" className='buttonpadding' color='success'  fullWidth>I want to Register</Button></Link>
                        </CardActions>
                    </Card>
                    </div>
                </div>
                <div className='ocolumn'>
                    <div className='ocenter'>
                    <Card sx={{ minWidth: 275  }}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={Contributor}
                            alt="green iguana"
                        />
                        <CardContent>
                            <div className='betpadding'>
                            <Typography v component="div" sx={{ mb: 1.5 }} color="text.secondary">
                                I'm here to share my photos and videos with the world.
                            </Typography>
                            </div>
                        </CardContent>
                        <CardActions style={{justifyContent: 'center'}}>
                        <Link to="/contributor"><Button size="large" sx={{ textTransform: 'none' }} variant="contained" className='buttonpadding' color='success' >I want to Contribute</Button></Link>
                        </CardActions>
                    </Card>
                    </div>
                </div>
            </div>
        </div>
        </div>
            <div className='hint'>
                We’ll use this info to personalize your experience. You’ll always be able to both download and upload photos and videos, no matter which option you choose.
            </div>
    </div>
  )
}

export default onBoard