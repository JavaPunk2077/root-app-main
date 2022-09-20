import React, { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import DownloadIcon from '@mui/icons-material/Download';
import Base64Downloader from 'react-base64-downloader';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {  getImage } from '../../../../functions';
import Loading from '../../../load/Loading';
import TablePagination from '@mui/material/TablePagination';

const Items = () => {

  useEffect(() => {
    const fetchData = async () => {
      const result = await getImage();
      console.log('fetch data;m', result)
      setItems(result)
    }
    fetchData()
  }, [])

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8080)
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
        <ImageList  variant="masonry" cols={3} gap={8} className='imagelist'>
            {items?.map(item => (
                <ImageListItem variant="masonry" key={item._id}>
                <ImageListItemBar
                  sx={{
                    background:
                      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                  }}
                  position="top"
                  actionIcon={
                  <IconButton 
                  sx={{ color: 'white' }}>
                        <Base64Downloader base64={item.base64} downloadName={item.title} >
                          <DownloadIcon/>
                        </Base64Downloader>
                    </IconButton>
                  }
                  actionPosition="left"
                />
                   <img
                   sx={{minwidth: '50px', minHeight: '100px'}}
                   src={item.image}
                    srcSet={item.image}
                    alt={item.title}
                    loading="lazy"
                    className='regimg'
                   />
                    <ImageListItemBar
                    title={item.title}
                    subtitle={item.author}
                    actionIcon={
                      <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${item.title}`}
                        href={item.img} download={item.title}
                      >
                <InfoIcon />
              </IconButton>
            }
          />
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
        onRowsPerPageChange={handleChangeRowsPerPage}/>
        </Paper>
      </Box>
        )}
    </div>
  )
}

export default Items