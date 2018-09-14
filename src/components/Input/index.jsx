import React from 'react';
import { string } from 'prop-types';
import './Input.css';

const Input = ({ type, placeholder, meta, input, className }) => (
  <div className="fix">
    <input
      type={type}
      {...input}
      placeholder={placeholder}
      className={className}
    />
    {(meta.error && !meta.touched) || (
      <div className="errorInput">{meta.error}</div>
    )}
  </div>
);

Input.propTypes = {
  type: string.isRequired,
  placeholder: string.isRequired,
};

export default Input;
