import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const Container = styled.footer`
  max-width: 960px;
  margin-right: auto;
  margin-left: auto;
  background-color: rgb(255, 255, 255);
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  padding: 1rem;
  text-align: center;

  @media print {
    display: none !important;
  }
`;

const Footer = ({ author }) => (
  <Container>
    <span>© {new Date().getFullYear()} • {author}. All rights reserved.</span>
  </Container>
);

Footer.propTypes = {
  author: PropTypes.string
}

export default Footer;
