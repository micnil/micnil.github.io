import React from 'react';

const Email = () => {
  let firstname = 'michael';
  let lastname = 'nilsson';
  return (
    <span>
      {firstname}
      <span style={{ display: 'none' }} />
      &#64;{lastname}
      <span>{null}</span>&#46;dev
    </span>
  );
};

export default Email;
