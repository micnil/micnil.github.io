import React from 'react';
import PropTypes from 'prop-types';

export const HTMLContent = ({ content, className, ...props }) => (
  <div
    {...props}
    className={className}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

HTMLContent.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};
