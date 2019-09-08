import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../utils/theme';

import Header, { PrintHeader } from './Header';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    height: 100%;
    background-color: ${({ theme }) => theme.backgroundSecondary || '#fff'};
  }
`;

const PageContainer = styled.main`
  width: 100%;
  max-width: 960px;
  margin: auto;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  overflow: hidden;
`;
PageContainer.defaultProps = { theme: { backgroundPrimary: '#fff' } };

const Layout = ({ children }) => {
  const { site, markdownRemark } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            phone
            address
            url
          }
        }
        markdownRemark(frontmatter: { key: { eq: "about-me" } }) {
          html
        }
      }
    `
  );
  const { phone, title, address, url } = site.siteMetadata;
  const about = markdownRemark.html;
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header siteTitle={title} />
        <PrintHeader
          siteTitle={title}
          phone={phone}
          address={address}
          url={url}
          about={about}
        />
        <PageContainer>{children}</PageContainer>
        <Footer author={site.siteMetadata.author} />
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
