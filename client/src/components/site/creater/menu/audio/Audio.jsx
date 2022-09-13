import React, { useEffect, useState } from 'react';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Loading from '../../../load/Loading';

const Audio = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [items, setItems] = useState([])
    const useremail = localStorage.getItem('email')
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 8080)
    }, [])
    
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    const getAudio = async()=> {
        const response = await fetch('http://localhost:4001/creater/post/audio' ,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: useremail,
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


  const removeOne = async(itemid) =>{
    const response = await fetch('http://localhost:4001/creater/delete' ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: itemid,
      })
    })
    const data = await response.json()
    try {
      if(data.status === "DELETE"){
        alert('Delete success')
        window.location.href = '/creater'
      }else{        
        alert('Delete Fail')
      window.location.href = '/creater'
    }
  } catch (error) {
      console.log(error)
  }
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAudio();
      console.log('fetch data;m', result)
      setItems(result)
    }
    fetchData()
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      {loading ?(
        <Loading/>
        )
        :(
      <Box sx={{ width: '100%', marginTop:7, marginBottom:3 }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <ImageList sx={{ width: '100%' }}>
            <ImageListItem key="Subheader" cols={3} gap={8} className='imagelist'>
              </ImageListItem>
              {items.map((item) => (
                <ImageListItem key={item._id}>
                <ImageListItemBar sx={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' + 'rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)',}} title={item.title} position="top"
                actionIcon={
                    <div>
                    <IconButton
                    sx={{ color: 'white' }}
                    aria-label={`star ${item.title}`}
                    aria-describedby={id} variant="contained" 
                    onClick={handleClick}
                    >
                      <DeleteIcon />
                    </IconButton>
                     <Popover id={id} open={open} anchorEl={anchorEl}
                     onClose={handleClose}
                     anchorOrigin={{vertical: 'center',horizontal: 'center',}}>
                       <Button variant="contained" size="large" 
                       onClick={(id) => removeOne(item.itemid)}>
                         Delete
                       </Button>
                     </Popover>
                     </div>}
                 actionPosition="left" />
                <img  src={`${item.image}?w=248&fit=crop&auto=format`}
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title} loading="lazy"/>
                <ImageListItemBar sx ={{ marginLeft:"auto", marginRight:"auto", display: 'block'}} position="below" 
                subtitle={
                <span>
                    <audio controls>
                        <source src={item.base64} type="audio/ogg"/>
                        <source src={item.base64} type="audio/mpeg"/>
                    </audio>
                </span>} />
                </ImageListItem>
        ))}
          </ImageList>
          <TablePagination
              rowsPerPageOptions={[40]}
              component="div"
              count={items.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
      </Box>
        )}
    </div>
  );
}

export default Audio