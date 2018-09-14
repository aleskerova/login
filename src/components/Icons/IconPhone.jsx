import React from 'react';
import { string } from 'prop-types';

const IconPhone = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <path
      fill={fill}
      fillRule="evenodd"
      d="M18.937 16.16l-.07-.21c-.165-.491-.706-1.003-1.203-1.138l-1.839-.502c-.499-.136-1.21.046-1.575.412l-.666.665a7.061 7.061 0 0 1-4.969-4.97l.666-.666c.365-.365.547-1.076.411-1.575l-.501-1.84c-.136-.498-.648-1.04-1.138-1.202l-.21-.07c-.49-.164-1.19 0-1.555.366l-.996.997c-.177.177-.291.683-.291.685a11.764 11.764 0 0 0 3.44 8.445A11.763 11.763 0 0 0 16.86 19c.017 0 .538-.112.715-.29l.996-.995c.365-.365.53-1.065.367-1.556"
    />
  </svg>
);

IconPhone.propTypes = {
  fill: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default IconPhone;
