import React from 'react';
import { string } from 'prop-types';

const IconFamily = ({ fill, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 13 13"
  >
    <path
      fill={fill}
      fillRule="evenodd"
      d="M3.536 4.803c0-.558.441-1.011.983-1.011s.983.453.983 1.01c0 .558-.44 1.011-.983 1.011-.542 0-.983-.453-.983-1.01m5.595-1.011c.542 0 .983.453.983 1.01 0 .558-.441 1.011-.983 1.011s-.983-.453-.983-1.01c0-.558.44-1.011.983-1.011m2.043 4.664c0 .231-.254.495-.697.722-.45.231-1.063.415-1.777.533a1.952 1.952 0 0 0-.328-.997 1.896 1.896 0 0 0-.736-.649c.208-.217.324-.509.324-.816 0-.156-.029-.307-.087-.449a2.008 2.008 0 0 1 1.258-.445c1.126 0 2.043.942 2.043 2.1M7.434 7.25a.618.618 0 0 1-.609.626.618.618 0 0 1-.609-.626c0-.129.038-.252.109-.357.114-.168.3-.27.5-.27.198 0 .384.1.498.266l.002.004a.634.634 0 0 1 .109.357m-.609 1.168c.738 0 1.34.611 1.35 1.367-.435.05-.89.075-1.35.075-.46 0-.914-.026-1.35-.075.011-.756.612-1.367 1.35-1.367m-.811-.352a1.896 1.896 0 0 0-.736.649c-.198.296-.31.64-.327.997-.715-.118-1.328-.302-1.778-.533-.44-.226-.694-.488-.696-.718v-.004c0-.56.212-1.088.599-1.485a2 2 0 0 1 2.7-.17 1.184 1.184 0 0 0-.086.448c0 .307.117.599.324.816m5.194-1.163a2.576 2.576 0 0 0-1.121-.899c.349-.294.553-.733.553-1.2 0-.856-.677-1.553-1.51-1.553-.831 0-1.509.697-1.509 1.553 0 .467.205.906.553 1.2a2.53 2.53 0 0 0-.61.36 1.11 1.11 0 0 0-1.477 0 2.532 2.532 0 0 0-.611-.36c.348-.294.553-.733.553-1.2 0-.857-.677-1.553-1.51-1.553-.832 0-1.51.696-1.51 1.553 0 .467.205.906.554 1.2-.967.4-1.61 1.364-1.613 2.445v.008c0 .319.171.787.988 1.206.565.29 1.34.508 2.24.63.526.072 1.08.108 1.647.108s1.122-.036 1.648-.108c.9-.122 1.674-.34 2.239-.63.817-.42.988-.887.988-1.206 0-.563-.17-1.1-.492-1.554"
    />
  </svg>
);

IconFamily.propTypes = {
  fill: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default IconFamily;