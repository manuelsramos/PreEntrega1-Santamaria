import { useState } from 'react'
import { useEffect } from 'react';
import React from 'react'
import './ItemListContainer.css'
import { ItemCount } from '../../Components/ItemCount/ItemCount';
import { gFetch } from '../../helpers/gFetch';
import ItemList from '../../Components/ItemList/ItemList';
import { useParams } from 'react-router-dom';


export const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()


  useEffect(() => {

    if (categoryId) {
      gFetch() //gFetch
        .then(result => setProducts(result.filter(product => product.category === categoryId)))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    } else {
      gFetch() //sgFetch
        .then(result => setProducts(result))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

    }
  }
    , [categoryId])

  console.log(categoryId)

  return (
    <>
      <h3 className='text-primary'>{greetings}</h3>
      {loading ? <h2>Loading pets ... </h2> : < ItemList products={products} />}

      < ItemCount />
    </>
  )
}
