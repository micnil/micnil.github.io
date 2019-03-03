import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './Header';

const PageContainer = styled.main`
  width: 100%;
  max-width: 960px;
  margin-right: auto;
  margin-left: auto;
`;

const Layout = ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <>
      <Header siteTitle={site.siteMetadata.title} />
      <PageContainer>
        {children}
      </PageContainer>
      <footer>© {new Date().getFullYear()}</footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
