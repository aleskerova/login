import React from 'react';
import { string } from 'prop-types';

const IconMessage = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <path
      fill={fill}
      fillRule="evenodd"
      d="M4.312 6.938C4.117 7.246 4 7.608 4 8v8c0 .35.098.676.257.962l5.051-5.653-4.996-4.371zm9.626 5.03l-1.609 1.41a.501.501 0 0 1-.658-.001l-1.61-1.41-5.116 5.725c.307.193.666.308 1.055.308h12c.389 0 .748-.115 1.055-.308l-5.117-5.724zM12 12.336l6.953-6.084A1.974 1.974 0 0 0 18 6H6c-.347 0-.668.096-.953.252L12 12.336zM20 16c0 .35-.099.676-.257.962l-5.052-5.652 4.997-4.372c.195.308.312.67.312 1.062v8z"
    />
  </svg>
);

IconMessage.propTypes = {
  fill: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default IconMessage;
