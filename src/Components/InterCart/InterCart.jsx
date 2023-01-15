import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './InterCart.css'


const InterCart = () => {
    return (
        <div className='divInterCart'>
            <Link to='/cart'><Button className='cartbutton' variant="dark"><h3>Cart</h3></Button></Link>
            <Link to='/'><Button className='keepbutton' variant="dark"><h3>Keep buying</h3></Button></Link>
        </div>
    )
}

export default InterCart