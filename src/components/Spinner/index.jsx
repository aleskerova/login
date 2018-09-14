import React from 'react';
import { string } from 'prop-types';

const Spinner = ({ className }) => (
  <div className={className}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);

Spinner.propTypes = {
  className: string.isRequired,
};

export default Spinner;
