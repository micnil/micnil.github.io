import React, { useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PostHeader from './PostHeader';
import WorkContent from './WorkContent';

const StyledPost = styled.article`
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

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const ColumnWithSpaceBetween = styled(Column)`
  justify-content: space-between;
  flex: 2;
`;

function Excerpt({
  title,
  content,
  thumbnail,
  tags,
  onClickReadMore,
  startYear,
}) {
  return (
    <Column>
      <PostHeader title={title} tags={tags} year={startYear} />
      <Row>
        <ColumnWithSpaceBetween>
          <WorkContent content={content} />
          <ToggleReadMore onClick={onClickReadMore}>Read more</ToggleReadMore>
        </ColumnWithSpaceBetween>
        {thumbnail && (
          <Img style={{ flex: '1' }} fluid={thumbnail.childImageSharp.fluid} />
        )}
      </Row>
    </Column>
  );
}

const Post = ({filePath, title, tags, year, content, excerpt, thumbnail}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <StyledPost key={filePath}>
      {readMore ? (
        <>
          <PostHeader
            title={title}
            tags={tags}
            year={year}
          />
          <WorkContent content={content} />
          <ToggleReadMore
            onClick={() => setReadMore(false)}
          >
            Read less
          </ToggleReadMore>
        </>
      ) : (
        <Excerpt
          title={title}
          content={excerpt}
          thumbnail={thumbnail}
          tags={tags}
          startYear={year}
          onClickReadMore={() => setReadMore(true)}
        />
      )}
    </StyledPost>
  );
};

export default Post;