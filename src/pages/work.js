import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import { HTMLContent } from '../components/Content';

const Post = styled.article``;

const WorkPage = ({ data }) => {

  const posts = data.allMarkdownRemark.edges.map(node => {
    
  });

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
      sort: { fields: frontmatter___start, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            start
            tags
          }
          fileAbsolutePath
          html
        }
      }
    }
  }
`;

export default WorkPage;
