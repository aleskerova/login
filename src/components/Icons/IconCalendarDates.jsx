import React from 'react';
import { string } from 'prop-types';

const IconCalendarDates = ({ fill, width, height }) => (
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
        d="M 4.625 5.875 h -1.25 v 1.25 h 1.25 v -1.25 Z m 2.5 0 h -1.25 v 1.25 h 1.25 v -1.25 Z m 2.5 0 h -1.25 v 1.25 h 1.25 v -1.25 Z m 1.25 -4.375 h -0.625 V 0.25 H 9 V 1.5 H 4 V 0.25 H 2.75 V 1.5 h -0.625 c -0.694 0 -1.244 0.563 -1.244 1.25 L 0.875 11.5 c 0 0.688 0.556 1.25 1.25 1.25 h 8.75 c 0.688 0 1.25 -0.563 1.25 -1.25 V 2.75 c 0 -0.688 -0.563 -1.25 -1.25 -1.25 Z m 0 10 h -8.75 V 4.625 h 8.75 V 11.5 Z"
        mask="url(#b)"
      />
    </g>
  </svg>
);

IconCalendarDates.propTypes = {
  fill: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default IconCalendarDates;
