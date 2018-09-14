import React from 'react';
import { string } from 'prop-types';
import './FormTitle.css';

const FormTitle = ({ text }) => <span className="formTitle">{text}</span>;

FormTitle.propTypes = {
  text: string.isRequired,
};

export default FormTitle;
