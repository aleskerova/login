import React from 'react';
import { string } from 'prop-types';

const IconStop = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 22 22"
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke={fill}
      strokeWidth="1.8"
      transform="translate(4 4)"
    >
      <circle cx="7.5" cy="7.5" r="7.5" />
      <path strokeLinecap="round" d="M5.5 4.5v6M9.5 4.5v6" />
    </g>
  </svg>
);

IconStop.propTypes = {
  fill: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default IconStop;
