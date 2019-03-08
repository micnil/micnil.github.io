import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const BrandLink = styled(Link)`
  display: none;

  @media only screen and (min-width: 768px) {
    display: initial;
  }

  :hover {
    text-decoration: none;
  }
`;

const BrandText = styled.h1`
  margin: 0px;
  color: rgba(0, 0, 0, 0.75);
  line-height: 1em;
`;

const Nav = styled.nav`
  background-color: rgb(255, 255, 255);
  max-width: 960px;
  display: flex;
  margin: auto;
  padding: 1rem;
  justify-content: space-evenly;
  align-items: flex-end;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

const activeStyles = {
  fontWeight: "700"
}

const Header = ({ siteTitle }) => (
  <header>
    <Nav>
      <Menu>
        <Link to={'/'} activeStyle={activeStyles}>About</Link>
        <Link to={'/work'} activeStyle={activeStyles}>Work</Link>
        <Link to={'/cv'} activeStyle={activeStyles}>CV</Link>
      </Menu>
      <BrandLink to="/">
        <BrandText>{siteTitle}</BrandText>
      </BrandLink>
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
