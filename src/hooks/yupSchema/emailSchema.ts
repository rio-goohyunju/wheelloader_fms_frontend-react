import * as yup from 'yup';

const emailSchema = yup
  .string()
  .trim()
  .required('이메일을 입력해주세요')
  .email('올바른 이메일 형식을 입력해주세요')
  .min(10, '이메일은 최소 10자 이상이어야 합니다')
  .max(50, '이메일은 최대 50자를 넘을 수 없습니다');

export default emailSchema;
