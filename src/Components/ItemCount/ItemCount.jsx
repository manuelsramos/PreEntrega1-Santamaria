import { useState } from 'react'
import { useEffect } from 'react';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { gFetch } from '../../helpers/gFetch';


export const ItemCount = () => {
    const [products, setProducts] = useState([])
    const [counter, setcounter] = useState(0)
    const [booleano, setBooleano] = useState(true)


    useEffect(() => {
        gFetch() //gFetch
            .then(result => setProducts(result))
    }
        , [])


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
                <Row>
                    <Col><Button onClick={handleCountMenos} variant="info">-</Button> </Col>
                    <Col>{counter} </Col>
                    <Col><Button onClick={handleCount} variant="info">+</Button> </Col>
                </Row>
                <Col><Button onClick={handleBool} variant="light"><h3>Booleano</h3></Button> </Col>
            </center>
        </>
    )
}
