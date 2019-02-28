import React from 'react'
import styled from 'styled-components'

const MenuItems = styled.div`
  & ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
  }

  & a {
    color: #444;
    text-decoration: none; 
    font-size: 1.1rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`

export const MenuItem = styled.li`
  padding: 0 0.5rem;
`

const Menu = ({ children }) => (
  <MenuItems>
    <ul>
      {React.Children.map(children, child => (
        <MenuItem> {child} </MenuItem>
      ))}
    </ul>
  </MenuItems>
)

export default Menu
