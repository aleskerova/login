import React from 'react';
import PropTypes, { string, func } from 'prop-types';

const Button = ({ children, onClick, className }) => (
  <button type="submit" className={className} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
  className: string.isRequired,
  onClick: func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
