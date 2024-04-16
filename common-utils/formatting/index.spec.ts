import {
  girdTableFormatter,
  formatterArray,
  cleanIncludes,
  cleanAndNormalizeString,
  phoneFormatter,
  textLengthOverCut,
} from '.';

describe('Formatting utils', () => {
  it('textLengthOverCut, 주어진 string이 길이를 넘었을때 짤리는지 확인.', () => {
    expect(textLengthOverCut('Hello', 10)).toEqual('Hello');

    // Case 2: 문자열이 주어진 길이와 같을 때
    expect(textLengthOverCut('Hello', 5)).toEqual('Hello');

    // Case 3: 문자열이 주어진 길이를 초과할 때
    expect(textLengthOverCut('Hello, World!', 5)).toEqual('Hello...');

    // Case 4: 빈 문자열을 처리할 때
    expect(textLengthOverCut('', 10)).toEqual('');

    // Case 5: len이 0보다 작을 때 (예외 처리)
    expect(() => textLengthOverCut('Hello', -1)).toThrow();

    // Case 6: 한국어 문자열 처리
    expect(textLengthOverCut('우디의함수야', 3)).toEqual('우디의...');
  });
});

describe('phoneFormatter 테스트', () => {
  it('phoneFormatter, 일반적인 전화 번호 포맷', () => {
    expect(phoneFormatter('1234567890')).toEqual('123-4567-890');
  });

  it('phoneFormatter, 다른 구분자를 사용한 전화 번호 포맷', () => {
    expect(phoneFormatter('123.4567.890')).toEqual('123-4567-890');
  });

  it('phoneFormatter, 전화 번호가 짧을 때', () => {
    expect(phoneFormatter('12345')).toEqual('12345');
  });

  it('phoneFormatter, 전화 번호가 충분히 길 때', () => {
    expect(phoneFormatter('12345678901234')).toEqual('123-4567-8901');
  });

  it('phoneFormatter, 유효하지 않은 입력 (문자 포함)', () => {
    expect(() => phoneFormatter('abcdefg')).toThrow();
  });

  it('phoneFormatter, 빈 문자열', () => {
    expect(phoneFormatter('')).toEqual('');
  });

  it('phoneFormatter, 특수 문자 처리', () => {
    expect(() => phoneFormatter('12#3456&7890')).toThrow();
  });

  it('phoneFormatter, phone 인자가 null 일 때', () => {
    // null 대신 유효한 문자열을 전달합니다.
    expect(() => phoneFormatter(null as any)).toThrow(); // any 타입으로 형변환
  });

  it('phoneFormatter, phone 인자가 undefined 일 때', () => {
    // undefined 대신 유효한 문자열을 전달합니다.
    expect(() => phoneFormatter(undefined as any)).toThrow(); // any 타입으로 형변환
  });

  it('phoneFormatter, 다양한 국가의 전화 번호 형식', () => {
    // 다양한 국가의 전화 번호 형식을 테스트
    expect(phoneFormatter('123-456-7890')).toEqual('123-456-7890'); // 미국
    expect(phoneFormatter('+44 20 7123 1234')).toEqual('+44-20-7123-1234'); // 영국
    expect(phoneFormatter('03-1234-5678')).toEqual('03-1234-5678'); // 일본
    // 더 많은 국가의 형식을 테스트
  });
});

describe('cleanAndNormalizeString', () => {
  it('모든 공백과 대소문자를 정규화', () => {
    expect(cleanAndNormalizeString(' Hello    World ')).toEqual('helloworld');
    expect(cleanAndNormalizeString('AbCdEf')).toEqual('abcdef');
    expect(cleanAndNormalizeString('   ')).toEqual(''); // 모든 공백 제거
    expect(cleanAndNormalizeString('')).toEqual(''); // 빈 문자열
  });
});

describe('cleanIncludes', () => {
  it('입력 문자열이 포함 문자열을 포함하는지 확인', () => {
    expect(cleanIncludes('Hello World', 'hello')).toEqual(true); // 대소문자 무시
    expect(cleanIncludes('abcdef', 'cd')).toEqual(true); // 정규화된 문자열 검색
    expect(cleanIncludes('Hello', 'world')).toEqual(false); // 미포함 케이스
    expect(cleanIncludes('', 'text')).toEqual(false); // 빈 문자열 검색
  });

  it('입력 문자열 또는 포함 문자열이 빈 문자열일 때 항상 false', () => {
    expect(cleanIncludes('', 'text')).toEqual(false);
    expect(cleanIncludes('Hello', '')).toEqual(false);
    expect(cleanIncludes('', '')).toEqual(false);
  });
});
