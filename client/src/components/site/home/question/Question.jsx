import React from 'react'
import './Question.css'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {MenuItems}  from './MenuItems';

const Question = () => {
  return (
    <div>
        <div className='question'>
            <div className='qheader'>
                <div className='qcenter'>
                    <div className='margincenter'>
                        <h2>Question</h2>
                            {MenuItems.map((item, index) => {
                                return(
                                    <Accordion sx={{color: 'white', background: 'orange', marginBottom:2}}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    key={index}>
                                        <Typography variant="h6" sx={{ width: '33%', flexShrink: 0 ,color: 'white'}}>
                                            {item.tittle}
                                        </Typography>
                                        <Typography variant="div" sx={{ color: 'text.secondary', color: 'white' }}>
                                            {item.subtittle}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails  className='test'>
                                        <Typography variant="div">
                                            {item.details}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Question