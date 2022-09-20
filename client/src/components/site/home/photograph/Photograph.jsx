import React from 'react'
import './Photograph.css'
import photograph from '../../../../assets/pictures/Barner-Photograph.jpg'

const Photograph = () => {
  return (
    <div>
        <div className='photograph'>
            <div className='phheader'>
                <div class="phcolumn">
                    <div className='phcenter'>
                        <h2>Photograph</h2>
                        <div>xxxxxxxxxxxxxxxxxxxxxxx</div>
                    </div>
                </div>
                <div class="phcolumn">
                    <div className='phcenter'>
                        <img src={photograph} className='photopic'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Photograph