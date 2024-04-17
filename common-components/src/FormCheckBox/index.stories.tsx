import Stack from '@mui/material/Stack';
import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import FormCheckBox from '.';

export default {
  title: 'Components/FormCheckBox',
  component: FormCheckBox,
  tags: ['autodocs'],
} as Meta;

// export const Basic: StoryObj = {
//   args: { label: 'Test' },
// };

export const Basic = (args: StoryObj) => {
  const { control } = useForm();

  return (
    <Stack spacing={2} maxWidth={300}>
      <FormCheckBox {...args} label="" control={control} name="test" />
    </Stack>
  );
};

export const Variants = (args) => {
  const { control } = useForm();

  return (
    <Stack spacing={2} maxWidth={300}>
      <FormCheckBox {...args} label="test" control={control} name="" />
    </Stack>
  );
};

export const ColoredCheckboxes = (args) => {
  const { control } = useForm();

  return (
    <Stack spacing={2} maxWidth={300}>
      <FormCheckBox
        {...args}
        label="Red Checkbox"
        control={control}
        name="redCheckbox"
      />
      <FormCheckBox
        {...args}
        label="Blue Checkbox"
        control={control}
        name="blueCheckbox"
      />
      <FormCheckBox
        {...args}
        label="Green Checkbox"
        control={control}
        name="greenCheckbox"
      />
    </Stack>
  );
};

export const CustomCheckboxes = (args) => {
  const { control } = useForm();

  return (
    <Stack spacing={2} maxWidth={300}>
      <FormCheckBox
        {...args}
        disabled
        label="Disabled Checkbox"
        control={control}
        name="disabledCheckbox"
      />
      <FormCheckBox
        {...args}
        label="Indeterminate Checkbox"
        control={control}
        name="indeterminateCheckbox"
      />
    </Stack>
  );
};

export const MultiValueCheckboxes = (args) => {
  const { control } = useForm();

  return (
    <Stack spacing={2} maxWidth={300}>
      <FormCheckBox
        {...args}
        label="Option 1"
        control={control}
        name="option1"
      />
      <FormCheckBox
        {...args}
        label="Option 2"
        control={control}
        name="option2"
      />
      <FormCheckBox
        {...args}
        label="Option 3"
        control={control}
        name="option3"
      />
    </Stack>
  );
};
