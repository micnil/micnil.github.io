import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';

const Brand = styled(Link)`
  color: rgba(0, 0, 0, 0.85);
  line-height: 1em;
  :hover {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.85);
  }
`;

const Nav = styled.nav`
  width: 960px;
  display: flex;
  margin: auto;
  padding: 1rem;
  justify-content: space-evenly;
  align-items: flex-end;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

const Header = ({ siteTitle }) => (
  <header>
    <Nav>
      <Menu>
        <Link to={'/'}>About</Link>
        <Link to={'/projects'}>Projects</Link>
        <Link to={'/cv'}>CV</Link>
      </Menu>
      <Brand to="/">
        <h2 style={{ margin: '0px' }}>{siteTitle}</h2>
      </Brand>
    </Nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
