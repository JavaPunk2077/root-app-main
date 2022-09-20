import React from 'react'
import './Create.css'
import create from '../../../../assets/pictures/Barner-Create.jpg'

const Create = () => {
  return (
        <div>
            <div className='create'>
                <div className='cheader'>
                    <div class="ccolumn">
                        <div className='center'>
                            <h2>Create</h2>
                            <div>xxxxxxxxxxxxxxxxxxxxxxx</div>
                        </div>
                    </div>
                    <div class="ccolumn">
                        <div className='center'>
                            <img src={create} className='createpic'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Create