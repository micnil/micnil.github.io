import React, { useReducer } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import { HTMLContent } from '../components/Content';

const Post = styled.article`
  margin: 1em;
  border-radius: 4px;
  box-shadow: rgba(25, 17, 34, 0.075) 0px 3px 10px;
  padding: 1em;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    padding 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  :hover {
    transform: translateY(-4px);
    box-shadow: rgba(25, 17, 34, 0.1) 0px 10px 42px;
  }

  @media only screen and (min-width: 768px) {
    margin: 2em;
  }
`;

const ToggleReadMore = styled.span`
  font-weight: 400;
  color: #419eda;
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: #2a6496;
    text-decoration: underline;
  }
`;

function reducer(state, action) {
  switch (action.type) {
    case 'readMore':
      return { ...state, ...{ [action.payload]: true } };
    case 'readLess':
      return { ...state, ...{ [action.payload]: false } };
    default:
      throw new Error(`Not a valid action type ${action.type}`);
  }
}

const WorkPage = ({ data }) => {
  const [state, dispatch] = useReducer(reducer, {});

  const posts = data.allMarkdownRemark.edges.map(edge => {
    const { node } = edge;

    return (
      <Post key={node.fileAbsolutePath}>
        {state[node.fileAbsolutePath] ? (
          <>
            <HTMLContent content={node.html} />
            <ToggleReadMore
              onClick={() =>
                dispatch({ type: 'readLess', payload: node.fileAbsolutePath })
              }
            >
              Read less
            </ToggleReadMore>
          </>
        ) : (
          <>
            <HTMLContent content={node.excerpt} />
            <ToggleReadMore
              onClick={() =>
                dispatch({ type: 'readMore', payload: node.fileAbsolutePath })
              }
            >
              Read more
            </ToggleReadMore>
          </>
        )}
      </Post>
    );
  });

  return (
    <Layout>
      <SEO title="Home" keywords={['portfolio', 'work', 'projects']} />
      {posts}
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
          excerpt(format: HTML)
        }
      }
    }
  }
`;

export default WorkPage;
