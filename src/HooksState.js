import React from 'react'
import { useState } from 'react';
import ListItems from './ListItems';

const Content = ({items, handleChange, handleDelete}) => {

    const [name, setName] = useState('Gbenga');
    const handlenamechange = () => {
        const names = ['Gbenga', 'Kevin', 'Dave', 'Bob', 'Stuart']
        const num = Math.floor(Math.random() * 5)
        setName(names[num])
    }

    // localStorage.getItem('Groceries') ? setItems(JSON.parse(localStorage.getItem('Groceries'))) : setItems({items});

    return (
        <div style={{
            backgroundColor: 'wheat',
            fontSize: 22,
            color: 'black',
            width: '100%'
        }}>
            <p>Hello {name}!</p>
            <button 
                onClick={handlenamechange} 
                style={{
                    height: 45,
                    width: 140,
                    fontSize: 18,
                    marginTop: 5,
                    borderRadius: 10
                }}>
                {'Change Name'}
            </button>
            {items.length > 0 ? (
                <ListItems 
                    handleChange = {handleChange}
                    handleDelete = {handleDelete}
                    items = {items}
                />
            ) : <p style={{
                color: 'red',
            }}>Grocery List is Empty</p>}
        </div>
    )
}

export default Content;