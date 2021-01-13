import * as Yup from 'yup';

export const registerValidationSchema = Yup.object().shape({
  fullName: Yup.string().required().min(3),
  email: Yup.string().email().required(),
  password: Yup.string().required().min(6),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(6),
});

export const petValidationSchema = Yup.object().shape({
  pet: Yup.string().min(1).max(50).required(),
});
