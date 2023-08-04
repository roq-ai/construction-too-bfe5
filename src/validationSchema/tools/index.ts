import * as yup from 'yup';

export const toolValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  outlet_id: yup.string().nullable(),
});
