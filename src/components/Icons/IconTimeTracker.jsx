import React from 'react';
import { string } from 'prop-types';

const IconTimeTracker = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 30 30"
  >
    <g fill={fill} fillRule="nonzero">
      <path d="M10.07 15.106a.63.63 0 0 0-.63-.63H7.866a.63.63 0 0 0 0 1.26H9.44a.63.63 0 0 0 .63-.63zM9.717 17.946l-.828.472a.63.63 0 1 0 .63 1.09l.818-.473a.63.63 0 0 0-.63-1.089h.01zM12.824 20.424a.63.63 0 0 0-.86.23l-.472.827a.63.63 0 1 0 1.09.63l.472-.818a.63.63 0 0 0-.23-.87zM19.822 20.654a.63.63 0 0 0-1.089.63l.472.818a.63.63 0 0 0 1.09-.63l-.473-.818zM22.889 18.418l-.819-.472a.63.63 0 1 0-.63 1.09l.82.472a.63.63 0 1 0 .629-1.09zM12.582 8.111a.63.63 0 1 0-1.09.63l.473.818a.63.63 0 1 0 1.089-.63l-.472-.818zM10.346 11.178l-.827-.473a.63.63 0 0 0-.63 1.09l.818.472a.63.63 0 0 0 .63-1.09h.01zM15.894 20.93a.63.63 0 0 0-.63.63v1.574a.63.63 0 0 0 1.26 0V21.56a.63.63 0 0 0-.63-.63zM15.894 7.236a.63.63 0 0 0-.63.63v7.24c0 .348.282.63.63.63h7.24a.63.63 0 0 0 .63-.63 7.87 7.87 0 0 0-7.87-7.87zm.63 7.24V8.525a6.611 6.611 0 0 1 5.952 5.953h-5.953z" />
    </g>
  </svg>
);

IconTimeTracker.propTypes = {
  fill: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default IconTimeTracker;
