import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .strict(false)
    .trim('The field can not contain spaces at the beginning and at the end')
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters!')
    .max(40, 'First name must be less 40 characters!')
    .matches(/^[a-z ,.'-]+$/i, 'Invalid name'),
  lastName: yup
    .string()
    .strict(false)
    .trim('The field can not contain spaces at the beginning and at the end')
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters!')
    .max(40, 'Last name must be less 40 characters!')
    .matches(/^[a-z ,.'-]+$/i, 'Invalid name'),
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required'),
});

export const validate = values => {
  const errors = {};
  try {
    schema.validateSync(values, { returnError: true });
  } catch (error) {
    errors[error.path] = error.message;
  }
  return errors;
};
