import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.footer`
  max-width: 960px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border-top: 1px solid ${({ theme }) => theme.borderSecondary};
  padding: 1rem;
  text-align: center;

  @media print {
    display: none !important;
  }
`;
Container.defaultProps = {
  theme: {
    backgroundPrimary: '#fff',
    borderSecondary: '#000',
  },
};

const Footer = ({ author }) => (
  <Container>
    <span>
      © {new Date().getFullYear()} • {author}. All rights reserved.
    </span>
  </Container>
);

Footer.propTypes = {
  author: PropTypes.string,
};

export default Footer;
