import React from 'react'
import Alert from 'react-bootstrap/Alert';



export const NoIdComponent = () => {
    return (
        <>
            {[
                'danger'
            ].map((variant) => (
                <Alert key={variant} variant={variant}>
                    ERROR! The id you provide, don't exist!
                </Alert>
            ))}
        </>
    );
}

export default NoIdComponent;

