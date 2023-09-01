import React from 'react';

const Text = ({ characters, className }) => {
  return (
    <p className={className}>{characters}</p>
  );
};

export default Text;
