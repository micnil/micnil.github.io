import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Post from '../components/work/Post';

const PageHeader = styled.div`
  margin: 2em;
`

const WorkPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(edge => {
    const { node } = edge;
    return (
      <Post 
        key={node.fileAbsolutePath}
        filePath={node.fileAbsolutePath}
        title={node.frontmatter.title}
        tags={node.frontmatter.tags}
        year={node.frontmatter.start}
        content={node.html}
        excerpt={node.excerpt}
        thumbnail={node.frontmatter.thumbnail}/>
    );
  });

  return (
    <Layout>
      <SEO title="Work" keywords={['portfolio', 'work', 'projects']} />
      <PageHeader>
        <h4> Presenting a selection of projects I am, or have been, working on.</h4>
      </PageHeader>
      {posts}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "work" } } }
      sort: { fields: [frontmatter___start, frontmatter___title], order: [DESC, DESC] }
    ) {
      edges {
        node {
          frontmatter {
            title
            start
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fileAbsolutePath
          html
          excerpt(format: HTML)
        }
      }
    }
  }
`;

export default WorkPage;
