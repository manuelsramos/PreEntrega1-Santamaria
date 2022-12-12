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
            <center>

                <Button onClick={handleCountMenos} variant="info">-</Button>
                {counter}
                <Button onClick={handleCount} variant="info">+</Button>
                <br></br>
                <br></br>
                <Button onClick={handleBool} variant="light"><h3>Add to the basket</h3></Button>
            </center>
        </>
    )
}
