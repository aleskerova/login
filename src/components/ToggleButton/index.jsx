import React from 'react';
import { string } from 'prop-types';

const ToggleButton = ({ className }) => <input className={className} />;

ToggleButton.propTypes = {
  className: string.isRequired,
};

export default ToggleButton;
