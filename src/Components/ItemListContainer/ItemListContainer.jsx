import { useState } from 'react'
import { useEffect } from 'react';
import React from 'react'
import './ItemListContainer.css'
import { ItemCount } from '../ItemCount/ItemCount';
import { gFetch } from '../../helpers/gFetch';
import ItemList from '../ItemList/ItemList';



export const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    gFetch() //gFetch
      .then(result => setProducts(result))
      .finally(() => setLoading(false))
  }
    , [])


  return (
    <>
      <h3 className='text-primary'>{greetings}</h3>
      {loading ? <h2>Loading pets ... </h2> : < ItemList products={products} />}

      < ItemCount />
    </>
  )
}
