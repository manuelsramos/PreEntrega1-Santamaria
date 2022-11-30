import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = ({ greetings }) => {
  console.log(greetings)
  return (
    <div>
      <h3 className='text-primary'>{greetings}</h3>
    </div>
  )
}
