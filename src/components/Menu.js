import React from 'react';
import styled from 'styled-components';

const MenuItems = styled.div`
  & ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
  }

  & a {
    color: ${({ theme }) => theme.textNeutral};
    text-decoration: none;
    vertical-align: bottom;

    :hover {
      text-decoration: none;
      color: ${({ theme }) => theme.textAccent};
    }
  }

  text-transform: uppercase;
  letter-spacing: 0.2em;
  display: flex;
  font-size: 0.8rem;
  font-weight: 700;
`;

export const MenuItem = styled.li`
  padding: 0 0.8rem;
  margin-bottom: 0;
`;
MenuItems.defaultProps = {
  theme: {
    textAccent: 'teal',
    textNeutral: '#444',
  },
};

const Menu = ({ children }) => (
  <MenuItems>
    <ul>
      {React.Children.map(children, (child, index) => (
        <>
          <MenuItem>{child}</MenuItem>
          {React.Children.count(children) > index + 1 && (
            <span style={{ fontStyle: 'italic', userSelect: 'none' }}>/</span>
          )}
        </>
      ))}
    </ul>
  </MenuItems>
);

export default Menu;
