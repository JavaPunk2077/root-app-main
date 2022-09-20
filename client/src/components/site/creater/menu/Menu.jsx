import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Image from './image/Image';
import Audio from './audio/Audio';
import Video from './video/Vedio';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import FileBase64 from 'react-file-base64';
import './Menu.css' 

const Menu = () => {

   const [type, setType] = React.useState('Image');
   const [title, setTitle] = useState('');
   const [base, setBase] = useState(null);
   const [images, setImages] = useState([])
   const [audios, setAudios] = useState([])
   const [videos, setVideos] = useState([])
   const [typeitem, setTypeitem] = useState('Image');
   const email = localStorage.getItem('email')

    const handleChange = async (e) => {
        e.preventDefault();
        setType(e.target.value);
    };

    const getImage = async()=> {
      const response = await fetch('http://localhost:4001/creater/post/image' ,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          type: 'Image',
        })
      })
      try {
        const data = await response.json()
          return data
    } catch (error) {
        console.log(error)
    }
    };

    const getAudio = async()=> {
      const response = await fetch('http://localhost:4001/creater/post/audio' ,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          type: 'Audio',
        })
      })
      try {
        const data = await response.json()
          return data
    } catch (error) {
        console.log(error)
    }
    };

    const getVideo = async()=> {
      const response = await fetch('http://localhost:4001/creater/post/video' ,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          type: 'Video',
        })
      })
      try {
        const data = await response.json()
          return data
    } catch (error) {
        console.log(error)
    }
    };

    useEffect(() => {
      const fetchData = async () => {
        const resultI = await getImage();
        const resultA = await getAudio();
        const resultV = await getVideo();
        setImages(resultI)
        setAudios(resultA)
        setVideos(resultV)
      }
      fetchData()
    }, [])

    const additem = async (e) => {
      e.preventDefault();
      const response = await fetch('http://localhost:4001/creater/item' ,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          base,
          typeitem,
          email
        })
      })
      const data =await response.json()
      if(data.status === 'Sucsess'){
          alert('Add sucsess')
          window.location.href = '/creater'
      }
      else{
          alert('Add fail')
          console.log(data.error)
          window.location.href = '/creater'
      }
    };

  if(type === 'Image'){
    return (
      <div>
         <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static" sx={{background: '#ff421c'}}>
                <Toolbar>
                  <Typography sx={{m:1}}>Picture :</Typography>
                  <Badge sx={{m:1}} badgeContent={images.length} color="success"/>
                  <Typography sx={{m:1}}>Audio :</Typography>
                  <Badge sx={{m:1}} badgeContent={audios.length} color="success"/>
                  <Typography sx={{m:1}}>Video :</Typography>
                  <Badge sx={{m:1}} badgeContent={videos.length} color="success"/>
                  <Typography sx={{ flexGrow: 1 }}/>
                    <ButtonGroup variant="text" sx={{ mr: 2 }}>
                      <Button sx={{ color: 'white'}} value={'Image'} onClick={(e) => handleChange(e)}>Image</Button>
                      <Button sx={{ color: 'white'}} value={'Video'} onClick={(e) => handleChange(e)}>Video</Button>
                      <Button sx={{ color: 'white'}} value={'Audio'} onClick={(e) => handleChange(e)}>Audio</Button>
                    </ButtonGroup>
                    <Popup trigger={
                      <Button variant="contained" sx={{width: '150px'}}>
                        ADD
                      </Button>} modal  nested>    
                        {close => (      
                          <div className="modal">        
                            <button className="close" onClick={close}>          
                              &times;        
                            </button>        
                            <div className="menu-header"> 
                               ADD Item
                            </div>        
                            <div className="content">  
                              <Box sx={{ m:3 }}>
                                <div>    
                                  <label for="title">Title:&nbsp;</label>            
                                  <input className='margin' onChange={(e) => setTitle(e.target.value)} type='text'/>
                                </div>
                                <div>                
                                  <FileBase64
                                  className='margin'
                                  class="from-control"
                                  multiple={ false }
                                  onDone={({base64}) => setBase(base64)} />
                                </div>
                                <FormControl className='margin' sx={{width: '7.5%'}}>
                                  <InputLabel sx={{marginTop:2}}>Type</InputLabel>
                                    <Select sx={{width: '150px', marginTop:2, marginBottom:2}} value={typeitem} onChange={(e) => setTypeitem(e.target.value)}>
                                      <MenuItem value={"Image"}>Image</MenuItem>
                                      <MenuItem value={"Audio"}>Audio</MenuItem>
                                      <MenuItem value={"Video"}>Video</MenuItem>
                                    </Select>
                                </FormControl>
                                  <Stack className='margin'  direction="row">
                                    <Button type="submit" sx={{ textTransform: 'none', marginRight:2 }} onClick={(e) => additem(e)} variant="contained">Submit</Button>
                                    <Button type="submit" sx={{ textTransform: 'none' }}  onClick={() => {close();}} color='error' variant="contained">Cancel</Button>
                                    </Stack>
                              </Box>         
                            </div>           
                          </div>)}  
                    </Popup>
                  </Toolbar>
              </AppBar>
            </Box>
          <Image/>
      </div>
    );
}

if(type === 'Audio'){
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{background: '#ff421c'}}>
              <Toolbar>
                <Typography sx={{m:1}}>Picture :</Typography>
                <Badge sx={{m:1}} badgeContent={images.length} color="success"/>
                <Typography sx={{m:1}}>Audio :</Typography>
                <Badge sx={{m:1}} badgeContent={audios.length} color="success"/>
                <Typography sx={{m:1}}>Video :</Typography>
                <Badge sx={{m:1}} badgeContent={videos.length} color="success"/>
                <Typography sx={{ flexGrow: 1 }}/>
                  <ButtonGroup variant="text" sx={{ mr: 2 }}>
                    <Button sx={{ color: 'white'}} value={'Image'} onClick={(e) => handleChange(e)}>Image</Button>
                    <Button sx={{ color: 'white'}} value={'Video'} onClick={(e) => handleChange(e)}>Video</Button>
                    <Button sx={{ color: 'white'}} value={'Audio'} onClick={(e) => handleChange(e)}>Audio</Button>
                  </ButtonGroup>
                  <Popup trigger={
                    <Button variant="contained" sx={{width: '150px'}}>
                      ADD
                    </Button>} modal  nested>    
                      {close => (      
                        <div className="modal">        
                          <button className="close" onClick={close}>          
                            &times;        
                          </button>        
                          <div className="menu-header"> 
                             ADD Item
                          </div>        
                          <div className="content">  
                            <Box sx={{ m:3 }}>
                              <div>    
                                <label for="title">Title:&nbsp;</label>            
                                <input className='margin' onChange={(e) => setTitle(e.target.value)} type='text'/>
                              </div>
                              <div>                
                                <FileBase64
                                className='margin'
                                class="from-control"
                                multiple={ false }
                                onDone={({base64}) => setBase(base64)} />
                              </div>
                              <FormControl className='margin' sx={{width: '7.5%'}}>
                                <InputLabel sx={{marginTop:2}}>Type</InputLabel>
                                  <Select sx={{width: '150px', marginTop:2, marginBottom:2}} value={typeitem} onChange={(e) => setTypeitem(e.target.value)}>
                                    <MenuItem value={"Image"}>Image</MenuItem>
                                    <MenuItem value={"Audio"}>Audio</MenuItem>
                                    <MenuItem value={"Video"}>Video</MenuItem>
                                  </Select>
                              </FormControl>
                                <Stack className='margin'  direction="row">
                                  <Button type="submit" sx={{ textTransform: 'none', marginRight:2 }} onClick={(e) => additem(e)} variant="contained">Submit</Button>
                                  <Button type="submit" sx={{ textTransform: 'none' }}  onClick={() => {close();}} color='error' variant="contained">Cancel</Button>
                                  </Stack>
                            </Box>         
                          </div>           
                        </div>)}  
                  </Popup>
                </Toolbar>
            </AppBar>
          </Box>
        <Audio/>
    </div>
  );
}

if(type === 'Video'){
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{background: '#ff421c'}}>
              <Toolbar>
                <Typography sx={{m:1}}>Picture :</Typography>
                <Badge sx={{m:1}} badgeContent={images.length} color="success"/>
                <Typography sx={{m:1}}>Audio :</Typography>
                <Badge sx={{m:1}} badgeContent={audios.length} color="success"/>
                <Typography sx={{m:1}}>Video :</Typography>
                <Badge sx={{m:1}} badgeContent={videos.length} color="success"/>
                <Typography sx={{ flexGrow: 1 }}/>
                  <ButtonGroup variant="text" sx={{ mr: 2 }}>
                    <Button sx={{ color: 'white'}} value={'Image'} onClick={(e) => handleChange(e)}>Image</Button>
                    <Button sx={{ color: 'white'}} value={'Video'} onClick={(e) => handleChange(e)}>Video</Button>
                    <Button sx={{ color: 'white'}} value={'Audio'} onClick={(e) => handleChange(e)}>Audio</Button>
                  </ButtonGroup>
                  <Popup trigger={
                    <Button variant="contained" sx={{width: '150px'}}>
                      ADD
                    </Button>} modal  nested>    
                      {close => (      
                        <div className="modal">        
                          <button className="close" onClick={close}>          
                            &times;        
                          </button>        
                          <div className="menu-header"> 
                             ADD Item
                          </div>        
                          <div className="content">  
                            <Box sx={{ m:3 }}>
                              <div>    
                                <label for="title">Title:&nbsp;</label>            
                                <input className='margin' onChange={(e) => setTitle(e.target.value)} type='text'/>
                              </div>
                              <div>                
                                <FileBase64
                                className='margin'
                                class="from-control"
                                multiple={ false }
                                onDone={({base64}) => setBase(base64)} />
                              </div>
                              <FormControl className='margin' sx={{width: '7.5%'}}>
                                <InputLabel sx={{marginTop:2}}>Type</InputLabel>
                                  <Select sx={{width: '150px', marginTop:2, marginBottom:2}} value={typeitem} onChange={(e) => setTypeitem(e.target.value)}>
                                    <MenuItem value={"Image"}>Image</MenuItem>
                                    <MenuItem value={"Audio"}>Audio</MenuItem>
                                    <MenuItem value={"Video"}>Video</MenuItem>
                                  </Select>
                              </FormControl>
                                <Stack className='margin'  direction="row">
                                  <Button type="submit" sx={{ textTransform: 'none', marginRight:2 }} onClick={(e) => additem(e)} variant="contained">Submit</Button>
                                  <Button type="submit" sx={{ textTransform: 'none' }}  onClick={() => {close();}} color='error' variant="contained">Cancel</Button>
                                  </Stack>
                            </Box>         
                          </div>           
                        </div>)}  
                  </Popup>
                </Toolbar>
            </AppBar>
          </Box>
        <Video/>
    </div>
  );
}
}

export default Menu