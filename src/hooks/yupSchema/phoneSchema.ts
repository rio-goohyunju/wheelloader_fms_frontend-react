import * as yup from 'yup';

const phoneSchema = yup
  .string()
  .trim()
  .test('starts-with-010', '휴대폰 번호는 010으로 시작해야 합니다.', (value) =>
    value ? value.startsWith('010') : false
  )
  .test('length', '휴대폰 번호는 11자리여야 합니다.', (value) =>
    value ? value.length === 11 : false
  )
  .test('only-number', '휴대폰 번호는 숫자만 가능합니다.', (value) =>
    value ? /^\d+$/.test(value) : false
  );

export default phoneSchema;
