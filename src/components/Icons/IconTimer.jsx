import React from 'react';
import { string } from 'prop-types';

const IconTimer = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 18 21"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M-2 0h22v22H-2z" />
      <path
        fill={fill}
        fillRule="nonzero"
        d="M11.75.917h-5.5V2.75h5.5V.917zM8.083 12.833h1.834v-5.5H8.083v5.5zm7.361-6.059l1.302-1.301a10.128 10.128 0 0 0-1.293-1.293l-1.301 1.302A8.215 8.215 0 0 0 9 3.667a8.25 8.25 0 0 0-8.25 8.25A8.245 8.245 0 0 0 9 20.167a8.245 8.245 0 0 0 6.444-13.393zM9 18.334a6.412 6.412 0 0 1-6.417-6.417A6.412 6.412 0 0 1 9 5.5a6.412 6.412 0 0 1 6.417 6.417A6.412 6.412 0 0 1 9 18.333z"
      />
    </g>
  </svg>
);

IconTimer.propTypes = {
  fill: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default IconTimer;
