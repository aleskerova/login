import React from 'react';
import { string } from 'prop-types';

const IconNotifications = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <path
      fill={fill}
      fillRule="nonzero"
      d="M12 20.5c.963 0 1.75-.788 1.75-1.75h-3.5c0 .962.779 1.75 1.75 1.75zm5.25-5.25v-4.375c0-2.686-1.435-4.935-3.938-5.53V4.75A1.31 1.31 0 0 0 12 3.437a1.31 1.31 0 0 0-1.313 1.313v.595c-2.51.595-3.937 2.835-3.937 5.53v4.375L5 17v.875h14V17l-1.75-1.75z"
    />
  </svg>
);

IconNotifications.propTypes = {
  fill: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default IconNotifications;
