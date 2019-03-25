import React from 'react';
import styled from 'styled-components';

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

const Footer = ({ children, author }) => (
  <Container>
    <span>© {new Date().getFullYear()} • {author}. All rights reserved.</span>
  </Container>
);

export default Footer;
