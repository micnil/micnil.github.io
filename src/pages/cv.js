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
    @media print {
      font-size: 22px;
      margin-bottom: 0.5em;
    }
  }

  @media print {
    padding: 0em 0.9em 1.7em 0.9em;
    page-break-inside: avoid;
    :last-child {
      padding: 0em;
    }
    :first-child {
      margin-top: 1.0em;
    }
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
  border-right: 1px solid rgba(0, 0, 0, 0.15);;
  color: #8c8c8c;

  @media print {
    font-size: 15px;
  }
`;

const CvEntry = styled(HTMLContent)`
  flex: 5;
  padding-left: 0.5em;
  & p {
    margin-bottom: 0px;
  }
  & li {
    margin-bottom: 0px;
  }

  @media print {
    flex: 6;
    & p {
      font-size: 16px;
    }
    & li {
      font-size: 16px;
    }
    & a {
      text-decoration: inherit; 
      color: inherit;
      font-weight: inherit;
    }
  }
`;

function compareDates(a, b) {
  if(!a.end) {
    return -1;
  }
  if(!b.end) {
    return 1;
  }
  return a.end !== b.end ? b.end - a.end : b.start - a.start;
}

function sectionEntryRenderer(entry) {
  let endYear = null;
    if (!entry.end) {
      endYear = '- Present';
    } else if (entry.end !== entry.start) {
      endYear = `- ${entry.end}`;
    }
    return (
      <CvRow key={entry.filePath}>
        <CvYear>
          {entry.start}
          {endYear}
        </CvYear>
        <CvEntry content={entry.content} />
      </CvRow>
    );
}

function listEntryRenderer(entry) {
    return (
      <CvEntry key={entry.filePath} content={entry.content} />
    );
}

const Section = ({section, entries, entryRenderer}) => {
  const rows = entries.sort(compareDates).map(entry => {
    return entryRenderer(entry);
  });

  return (
    <CvSection key={section}>
      <h2>{section}</h2>
      {rows}
    </CvSection>
  );
}

const CvPage = ({ data }) => {
  let cvMap = {};
  let listMap = {};
  for (const edge of data.allMarkdownRemark.edges) {
    let mapToUpdate = edge.node.frontmatter.type === "list" ? listMap : cvMap
    const section = edge.node.frontmatter.section;
    const entry = {
      ...edge.node.frontmatter,
      content: edge.node.html,
      filePath: edge.node.fileAbsolutePath,
    }
    mapToUpdate[section] = mapToUpdate[section] || [];
    mapToUpdate[section] = [...mapToUpdate[section], entry];
  }

  const sections = Object.entries(cvMap)
    .map(([section, entries]) => (
      <Section 
        key={section}
        section={section}
        entries={entries}
        entryRenderer={sectionEntryRenderer}/>
    ));

  const lists = Object.entries(listMap)
    .map(([section, entries]) => (
      <Section 
        key={section}
        section={section}
        entries={entries}
        entryRenderer={listEntryRenderer}/>
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
