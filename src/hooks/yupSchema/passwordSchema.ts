import * as yup from 'yup';

const passwordSchema = yup
  .string()
  .required('비밀번호를 입력해주세요')
  .min(4, '비밀번호는 최소 4자 이상이어야 합니다');

export default passwordSchema;
