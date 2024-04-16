import { parse, isValid } from 'date-fns';

export const isValidTimeFormat = (value: string) =>
  isValid(parse(value, 'HH:mm:ss', new Date())) ||
  isValid(parse(value, 'HH:mm', new Date()));

export const isValidDateFormat = (value: string) =>
  isValid(parse(value, 'yyyy-MM-dd', new Date())) ||
  isValid(parse(value, 'yyyy-MM-dd HH:mm:ss', new Date()));

export const isNumeric = (value: string) => /^[0-9]*$/.test(value);

export const isAlphabet = (value: string) => /^[a-zA-Z]*$/.test(value);

export const isAlphaNumeric = (value: string) => /^[a-zA-Z0-9]*$/.test(value);

export const isKorean = (value: string) => /^[가-힣]*$/.test(value);

export const getPhoneNumberPattern = () => {
  return {
    value: /^01(?:0|1|[6-9])-(?:\d{4})-\d{4}$/,
    message: '올바른 핸드폰 번호 형식을 입력해주세요 (ex: 010-1234-5678)',
  };
};

export const getEmailPattern = () => {
  return {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: '올바른 이메일 형식을 입력해주세요',
  };
};

export const getIPPattern = () => {
  return {
    value:
      /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    message: '올바른 IP 형식을 입력해주세요',
  };
};
