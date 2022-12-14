import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const ItemCount = () => {
    const [products, setProducts] = useState([])
    const [counter, setcounter] = useState(0)
    const [booleano, setBooleano] = useState(true)


    const handleCountMenos = () => {
        setcounter(counter - 1)
    }

    const handleCount = () => {
        setcounter(counter + 1)
        /* count++
        console.log(count) */
    }

    const handleBool = () => {
        setBooleano(!booleano)
        console.log(handleBool)
    }
    return (
        <>
            <center className="mt-5 border border-1 border-secondary p-3 rounded">

                <Button onClick={handleCountMenos} variant="secondary">-</Button>
                <label>{counter}</label>
                <Button onClick={handleCount} variant="secondary">+</Button>
                <br></br>
                <br></br>
                <Button onClick={handleBool} variant="dark"><h3>Add to the basket</h3></Button>
            </center>
        </>
    )
}
