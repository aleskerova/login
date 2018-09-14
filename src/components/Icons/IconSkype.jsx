import React from 'react';
import { string } from 'prop-types';

const IconSkype = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 18 18"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#2CACE2"
        d="M17.483 10.91c.13-.586.198-1.192.198-1.816C17.681 4.42 13.838.63 9.096.63c-.5 0-.99.043-1.468.124A5.002 5.002 0 0 0 4.98 0C2.229 0 0 2.198 0 4.91c0 .905.25 1.754.684 2.483A8.364 8.364 0 0 0 .51 9.094c0 4.676 3.843 8.325 8.585 8.325a8.78 8.78 0 0 0 1.572-.142c.701.372 1.503.723 2.354.723C15.771 18 18 15.803 18 13.09c0-.782-.186-1.522-.517-2.18"
      />
      <path
        fill="#FEFEFE"
        d="M13.46 13.236c-.368.51-.907.911-1.617 1.199-.71.29-1.55.435-2.522.435-1.166 0-2.128-.198-2.886-.593a3.707 3.707 0 0 1-1.31-1.139c-.336-.474-.504-.936-.504-1.385 0-.26.1-.482.302-.667.202-.187.458-.28.77-.28.252 0 .466.073.64.218.175.144.325.358.447.643.15.338.313.62.489.846.173.226.42.414.736.56.318.146.735.22 1.25.22.71 0 1.286-.147 1.73-.443.443-.296.665-.667.665-1.11 0-.351-.12-.638-.359-.856a2.372 2.372 0 0 0-.927-.502c-.379-.116-.885-.24-1.52-.369-.849-.177-1.56-.387-2.131-.625-.573-.24-1.028-.564-1.363-.975-.336-.413-.504-.925-.504-1.536 0-.584.177-1.101.532-1.554.355-.453.867-.801 1.54-1.045.671-.244 1.462-.365 2.37-.365.725 0 1.352.081 1.882.241.53.162.968.377 1.317.644.35.268.605.548.766.843.161.292.242.58.242.859 0 .255-.1.486-.302.69a1.015 1.015 0 0 1-.753.308c-.275 0-.483-.062-.625-.184-.143-.123-.298-.324-.463-.604-.216-.4-.473-.712-.774-.935-.302-.225-.784-.337-1.451-.337-.617 0-1.116.12-1.495.365-.38.243-.57.536-.57.878 0 .21.066.395.195.55.128.154.306.285.532.396.225.11.454.197.684.262.231.062.613.153 1.146.274.665.14 1.269.294 1.809.462.54.169 1 .374 1.379.613.378.242.674.548.886.917.213.368.32.82.32 1.355 0 .64-.185 1.215-.553 1.726"
      />
    </g>
  </svg>
);

IconSkype.propTypes = {
  width: string.isRequired,
  height: string.isRequired,
};

export default IconSkype;