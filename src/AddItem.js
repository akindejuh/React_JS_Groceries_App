import React from 'react'
import {useRef} from 'react'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form 
      className='addForm' 
      onClick={handleSubmit}
      style={{
        display: 'flex',
        width: '100%'
      }}
    >
        <input
          style={{
            height: 40,
            padding: 10,
            flexGrow: 1,
            fontSize: 17
          }} 
          autoFocus
          ref={inputRef}
          id='addItem'
          type='text'
          placeholder='Add Item'
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          type='submit'
          aria-label='Add Item'
          onClick={() => inputRef.current.focus()} 
          style={{
            width: 100,
            fontSize: 18
          }}>
          Add Item
        </button>
    </form>
  )
}

export default AddItem