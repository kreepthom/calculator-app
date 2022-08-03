import React from 'react'
import { buttonsData } from '../buttonsData'
import './buttons.css'

const Buttons = ({ numbers, setNumbers, setResult, handlerAddBoolean, resultTotal }) => {


    const DeleteNumbers = (e) => {
        e.preventDefault()
        setNumbers(numbers.slice(0, -1))
    }

    const resetNumbers = (e) => {
        e.preventDefault()
        setNumbers('')
        setResult('')
    }

    const Button = ({ name, classname, onClick }) => (
        <button
            name={`${name}`}
            className={classname}
            onClick={onClick}
        >{name === '*' ? 'x' : name}</button>
    )

    const ValidOnclick = (name) => {
        if (name === 'reset') return resetNumbers
        if (name === '=') return resultTotal
        if (name === 'DEL') return DeleteNumbers
        return handlerAddBoolean
    }

    return (
        <div className='buttons'>

            {
                buttonsData.map(({ name, classname }) => (
                    <Button key={name} name={name} classname={classname} onClick={ValidOnclick(name)} />
                ))
            }

        </div>

    )
}

export default Buttons