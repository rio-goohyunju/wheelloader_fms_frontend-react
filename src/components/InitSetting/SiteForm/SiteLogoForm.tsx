import { useFormContext } from 'react-hook-form';

import { FormFileInput } from '@/components/Common/FormFileInput';

export const SiteLogoForm = () => {
  const { control } = useFormContext();

  return (
    <FormFileInput
      name="site.logoPhoto"
      control={control}
      inputProps={{
        inputProps: { accept: 'image/*' },
        type: 'file',
        fullWidth: true,
      }}
    />
  );
};
