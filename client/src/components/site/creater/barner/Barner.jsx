import React from 'react'
import './Barner.css'
import Avatar from '@mui/material/Avatar';

const Barner = () => {
  const fname = localStorage.getItem('firstname')
  const lname =localStorage.getItem('lastname')
  return (
    <div>
    <div className='crbarner'>
      <div className='crheader'>
        <div className='crheaderText'>
        <div>
        <Avatar
        src="/static/images/avatar/1.jpg"
        sx={{ width: 250, height: 250 }}/>
        </div>
        <div classname="crname">
           {fname} &nbsp; {lname}
        </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default Barner