import React from 'react'
import './Barner.css'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


const Barner = () => {
  return (
    <div>
    <div className='barner'>
      <div className='bheader'>
        <div className='bheaderText'>
          <div>
            <h1>Welcome to Shoppingsite</h1>
            <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search for free photo and videos or etc."
                inputProps={{ 'aria-label': 'search' }}/>
                    <IconButton sx={{ p: '10px' }} aria-label="send">
                        <SearchIcon />
                    </IconButton>
             </Paper>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default Barner