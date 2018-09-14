import React from 'react';
import { string } from 'prop-types';

const IconSettings = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 16"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M-4-4h24v24H-4z" />
      <path
        fill={fill}
        fillRule="nonzero"
        d="M13.584 8.693a6.17 6.17 0 0 0 .056-.776c0-.27-.024-.523-.056-.776l1.67-1.306a.4.4 0 0 0 .096-.507l-1.583-2.74c-.095-.173-.31-.237-.483-.173l-1.972.791a5.784 5.784 0 0 0-1.338-.776l-.3-2.098A.386.386 0 0 0 9.286 0H6.119a.386.386 0 0 0-.388.332l-.3 2.098a6.082 6.082 0 0 0-1.339.776l-1.97-.791a.386.386 0 0 0-.484.174L.055 5.328a.39.39 0 0 0 .095.507L1.82 7.14a6.278 6.278 0 0 0-.055.776c0 .26.024.522.055.776L.15 9.998a.4.4 0 0 0-.095.506l1.583 2.74c.095.174.309.237.483.174l1.971-.792c.412.317.855.578 1.338.776l.301 2.098c.024.19.19.332.388.332h3.167a.386.386 0 0 0 .388-.332l.3-2.098a6.082 6.082 0 0 0 1.338-.776l1.972.792c.182.071.388 0 .483-.174l1.583-2.74a.4.4 0 0 0-.095-.506l-1.67-1.306zm-5.882 1.995a2.774 2.774 0 0 1-2.77-2.771 2.774 2.774 0 0 1 2.77-2.771 2.774 2.774 0 0 1 2.771 2.77 2.774 2.774 0 0 1-2.77 2.771z"
      />
    </g>
  </svg>
);

IconSettings.propTypes = {
  fill: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default IconSettings;
