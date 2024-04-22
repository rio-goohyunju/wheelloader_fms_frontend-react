import { type Palette, type ThemeOptions } from "@mui/material/styles";
import { colors } from "@common/styles";

// mui theme components관련 설정.
// https://mui.com/ 각 컴포넌트의 api 참고.
export const components = (palette: Palette): ThemeOptions["components"] => ({
    MuiAccordion: {
        styleOverrides: {
            root: {
                "&.MuiPaper-root": {
                    elevation: 0,
                    borderRadius: "0.75rem",
                    border: "none",
                    padding: "0 0 0 0",
                    boxShadow: "none",
                },
                borderRadius: "0.75rem",
                border: "none",
                position: "inherit",
            },
        },
    },
    MuiAccordionSummary: {
        styleOverrides: {
            root: {
                borderRadius: "0.75rem",
                border: `2px solid ${palette.primary.main}`,
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                    transform: "rotate(90deg)",
                },
                "&.MuiButtonBase-root.MuiAccordionSummary-root": {
                    background: palette.primary.light,
                },

                "&.MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded": {
                    border: `3px solid ${palette.primary.dark}`,
                },
                "& .MuiAccordionSummary-content": {
                    flexDirection: "column",
                    alignContent: "center",
                    alignItems: "center",
                },
            },
        },
    },
    MuiAccordionDetails: {
        styleOverrides: {
            root: {
                borderRadius: "0 0 0.75rem 0.75rem",

                background: palette.background.paper,
                "&.MuiAccordionDetails-root": { border: "none" },
            },
        },
    },
    MuiButton: {
        styleOverrides: {
            root: {
                marginTop: "0.5rem",
                borderRadius: "0.25rem",
            },
        },
    },
    MuiCheckbox: {
        styleOverrides: {
            root: {},
        },
    },

    MuiPaper: {
        defaultProps: {
            elevation: 1,
        },
        styleOverrides: {
            root: {
                backgroundImage: "none",
                padding: "1.25rem",
                marginBottom: "1.5rem",
            },
            rounded: {
                borderRadius: "0.75rem",
            },
        },
    },
    MuiListItemButton: {
        styleOverrides: {
            root: {
                color: palette.primary.main,
                borderRadius: "0.75rem",
                "&.Mui-selected": {
                    color: palette.primary.dark,
                    backgroundColor: palette.primary.light,
                    "&:hover": {
                        backgroundColor: palette.primary.light,
                    },
                    "& .MuiListItemIcon-root": {
                        color: palette.primary.dark,
                    },
                },
                "&:hover": {
                    backgroundColor: palette.primary.light,
                    color: palette.primary.dark,
                    "& .MuiListItemIcon-root": {
                        color: palette.primary.dark,
                    },
                },
            },
        },
    },
    MuiListItemIcon: {
        styleOverrides: {
            root: {
                color: palette.primary.main,
                minWidth: "2.25rem",
            },
        },
    },

    MuiCardHeader: {
        styleOverrides: {
            root: {
                padding: "1.5rem",
            },
            title: {
                fontSize: "1.125rem",
            },
        },
    },
    MuiCardContent: {
        styleOverrides: {
            root: {
                padding: "1.5rem",
            },
        },
    },
    MuiCardActions: {
        styleOverrides: {
            root: {
                padding: "1.5rem",
            },
        },
    },
    MuiInputBase: {
        styleOverrides: {
            input: {
                "&::placeholder": {
                    fontSize: "0.875rem",
                },
            },
        },
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                borderRadius: "4px",
                "& .MuiOutlinedInput-notchedOutline": {},
                "&:hover $notchedOutline": {},
                "&.MuiInputBase-multiline": {
                    padding: 1,
                },
            },
            input: {
                fontWeight: 500,
                padding: "15.5px 14px",
                borderRadius: "4px",
                "&.MuiInputBase-inputSizeSmall": {
                    padding: "10px 14px",
                    "&.MuiInputBase-inputAdornedStart": {
                        paddingLeft: 0,
                    },
                },
            },
            inputAdornedStart: {
                paddingLeft: 4,
            },
            notchedOutline: {
                borderRadius: "4px",
            },
        },
    },
    MuiDivider: {
        styleOverrides: {
            root: {
                opacity: 1,
            },
        },
    },
    MuiIcon: {
        styleOverrides: {
            root: {
                color: palette.primary.main,
            },
        },
    },
    MuiIconButton: {
        styleOverrides: {
            root: {
                borderRadius: "0.625rem",
                border: "1px solid",
                borderColor: colors.KIARed[50],
            },
        },
    },
    MuiChip: {
        styleOverrides: {
            root: {
                "&.MuiChip-deletable .MuiChip-deleteIcon": {},
                "&.MuiButtonBase-root": {
                    background: `${palette.primary.light}`,
                    color: "white",
                },
            },
        },
    },
    MuiTooltip: {
        styleOverrides: {
            tooltip: {},
        },
    },
    MuiToggleButtonGroup: {
        styleOverrides: {
            root: {
                border: "none",
            },
        },
    },
    MuiToggleButton: {
        styleOverrides: {
            root: {
                border: "none",
                "&.Mui-selected": {},
            },
        },
    },
    MuiTypography: {
        styleOverrides: {
            root: {
                color: palette.text.primary,
            },
        },
    },
    MuiPopover: {
        styleOverrides: {
            paper: {
                "&.MuiPopover-paper": {
                    padding: 0,
                    borderRadius: 0,
                },
            },
        },
    },
});
