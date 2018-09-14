import React from 'react';
import { string } from 'prop-types';

const IconLogo = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 22 22"
  >
    <g fill={fill} fillRule="nonzero">
      <path d="M15.033 20.9a1.074 1.074 0 0 1-.454-2.05 8.83 8.83 0 0 0 4.07-3.872 1.074 1.074 0 1 1 1.899 1.001 11 11 0 0 1-5.06 4.815 1.067 1.067 0 0 1-.455.106zM10.901 21.802C4.881 21.802 0 16.922 0 10.901 0 4.881 4.88 0 10.901 0c6.02 0 10.901 4.88 10.901 10.901a1.074 1.074 0 1 1-2.149 0 8.752 8.752 0 1 0-8.752 8.752 1.074 1.074 0 0 1 0 2.149z" />
      <circle cx="10.901" cy="10.901" r="2.057" />
      <circle cx="15.198" cy="6.178" r="1.096" />
    </g>
  </svg>
);

IconLogo.propTypes = {
  fill: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default IconLogo;
