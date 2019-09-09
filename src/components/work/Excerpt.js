import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import WorkContent from './WorkContent';
import BorderlessButton from '../BorderlessButton';

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
          <BorderlessButton onClick={onClickReadMore}>
            Read more
          </BorderlessButton>
        </ColumnWithSpaceBetween>
        {thumbnail && (
          <Img style={{ flex: '1' }} fluid={thumbnail.childImageSharp.fluid} />
        )}
      </Row>
    </Column>
  );
}

Excerpt.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  thumbnail: PropTypes.object,
  tags: PropTypes.arrayOf(PropTypes.string),
  onClickReadMore: PropTypes.func,
  startYear: PropTypes.number,
};

export default Excerpt;
