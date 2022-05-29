import React from 'react'

const headerstyle = {
  color: 'white', 
  fontSize: '15px', 
  fontWeight: 'bold',
  backgroundColor: 'blue',
  width: '100%', 
} 

const Header = (props) => {
  return (
    <header  style={headerstyle}>
        <h1>{props.title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Grocery List"
}

export default Header