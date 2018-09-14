import React from 'react';
import { string } from 'prop-types';

const IconAdd = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 17 17"
  >
    <g fill="none" fill-rule="evenodd" stroke="#8B92A9">
      <circle cx="7.5" cy="7.5" r="7.5" transform="translate(1 1)" />
      <path d="M8.5 4.5h1v8h-1z" />
      <path d="M4.5 8.5h8v1h-8z" />
    </g>
  </svg>
);

IconAdd.propTypes = {
  fill: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default IconAdd;
