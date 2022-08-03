import React from 'react'
import './showInput.css'

const ShowInput = ({ handlerAddBoolean, numbers, result }) => {

    return (
        <div className='output'>
            <input
                className='input'
                type='text'
                value={numbers.length > 0 ? numbers : result}
                onChange={handlerAddBoolean}
            />
        </div>
    )
}

export default ShowInput