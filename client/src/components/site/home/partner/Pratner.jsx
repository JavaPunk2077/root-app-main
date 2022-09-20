import React from 'react'
import './Partner.css'
import partner from '../../../../assets/pictures/Barner-Partner.jpg'

const Pratner = () => {
  return (
    <div>
        <div className='partner'>
            <div className='pheader'>
                <div class="pcolumn">
                    <div className='pcenter'>
                        <img src={partner} className='partpic'/>
                    </div>
                </div>
                <div class="pcolumn">
                    <div className='pcenter'>
                        <h2>Partner</h2>
                        <div>xxxxxxxxxxxxxxxxxxxxxxx</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pratner