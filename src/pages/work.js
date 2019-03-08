import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import { HTMLContent } from '../components/Content';

const WorkPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={['portfolio', 'work', 'projects']} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "work" } } }
      sort: { fields: frontmatter___end, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            start
            end
            section
          }
          fileAbsolutePath
          html
        }
      }
    }
  }
`;

export default WorkPage;
