import { GridValueFormatterParams } from '@mui/x-data-grid';

interface CheckList {
  name: string;
  is_checked: boolean;
}

export const phoneFormatter = (phone: string) => {
  return phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
};

export const cleanAndNormalizeString = (inputString: string) => {
  return inputString.toLowerCase().replace(/\s+/g, '');
};

export const cleanIncludes = (inputString: string, includesString: string) => {
  return cleanAndNormalizeString(inputString).includes(
    cleanAndNormalizeString(includesString)
  );
};

export const textLengthOverCut = (text: string, len: number) => {
  const result = text.length < len ? text : `${text.substring(0, len)}...`;
  return result;
};

export const formatterArray = (values: string[]): string => {
  return values.map((value) => value).join(', ');
};

export const girdTableFormatter = (
  params: GridValueFormatterParams
): string => {
  const values = params?.value;

  if (Array.isArray(values)) {
    const checkedValue = values.filter((value: CheckList) => value.is_checked);
    const valueNames = checkedValue.map((value: CheckList) => value.name);
    return formatterArray(valueNames);
  }
  return '';
};
