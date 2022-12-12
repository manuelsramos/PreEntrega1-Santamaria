import React from 'react'
import './ItemListContainer.css'
import { ItemCount } from '../ItemCount/ItemCount';
import { products } from '../../helpers/gFetch';



export const ItemListContainer = ({ greetings }) => {

  return (
    <>
      <h3 className='text-primary'>{greetings}</h3>
      {products.map(product => <p key={product.id} >{product.name}</p>)}
      < ItemCount />
    </>
  )
}
