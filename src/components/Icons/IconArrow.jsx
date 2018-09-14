import React from 'react';
import { string } from 'prop-types';

const IconArrow = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 10 6"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill={fill}
        fillRule="nonzero"
        d="M8.443.442L5 3.877 1.558.443.5 1.5 5 6l4.5-4.5z"
      />
      <path d="M-4-6h18v18H-4z" />
    </g>
  </svg>
);

IconArrow.propTypes = {
  fill: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default IconArrow;
