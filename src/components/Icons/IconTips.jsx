import React from 'react';
import { string } from 'prop-types';

const IconTips = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <path
      fill={fill}
      fillRule="nonzero"
      d="M10.75 19h2.5v-2.333h-2.5V19zM12 5C9.238 5 7 7.088 7 9.667h2.5c0-1.284 1.125-2.334 2.5-2.334s2.5 1.05 2.5 2.334c0 2.333-3.75 2.041-3.75 5.833h2.5c0-2.625 3.75-2.917 3.75-5.833C17 7.088 14.762 5 12 5z"
    />
  </svg>
);

IconTips.propTypes = {
  fill: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default IconTips;
