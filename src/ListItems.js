import React from 'react'
import LineItem from './LineItem';

const ListItems = ({items, handleChange, handleDelete}) => {
  return (
    <ul style={{
      width: '100%'
    }}>
       {items.map((item) => (
           <LineItem
            key={item.id}
            item = {item}
            handleChange = {handleChange}
            handleDelete = {handleDelete} 
           />
    ))} 
    </ul>
  )
}

export default ListItems;