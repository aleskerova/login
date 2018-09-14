import React from 'react';
import { string } from 'prop-types';

const IconDoubleArrow = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <defs>
      <path id="a" d="M12 0h12v24H0V0h12z" />
    </defs>
    <path
      fill={fill}
      d="M 10.777 7 l -0.909 0.99 l 2.296 2.5 l -2.296 2.5 l 0.91 0.99 l 3.204 -3.49 Z"
      mask="url(#b)"
    />
    <path
      fill={fill}
      d="M 6.91 7 L 6 7.99 l 2.295 2.5 L 6 12.99 l 0.91 0.99 l 3.204 -3.49 Z"
      mask="url(#b)"
    />
  </svg>
);

IconDoubleArrow.propTypes = {
  fill: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default IconDoubleArrow;
