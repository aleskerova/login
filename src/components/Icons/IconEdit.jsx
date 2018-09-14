import React from 'react';
import { string } from 'prop-types';

const IconEdit = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <defs>
      <path id="a" d="M12 0h12v24H0V0h12z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        fill={fill}
        d="M 14 5.064 l 3.996 4.015 L 7.88 19.243 l -3.993 -4.015 L 14 5.064 Z m 7.028 -0.969 l -1.782 -1.79 a 1.762 1.762 0 0 0 -2.498 0 L 15.041 4.02 l 3.996 4.015 l 1.991 -2 a 1.374 1.374 0 0 0 0 -1.94 Z M 1.797 20.872 a 0.456 0.456 0 0 0 0.55 0.543 L 6.8 20.33 l -3.994 -4.015 l -1.01 4.557 Z"
        mask="url(#b)"
      />
    </g>
  </svg>
);

IconEdit.propTypes = {
  fill: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default IconEdit;
