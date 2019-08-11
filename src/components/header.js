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

const BrandTitle = styled.h1`
  margin: 0px 0px 7px 0px;
  color: rgba(0, 0, 0, 0.75);
  line-height: 1em;

  @media print {
    font-size: 35px;
  }
`;

const BrandText = styled.p`
  margin: 0em 2em 0em 0em;
  color: rgba(0, 0, 0, 0.75);
  font-size: 16px;
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

const StackBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const activeStyles = {
  fontWeight: "700"
}

const Header = ({ siteTitle }) => (
  <header>
    <PrintHeader>
      <StackBox>
        <BrandTitle>{siteTitle}</BrandTitle>
        <BrandText>I am a Swedish software developer that enjoys solving interesting problems with code both professionally and as a hobby. I have a great interest in new technologies and I am driven by building innovative solutions. My strengths lie in web technologies, .NET and computer graphics.</BrandText>
      </StackBox>
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
