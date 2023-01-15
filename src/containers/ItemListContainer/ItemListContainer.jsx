import { useState, useEffect } from 'react'
import React from 'react'
import ItemList from '../../Components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { Loader } from '../../Components/Loader/Loader';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


export const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()


  useEffect(() => {

    if (categoryId) {
      const datab = getFirestore()
      const queryCollection = collection(datab, 'productos',)
      const queryFilter = query(queryCollection, where('category', '==', categoryId))

      getDocs(queryFilter)
        .then(resp => setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

    } else {
      const datab = getFirestore()
      const queryCollection = collection(datab, 'productos')

      getDocs(queryCollection)
        .then(resp => setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() })))) /* En este caso, dejamos las llaves y envolvemos en parentesis para que mantenga el retorno implicito.Por mas que trabajemos con un array * / */
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

    }
  }
    , [categoryId])


  return (
    <>
      <h3 className='text-dark'>{greetings}</h3>
      {loading
        ? <Loader />
        : <Container>
          <Row>
            < ItemList products={products} />
          </Row>
        </Container>
      }
    </>
  )
}
