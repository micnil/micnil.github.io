import React from 'react';
import styled from 'styled-components';

const Tag = styled.span`
color: #888;
text-transform: uppercase;
font-style: italic;
font-size: 0.8em;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h3 {
    margin-bottom: 0em;
  }
`;

const Subtitle = styled.em`
  color: #888;
`;

const TagList = ({ children }) => (
  <div>
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
        <h3>{title}</h3>
        <TagList>{tags}</TagList>
      </Header>
      <Subtitle>Started: {year}</Subtitle>
    </>
  );
}

export default PostHeader;