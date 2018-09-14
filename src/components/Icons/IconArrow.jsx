import React from 'react';
import { string } from 'prop-types';

const IconArrow = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="6"
    viewBox="0 0 10 6"
  >
    <g fill="none" fill-rule="evenodd">
      <path
        fill="#626B79"
        fill-rule="nonzero"
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
