import React from 'react';
import { string } from 'prop-types';
import './FormHeader.css';

const FormHeader = ({ text }) => <h2 className="formHeader">{text}</h2>;

FormHeader.propTypes = {
  text: string.isRequired,
};

export default FormHeader;
