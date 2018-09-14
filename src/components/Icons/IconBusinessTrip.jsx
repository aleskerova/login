import React from 'react';
import { string } from 'prop-types';

const IconBusinessTrip = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 13 13"
  >
    <defs>
      <path id="a" d="M.018.02h7.768v7.111H.018z" />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(2.6 2.25)">
      <path
        fill={fill}
        d="M7.21 6.346c0 .102-.079.185-.177.185h-.92V1.832h.92c.098 0 .178.083.178.185v4.329zm-6.617 0V2.017c0-.102.08-.185.177-.185h.92v4.699H.77a.182.182 0 0 1-.177-.185zM3.226.623V.621h1.352v.612H3.226v-.61zm-.96 5.908h3.272V1.832H2.266v4.699zm4.767-5.299h-1.88V.623c0-.338-.214-.602-.487-.602H3.138c-.273 0-.488.264-.488.602v.61H.77c-.415 0-.752.352-.752.784v4.329c0 .433.337.785.752.785h6.263c.416 0 .753-.352.753-.785V2.017c0-.432-.337-.785-.753-.785z"
        mask="url(#b)"
      />
    </g>
  </svg>
);

IconBusinessTrip.propTypes = {
  fill: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default IconBusinessTrip;
