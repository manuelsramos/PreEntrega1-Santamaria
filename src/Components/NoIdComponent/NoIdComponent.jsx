import React from 'react'
import Alert from 'react-bootstrap/Alert';



export const NoIdComponent = () => {
    return (
        <>
            {[
                'danger'
            ].map((variant) => (
                <Alert key={variant} variant={variant}>
                    Error! The id you provice, don't exist!
                </Alert>
            ))}
        </>
    );
}

export default NoIdComponent;

