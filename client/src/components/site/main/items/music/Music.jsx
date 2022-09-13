import React, { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';
import {  getAudio } from '../../../../functions';
import Loading from '../../../load/Loading'
import './Music.css'

const Music = () => {

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAudio();
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
  <div sx={{m:2}}>
    {loading ?(
          <Loading/>
        )
        :(
          <Box sx={{ width: '100%', marginTop:7, marginBottom:3 }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
          <ImageList  sx={{ m:5 }} cols={5} gap={8} className='imagelist'>
            {items.map(item => (
              <ImageListItem key={item._id}>
                <ImageListItemBar sx={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' + 'rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)',}} title={item.title} position="top"
                  actionIcon={
                    <a href={item.base64} download={item.title}>
                      <IconButton sx={{ color: 'white' }} aria-label={`star ${item.title}`}>
                        <DownloadIcon />
                      </IconButton>
                    </a>}
                actionPosition="left" />
                <img src={`${item.image}?auto=compress&cs=tinysrgb&dpr=1&w=500`}
                srcSet={`${item.image}?auto=compress&cs=tinysrgb&dpr=1&w=500`}
                alt={item.title} loading="lazy"/>
                <ImageListItemBar sx ={{ marginLeft:"auto", marginRight:"auto", display: 'block'}} position="below" 
                subtitle={
                  <span>
                    <audio controls>
                      <source src={item.base64} type="audio/ogg"/>
                      <source src={item.base64} type="audio/mpeg"/>
                    </audio>
                  </span> }/>
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

/*
  return (
    <div sx={{m:2}}>
        <ImageList  sx={{ m:5 }} cols={5} gap={8} className='imagelist'>
          {currentItems.map((music) => (
            <ImageListItem key={music.id}>
              <ImageListItemBar sx={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' + 'rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)',}} title={music.name} position="top"
                actionIcon={
                  <IconButton sx={{ color: 'white' }} aria-label={`star ${music.name}`}
                  onClick={(e) => download(music.src, music.name)}>
                    <DownloadIcon />
                  </IconButton>}
                  actionPosition="left" />
              <img src={`${url}?auto=compress&cs=tinysrgb&dpr=1&w=500`}
              srcSet={`${url}?auto=compress&cs=tinysrgb&dpr=1&w=500`}
              alt={music.name} loading="lazy"/>
              <ImageListItemBar sx ={{ marginLeft:"auto", marginRight:"auto", display: 'block'}} position="below" subtitle={<span><ReactAudioPlayer src={music.src}controls onPlay={e => console.log("onPlay")}/></span>} />
            </ImageListItem>
        ))}
        </ImageList>
    </div>
  )*/
}

export default Music