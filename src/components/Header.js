import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Email from './Email';
import { HTMLContent } from './Content';

const BrandTitle = styled.h1`
  margin: 0px 0px 7px 0px;
  color: rgba(0, 0, 0, 0.75);
  line-height: 1em;

  @media print {
    font-size: 35px;
  }
`;

const StyledPrintHeader = styled.header`
  display: none;

  @media print {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.9em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }

  p {
    margin: 0em 2em 0em 0em;
    font-size: 16px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  white-space: nowrap;
  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  & li {
    margin: 0;
    padding: 0;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

/**
 * Header that is only visible when page is printed.
 */
export const PrintHeader = ({ siteTitle, phone, url, address, about }) => (
  <StyledPrintHeader>
    <Column>
      <BrandTitle>{siteTitle}</BrandTitle>
      <HTMLContent content={about}></HTMLContent>
    </Column>
    <ContactInfo>
      <ul>
        <li>{phone}</li>
        <li>{address}</li>
        <li>
          <Email />
        </li>
        <li>
          <a href={url}>{url}</a>
        </li>
      </ul>
    </ContactInfo>
  </StyledPrintHeader>
);

PrintHeader.propTypes = {
  siteTitle: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string,
  url: PropTypes.string,
  about: PropTypes.string,
};

PrintHeader.defaultProps = {
  siteTitle: ``,
  phone: ``,
  address: ``,
  url: ``,
  about: ``,
};

const BrandLink = styled(Link)`
  display: none;

  @media only screen and (min-width: 768px) {
    display: initial;
  }

  :hover {
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.backgroundPrimary};
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
Nav.defaultProps = {
  theme: {
    backgroundPrimary: '#fff',
  },
};

const activeStyles = {
  fontWeight: '700',
};

/**
 * The site header and navbar - will not be visible when
 * page is printed.
 */
const Header = ({ siteTitle }) => (
  <header>
    <Nav>
      <Menu>
        <Link to={'/'} activeStyle={activeStyles}>
          About
        </Link>
        <Link to={'/work'} activeStyle={activeStyles}>
          Work
        </Link>
        <Link to={'/cv'} activeStyle={activeStyles}>
          CV
        </Link>
      </Menu>
      <BrandLink to="/">
        <BrandTitle>{siteTitle}</BrandTitle>
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
