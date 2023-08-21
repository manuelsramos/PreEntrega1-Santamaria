import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './ItemCount.css'


export const ItemCount = ({ stock = 5, initial = 1, onAdd }) => {
    const [products, setProducts] = useState([])
    const [counter, setcounter] = useState(initial)


    const handleCountMenos = () => {
        if (counter > 1) { setcounter(counter - 1) }
    }

    const handleCount = () => {
        if (counter < stock) {
            setcounter(counter + 1)
        }
    }

    const handleOnAdd = () => onAdd(counter);

    return (
        <>
            <center className="mt-5 border border-1 border-secondary p-3 rounded">

                <Button className='counterButton' onClick={handleCountMenos} variant="secondary">-</Button>
                <label><h3 className='counterNumber'>{counter}</h3></label>
                <Button onClick={handleCount} variant="secondary">+</Button>
                <br></br>
                <br></br>
                <Button className='counterButton' onClick={handleOnAdd} variant="dark"><h2 style={{ fontSize: '25px' }}>Add to the Cart</h2></Button>
            </center>
        </>
    )
}
