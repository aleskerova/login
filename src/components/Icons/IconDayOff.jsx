import React from 'react';
import { string } from 'prop-types';

const IconDayOff = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 13 13"
  >
    <g fill={fill} fillRule="evenodd">
      <path d="M8.948 9.757H3.742a.356.356 0 0 1-.355-.356V5.845h5.915V9.4c0 .196-.159.356-.354.356M3.742 4.156h.19v.492h.574v-.492h3.677v.492h.575v-.492h.19c.195 0 .354.16.354.355v.758H3.387v-.758c0-.196.16-.355.355-.355m5.206-.576h-.19v-.67h-.575v.67H4.506v-.67h-.574v.67h-.19a.931.931 0 0 0-.93.931v4.89c0 .514.417.931.93.931h5.206c.512 0 .93-.417.93-.93v-4.89a.931.931 0 0 0-.93-.932" />
      <path d="M8.674 6.596a.287.287 0 0 0-.407 0l-.782.783-.783-.783a.287.287 0 1 0-.406.407l.782.783-.782.783a.288.288 0 0 0 .406.407l.783-.783.782.783a.286.286 0 0 0 .407 0 .288.288 0 0 0 0-.407l-.783-.783.783-.783a.288.288 0 0 0 0-.407" />
    </g>
  </svg>
);

IconDayOff.propTypes = {
  fill: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default IconDayOff;
