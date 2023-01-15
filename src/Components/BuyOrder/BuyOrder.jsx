import React from 'react'
import Alert from 'react-bootstrap/Alert';
import { FcOk } from "react-icons/fc";

import './BuyOrder.css'




const BuyOrder = ({ id }) => {


    return (
        <>
            {[
                'secondary'
            ].map((variant) => (
                <div className='buyorderdiv'><Alert key={variant} variant={variant}>
                    Your order
                    <br></br>
                    #{id}
                    <br></br>
                    Has been made SUCCESSFULLY!
                </Alert>
                    <FcOk className='buyicon' />

                </div>
            ))}
        </>
    )
}

export default BuyOrder