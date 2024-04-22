import { GlobalStyles as MUIGlobalStyles } from '@mui/material';

// 전체에 적용되는 글로벌 세팅
export const GlobalStyles = () => {
  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={{
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
        },
        body: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
        a: {
          cursor: 'pointer',
          transition: '.25s',
          textDecoration: 'none',
        },

        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
        img: {
          display: 'block',
        },
        ol: {
          margin: 0,
          padding: 0,
          listStyle: 'none',
        },
        ul: {
          margin: 0,
          padding: 0,
          listStyle: 'none',
        },
      }}
    />
  );

  return inputGlobalStyles;
};
