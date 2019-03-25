import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Email from './Email';

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

  @media print {
    font-size: 35px;
  }
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

  @media print {
    display: none !important;
  }
`;

const PrintHeader = styled.div`
  display: none;

  @media print {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  & li {
    margin:0;
    padding:0;
  }
`;

const activeStyles = {
  fontWeight: "700"
}

const Header = ({ siteTitle }) => (
  <header>
    <PrintHeader>
      <BrandText>{siteTitle}</BrandText>
      <ContactInfo>
        <ul>
          <li>+46 704 25 3993</li>
          <li>Storgatan 6, 582 23 Linköping</li>
          <li><Email /></li>
          <li><a href="https://nilsson.dev">https://nilsson.dev</a></li>
        </ul>
      </ContactInfo>
    </PrintHeader>
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
