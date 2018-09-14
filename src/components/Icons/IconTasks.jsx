import React from 'react';
import { string } from 'prop-types';

const IconTasks = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 30 30"
  >
    <g fill={fill} fillRule="nonzero" transform="translate(7 8)">
      <path d="M6.853 2.435h9.287c.396 0 .717-.293.717-.655 0-.361-.321-.654-.717-.654H6.853a.732.732 0 0 0-.62.327.605.605 0 0 0 0 .655.732.732 0 0 0 .62.327zM3.067.444l-1.4 1.279-.384-.353a.713.713 0 0 0-.646-.16.644.644 0 0 0-.475.43.575.575 0 0 0 .171.59l.857.783c.181.164.449.22.69.143h.033l.034-.015c.069-.03.132-.07.186-.119L4 1.306a.572.572 0 0 0 0-.862.713.713 0 0 0-.943 0h.01zM16.14 6.613H6.853c-.395 0-.716.293-.716.655 0 .361.32.654.716.654h9.287c.396 0 .717-.293.717-.654 0-.362-.321-.655-.717-.655zM16.14 12.092H6.853c-.395 0-.716.293-.716.654 0 .361.32.654.716.654h9.287c.396 0 .717-.293.717-.654 0-.361-.321-.654-.717-.654z" />
      <ellipse cx="2.02" cy="12.746" rx="1.083" ry="1" />
      <ellipse cx="2.02" cy="7.268" rx="1.083" ry="1" />
    </g>
  </svg>
);

IconTasks.propTypes = {
  fill: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default IconTasks;
