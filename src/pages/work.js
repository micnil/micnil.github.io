import React, { useReducer } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
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

const Header = styled.header`
  display: flex;
  justify-content: space-between;
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

const Tag = styled.span`
  color: #888;
  text-transform: uppercase;
  font-style: italic;
  font-size: 0.8em;
`;

const WorkContent = styled(HTMLContent)`
  margin-top: 0.5em;
  
  /* Image caption */
  a + em { display: block; text-align: center;}

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

const TagList = ({ children }) => (
  <div style={{}}>
    {children.map((tag, i) => (
      <Tag key={tag}>
        {tag}
        {i < children.length - 1 && ',  '}
      </Tag>
    ))}
  </div>
);

function PostHeader({ title, tags, year }) {
  return (
    <>
      <Header>
        <h3 style={{ marginBottom: '0em' }}>{title}</h3>
        <TagList>{tags}</TagList>
      </Header>
      <em style={{ color: '#888' }}>Started: {year}</em>
    </>
  );
}

function Excerpt({
  title,
  content,
  thumbnail,
  tags,
  onClickReadMore,
  startYear,
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <PostHeader title={title} tags={tags} year={startYear} />
      <div style={{ display: 'flex' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: '2',
          }}
        >
          <WorkContent content={content} />
          <ToggleReadMore onClick={onClickReadMore}>Read more</ToggleReadMore>
        </div>
        {thumbnail && (
          <Img style={{ flex: '1' }} fluid={thumbnail.childImageSharp.fluid} />
        )}
      </div>
    </div>
  );
}

const WorkPage = ({ data }) => {
  const [state, dispatch] = useReducer(reducer, {});

  const posts = data.allMarkdownRemark.edges.map(edge => {
    const { node } = edge;
    return (
      <Post key={node.fileAbsolutePath}>
        {state[node.fileAbsolutePath] ? (
          <>
            <PostHeader
              title={node.frontmatter.title}
              tags={node.frontmatter.tags}
              year={node.frontmatter.start}
            />
            <WorkContent content={node.html} />
            <ToggleReadMore
              onClick={() =>
                dispatch({ type: 'readLess', payload: node.fileAbsolutePath })
              }
            >
              Read less
            </ToggleReadMore>
          </>
        ) : (
          <Excerpt
            title={node.frontmatter.title}
            content={node.excerpt}
            thumbnail={node.frontmatter.thumbnail}
            tags={node.frontmatter.tags}
            startYear={node.frontmatter.start}
            onClickReadMore={() =>
              dispatch({ type: 'readMore', payload: node.fileAbsolutePath })
            }
          />
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
