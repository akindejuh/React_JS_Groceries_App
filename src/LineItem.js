import React from 'react'

const LineItem = ({item, handleChange, handleDelete}) => {
  return (
    <li className='item' style={{
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
        display: 'flex',
        paddingLeft: 5,
        paddingRight: 5,
        width: '100%'
    }}> 
            <input 
                type={'checkbox'} 
                checked={item.checked} 
                onChange={() => 
                    handleChange(item.id)
                }
                style={{
                    height: 40,
                    width: 40,
                }}
            />
            <label 
            onDoubleClick={() => handleChange(item.id)} 
            style={{
                flexGrow: 1,
                textAlign: 'left',
                marginLeft: 5,
            }}>
                {`name: ${item.item}, price: $${item.price}`}</label>
            <button
            onClick={() => handleDelete(item.id)} 
            style={{
                justifySelf: 'flex-end',
                width: 80,
                fontSize: 18,
                borderRadius: 8
            }}>{'Delete'}</button>
        </li>
  )
}

export default LineItem