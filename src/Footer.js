
import React from 'react'

const today = new Date();

const Footer = (props) => {
  return (
    <footer style={{
      bottom: 0,
      color: 'white',
      fontSize: 20,
      padding: 5,
      backgroundColor: 'blue',
      width: '100%'
      }}>
      <p>{props.length} List {props.length <= 1 ? 'item' : 'items'}</p>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer