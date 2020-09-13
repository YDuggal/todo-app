import React from 'react';

const headerStyle = {
  background: '#EDF7F6',
  color: '#555',
  textAlign: 'center',
  padding: '10px',
}

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
    </header>
  )
}

export default Header;