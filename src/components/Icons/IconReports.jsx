import React from 'react';
import { string } from 'prop-types';

const IconReports = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 30 30"
  >
    <g fill={fill} fillRule="nonzero">
      <path d="M21.216 15.94H15.06V9.784a.586.586 0 0 0-.586-.586 7.328 7.328 0 1 0 7.328 7.328.586.586 0 0 0-.586-.586zm-6.742 6.741a6.155 6.155 0 0 1-.586-12.284v6.129c0 .324.262.586.586.586h6.129a6.155 6.155 0 0 1-6.129 5.569z" />
      <path d="M16.526 7.147a.586.586 0 0 0-.586.586v6.741c0 .324.262.586.586.586h6.741a.586.586 0 0 0 .586-.586 7.328 7.328 0 0 0-7.327-7.327zm.586 6.74V8.346a6.155 6.155 0 0 1 5.543 5.543h-5.543z" />
    </g>
  </svg>
);

IconReports.propTypes = {
  fill: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default IconReports;
