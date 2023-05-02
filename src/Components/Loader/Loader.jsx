import React from 'react'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


export const Loader = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
            <Button variant="secondary" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="md"
                    role="status"
                    aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>
            </Button>{' '}

        </div>
    )
}

