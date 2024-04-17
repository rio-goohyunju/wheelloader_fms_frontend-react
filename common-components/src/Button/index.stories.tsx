import Stack from "@mui/material/Stack";
import { Meta, StoryObj } from "@storybook/react";

import Button from ".";

export const Basic: StoryObj = {
    args: {
        variant: "contained",
        label: "Button",
    },
};

export default {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
} as Meta;

export const Variants = () => (
    <Stack spacing={2} maxWidth={300}>
        <Button variant="text" label="Text Button" />
        <Button variant="contained" label="Contained Button" />
        <Button variant="outlined" label="Outlined Button" />
    </Stack>
);

export const Colors = () => (
    <Stack spacing={2} maxWidth={300}>
        <Button variant="contained" label="Primary" />
        <Button variant="contained" color="secondary" label="Secondary" />
        <Button variant="contained" color="success" label="Success" />
        <Button variant="contained" color="error" label="Error" />
    </Stack>
);

export const Sizes = () => (
    <Stack spacing={2} maxWidth={300}>
        <Button variant="contained" size="small" label="Small" />
        <Button variant="contained" size="medium" label="Medium" />
        <Button variant="contained" size="large" label="Large" />
    </Stack>
);
