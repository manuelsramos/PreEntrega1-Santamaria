import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const InterCart = () => {
    return (
        <>
            <Link to='/cart'><Button variant="dark"><h3>Cart</h3></Button></Link>
            <Link to='/'><Button variant="dark"><h3>Keep buying</h3></Button></Link>
        </>
    )
}

export default InterCart