import React from 'react';
import { string } from 'prop-types';

const IconWorkingDay = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 13 13"
  >
    <path
      fill="none"
      fillRule="evenodd"
      stroke={fill}
      strokeLinecap="round"
      strokeWidth="1.675"
      d="M3.25 6.763L5.467 9.1 10.4 3.9"
    />
  </svg>
);

IconWorkingDay.propTypes = {
  fill: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default IconWorkingDay;
