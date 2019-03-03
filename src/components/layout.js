import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    height: 100%;
    background-color: rgb(242, 242, 242);
  }
`;

const PageContainer = styled.main`
  width: 100%;
  max-width: 960px;
  margin-right: auto;
  margin-left: auto;
  min-height: 640px;
  background-color: rgb(255, 255, 255);
`;

const Layout = ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title,
            author
          }
        }
      }
    `
  );
  return (
    <>
      <Header siteTitle={site.siteMetadata.title} />
      <PageContainer>{children}</PageContainer>
      <Footer author={site.siteMetadata.author}></Footer>
      <GlobalStyle />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
