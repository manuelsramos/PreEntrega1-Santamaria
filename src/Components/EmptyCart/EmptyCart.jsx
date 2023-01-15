import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { HiArrowDown } from "react-icons/hi";


import './EmptyCart.css'



const EmptyCart = () => {


    return (
        <div className='divempty'>
            <h1 className='emptytext'> Empty Cart, you haven't buy anything!</h1>
            <HiArrowDown className='emptyicon' />

            <br></br>

            <Link to='/'><Button className='emptybutton' variant="dark"><h3 className='buttontext'> H o m e </h3></Button></Link>

        </div>
    )
}

export default EmptyCart