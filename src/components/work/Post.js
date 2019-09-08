import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PostHeader from './PostHeader';
import WorkContent from './WorkContent';
import Excerpt from './Excerpt';
import BorderlessButton from '../BorderlessButton';

const StyledPost = styled.article`
  border-top: 1px solid rgba(25, 17, 34, 0.075);
  padding: 1em;

  @media only screen and (min-width: 768px) {
    margin: 2em;
    border-radius: 4px;
    box-shadow: rgba(25, 17, 34, 0.075) 0px 3px 10px;
  }
`;

const Post = ({ title, tags, year, content, excerpt, thumbnail }) => {
  const [readMore, setReadMore] = useState(false);
  const postElement = useRef(null);
  return (
    <StyledPost ref={postElement}>
      {readMore ? (
        <>
          <PostHeader title={title} tags={tags} year={year} />
          <WorkContent content={content} />
          <BorderlessButton
            onClick={() => {
              setReadMore(false);
              postElement.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Read less
          </BorderlessButton>
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

Post.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  excerpt: PropTypes.string,
  thumbnail: PropTypes.object,
  tags: PropTypes.arrayOf(PropTypes.string),
  year: PropTypes.number,
};

export default Post;
