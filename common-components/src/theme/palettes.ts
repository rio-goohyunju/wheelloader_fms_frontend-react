/* eslint-disable no-shadow */
// 기본 테마 색상
import { type PaletteOptions } from "@mui/material/styles";

import colors from "./colors";

export const light: PaletteOptions = {
    mode: "light",

    primary: {
        light: colors.KIARed[300],
        main: colors.KIARed[500],
        dark: colors.KIARed[700],
    },

    secondary: {
        light: colors.purpleBlue[200],
        main: colors.purpleBlue[400],
        dark: colors.purpleBlue[600],
    },

    background: {
        default: colors.gray[4],
    },

    text: {
        primary: colors.textBlack,
    },

    custom: {
        primary: colors.mint[500],
        secondary: "#ef3054",
    },
};

// export const dark: PaletteOptions = {
//   mode: 'dark',

//   primary: {
//     main: 'rgb(45,136,255)',
//   },

//   background: {
//     default: 'rgb(24,25,26)',
//   },

//   example: {
//     primary: '#49b4ff',
//     secondary: '#ef3054',
//   },
// };

export default { light };

/**
 * Append custom variables to the palette object.
 * https://mui.com/material-ui/customization/theming/#custom-variables
 */
declare module "@mui/material/styles" {
    interface Palette {
        custom: {
            primary: string;
            secondary: string;
        };
    }

    interface PaletteOptions {
        custom: {
            primary: string;
            secondary: string;
        };
    }
}
