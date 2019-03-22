import React from 'react';
import { graphql } from 'gatsby'
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import { HTMLContent } from '../components/Content';

const CvSection = styled.section`
  padding: 0.9em;

  h2 {
    text-transform: capitalize;
  }

  @media only screen and (min-width: 768px) {
    padding: 1.5em;
  }
`;

const CvRow = styled.div`
  display: flex;
`;

const CvYear = styled.div`
  flex: 1;
  border-right: 1px solid;
  color: #8c8c8c;
`;

const CvEntry = styled(HTMLContent)`
  flex: 4;
  padding-left: 0.5em;
  & p {
    margin-bottom: 0px;
  }
`;

const CvPage = ({ data }) => {
  let cvMap = {};
  for (const edge of data.allMarkdownRemark.edges) {
    let section = edge.node.frontmatter.section;

    cvMap[section] = cvMap[section] || [];
    cvMap[section] = [...cvMap[section], edge.node];
  }
  const sections = Object.entries(cvMap).map(([section, nodes]) => {
    const rows = nodes.map(node => {
      let endYear = null;
      if (!node.frontmatter.end) {
        endYear = '- current';
      } else if (node.frontmatter.end !== node.frontmatter.start) {
        endYear = `- ${node.frontmatter.end}`;
      }

      return (
        <CvRow key={node.fileAbsolutePath}>
          <CvYear>
            {node.frontmatter.start}
            {endYear}
          </CvYear>
          <CvEntry content={node.html} />
        </CvRow>
      );
    });

    return (
      <CvSection key={section}>
        <h2>{section}</h2>
        {rows}
      </CvSection>
    );
  });

  return (
    <Layout>
      <SEO title="Home" keywords={['portfolio', 'cv']} />
      {sections}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { key: { eq: "cv" } } }
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

export default CvPage;
