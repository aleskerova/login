import React from 'react';
import { string } from 'prop-types';

const IconCalendar = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 30 30"
  >
    <path
      fill={fill}
      fillRule="nonzero"
      d="M23.241 9.54h-2.656V7.648a.607.607 0 1 0-1.214 0V9.54h-7.742V7.647a.607.607 0 0 0-1.214 0V9.54H7.76a.607.607 0 0 0-.607.607v13.205c0 .336.272.608.607.608H23.24a.607.607 0 0 0 .607-.608V10.148a.607.607 0 0 0-.607-.607zm-12.826 1.215v.607a.607.607 0 0 0 1.214 0v-.607h7.742v.607a.607.607 0 1 0 1.214 0v-.607h2.049v2.58H8.366v-2.58h2.05zM8.366 22.746V14.55h14.268v8.196H8.366z"
    />
  </svg>
);

IconCalendar.propTypes = {
  fill: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default IconCalendar;
