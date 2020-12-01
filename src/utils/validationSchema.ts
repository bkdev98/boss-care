import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string().required().min(3),
  password: Yup.string().required().min(6),
});
