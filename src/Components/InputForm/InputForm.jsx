import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { useCartContext } from '../../Context/Cartcontext'
import { useState } from 'react';

const InputForm = () => {

    const { cartList, deleteCart, finalPrice, deleteItem } = useCartContext()

    const [dataForm, setDataForm] = useState({
        name: "",
        lastName: "",
        phone: "",
        email: "",
        confirmEmail: ""
    })


    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        }
        )
    }


    const createOrder = (evt) => {
        evt.preventDefault()

        const order = {}

        order.buyer = dataForm

        order.items = cartList.map(({ name, id, price }) => ({ name, id, price }))

        const datab = getFirestore()
        const queryOrder = collection(datab, 'orders')
        addDoc(queryOrder, order)
            .then(resp => console.log(resp))
    }



    return (
        <Form onSubmit={createOrder}>
            <Form.Group className="mb-3" controlId="formPeople">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' value={dataForm.name}
                    onChange={handleChange} placeholder="Enter your name" />
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name='lastName' value={dataForm.lastName}
                    onChange={handleChange} placeholder="Enter your Last Name" />
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" name='phone' value={dataForm.phone}
                    onChange={handleChange} placeholder="Enter your phone number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name='email' value={dataForm.email}
                    onChange={handleChange} placeholder="Email" />
                <Form.Label> Confirm Email</Form.Label>
                <Form.Control type="text" name='confirmEmail' value={dataForm.confirmEmail}
                    placeholder="Confirm your email" />
            </Form.Group>

            <center>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </center>
        </Form>
    )
}

export default InputForm