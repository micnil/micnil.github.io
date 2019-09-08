import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import { SectionWithoutYear, SectionWithYear } from '../components/cv/Section';

const CvPage = ({ data }) => {
  let cvMap = {};
  let listMap = {};
  for (const edge of data.allMarkdownRemark.edges) {
    let mapToUpdate = edge.node.frontmatter.type === 'list' ? listMap : cvMap;
    const section = edge.node.frontmatter.section;
    const entry = {
      ...edge.node.frontmatter,
      content: edge.node.html,
      filePath: edge.node.fileAbsolutePath,
    };
    mapToUpdate[section] = mapToUpdate[section] || [];
    mapToUpdate[section] = [...mapToUpdate[section], entry];
  }

  const sections = Object.entries(cvMap).map(([section, entries]) => (
    <SectionWithYear key={section} section={section} entries={entries} />
  ));

  const lists = Object.entries(listMap).map(([section, entries]) => (
    <SectionWithoutYear key={section} section={section} entries={entries} />
  ));

  return (
    <Layout>
      <SEO title="CV" keywords={['portfolio', 'cv']} />
      {sections}
      {lists}
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
            type
          }
          fileAbsolutePath
          html
        }
      }
    }
  }
`;

export default CvPage;
