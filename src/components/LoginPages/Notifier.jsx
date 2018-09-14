import React from 'react';
import { string } from 'prop-types';

const Notifier = ({ text, className }) => (
  <span className={className}>{text}</span>
);

Notifier.propTypes = {
  text: string.isRequired,
  className: string.isRequired,
};

export default Notifier;
