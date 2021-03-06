import React from 'react';
import { string } from 'prop-types';

const IconSickLeave = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 13 13"
  >
    <g fill={fill} fillRule="evenodd">
      <path d="M9.434 5.67L6.064 9.28c-.22.237-.565.313-.898.197a.306.306 0 0 0-.322.082L3.78 10.7c-.107.115-.3.093-.432-.047-.073-.077-.186-.284-.045-.463l1.064-1.14a.353.353 0 0 0 .077-.344c-.106-.352-.036-.727.184-.963l3.37-3.608c.347-.37.95-.327 1.345.096a1.2 1.2 0 0 1 .325.81.921.921 0 0 1-.234.63m.355-1.922c-.64-.686-1.645-.73-2.238-.096l-3.369 3.61c-.341.366-.487.91-.39 1.443l-.936 1.003c-.169.162-.502.788.044 1.422.363.42.974.427 1.328.047l.936-1.003c.5.105 1.001-.047 1.347-.417l3.37-3.609c.27-.29.42-.685.42-1.11 0-.472-.188-.941-.512-1.29" />
      <path d="M8.947 5.142l-.286.306a.364.364 0 0 1-.003.485.307.307 0 0 1-.453.003l-.647.694c.122.134.12.35-.003.484a.307.307 0 0 1-.453.004l-.698.747a.364.364 0 0 1-.003.485.307.307 0 0 1-.453.003l-.286.306a.308.308 0 0 1-.455 0 .363.363 0 0 1 0-.488l.286-.304a.363.363 0 0 1 .003-.485.306.306 0 0 1 .452-.003l.698-.748a.363.363 0 0 1 .003-.484.307.307 0 0 1 .453-.004l.648-.693a.364.364 0 0 1 .003-.485.307.307 0 0 1 .452-.003l.286-.308a.308.308 0 0 1 .456 0 .363.363 0 0 1 0 .488" />
    </g>
  </svg>
);

IconSickLeave.propTypes = {
  fill: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default IconSickLeave;
