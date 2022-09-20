import React from 'react'
import AppBar from '@mui/material/AppBar';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NativeSelect from '@mui/material/NativeSelect';
import FormControl from '@mui/material/FormControl';
import Music from './music/Music';
import Image from './image/Image'
import Video from './video/Vedio'

const Items = () => {
    const [type, setType] = React.useState('image');

    const handleChange = (event) => {
        event.preventDefault();
        setType(event.target.value);
    };

if (type === 'image') {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background: '#ff421c'}}>
        <Toolbar>
        <Paper component="form" sx={{mr: 2 , p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
        </IconButton>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <InputBase
                sx={{ m: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
        </Paper>
        <Typography sx={{ flexGrow: 1 }}/>
      <FormControl  sx={{ flexGrow: 0.2, m: 1 }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native"  id="demo-simple-select-label">Type</InputLabel>
        <NativeSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="type"
          onChange={handleChange}>
          <option value={'image'}>Image</option>
          <option value={'audio'}>Audio</option>
          <option value={'video'}>Video</option>
        </NativeSelect>
      </FormControl>
        </Toolbar>
      </AppBar>
      <Image/>
    </Box>
  )
}

if (type === 'audio') {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background: '#ff421c'}}>
        <Toolbar>
        <Paper component="form" sx={{mr: 2 , p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
        </IconButton>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <InputBase
                sx={{ m: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
        </Paper>
        <Typography sx={{ flexGrow: 1 }}/>
        <ButtonGroup variant="text" sx={{ mr: 2 }}>
            <Button sx={{ color: 'white'}}>One</Button>
            <Button sx={{ color: 'white'}}>Two</Button>
            <Button sx={{ color: 'white'}}>Three</Button>
      </ButtonGroup>
      <FormControl  sx={{ flexGrow: 0.2, m: 1 }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native"  id="demo-simple-select-label">Type</InputLabel>
        <NativeSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="type"
          onChange={handleChange}>
          <option value={'image'}>Image</option>
          <option value={'audio'}>Audio</option>
          <option value={'video'}>Video</option>
        </NativeSelect>
      </FormControl>
        </Toolbar>
      </AppBar>
    <Music/>
    </Box>
  )
}

if (type === 'video') {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background: '#ff421c'}}>
        <Toolbar>
        <Paper component="form" sx={{mr: 2 , p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
        </IconButton>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <InputBase
                sx={{ m: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
        </Paper>
        <Typography sx={{ flexGrow: 1 }}/>
        <ButtonGroup variant="text" sx={{ mr: 2 }}>
            <Button sx={{ color: 'white'}}>One</Button>
            <Button sx={{ color: 'white'}}>Two</Button>
            <Button sx={{ color: 'white'}}>Three</Button>
      </ButtonGroup>
      <FormControl  sx={{ flexGrow: 0.2, m: 1 }}>
        <InputLabel variant="standard" htmlFor="uncontrolled-native"  id="demo-simple-select-label">Type</InputLabel>
        <NativeSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="type"
          onChange={handleChange}>
          <option value={'image'}>Image</option>
          <option value={'audio'}>Audio</option>
          <option value={'video'}>Video</option>
        </NativeSelect>
      </FormControl>
        </Toolbar>
      </AppBar>
      <Video/>
    </Box>
  )
}
}

export default Items