import React from 'react';

/**
 * This component exists purirely to obfuscate the
 * site email from web crawlers. I doubt it has much
 * effect, but even if one crawler is avoided, it's worth it.
 */
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
