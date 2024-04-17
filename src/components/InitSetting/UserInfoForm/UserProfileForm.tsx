import { Box } from '@mui/material';
import { useFormContext } from 'react-hook-form';

import { FormBox } from '@/components/Common/FormBox';
import { FormFileInput } from '@/components/Common/FormFileInput';
import { FormInputText } from '@/components/Common/FormInputText';
import { TextFormInput } from '@/components/Common/TextFormInput';

export const UserProfileForm = () => {
  const { control } = useFormContext();

  return (
    <FormBox>
      <TextFormInput title="소속">
        <FormInputText
          name="department"
          defaultValue=""
          control={control}
          rules={{
            required: '소속을 입력해주세요',
            pattern: {
              value: /^[가-힣]*$/,
              message: '한글만 입력 가능합니다.',
            },
            maxLength: {
              value: 15,
              message: '소속명 길이가 너무 깁니다 (15자 이하)',
            },
          }}
          textFieldProps={{
            label: '소속을 입력해주세요',
            fullWidth: true,
            type: 'text',
          }}
        />
      </TextFormInput>
      <TextFormInput title="사진">
        <Box width="100%">
          <FormFileInput
            name="profilePhoto"
            defaultValue=""
            control={control}
            inputProps={{
              inputProps: { accept: 'image/*' },
              type: 'file',
              fullWidth: true,
            }}
          />
        </Box>
      </TextFormInput>
      <TextFormInput title="직책">
        <FormInputText
          name="position"
          defaultValue=""
          control={control}
          rules={{
            required: '직책을 입력해주세요',
            pattern: {
              value: /^[가-힣]*$/,
              message: '한글만 입력 가능합니다.',
            },
            maxLength: {
              value: 8,
              message: '직챙명 길이가 너무 깁니다 (8자 이하)',
            },
          }}
          textFieldProps={{
            label: '직책을 입력해주세요',
            fullWidth: true,
            type: 'text',
          }}
        />
      </TextFormInput>
      <TextFormInput title="연락처">
        <FormInputText
          name="phoneNumber"
          defaultValue=""
          control={control}
          rules={{
            required: '사용자 핸드폰 번호를 입력해주세요',
            pattern: {
              value: /^\d{11}$/,
              message:
                '올바른 핸드폰 번호 형식을 입력해주세요 (ex: 01012345678)',
            },
          }}
          textFieldProps={{
            label: '- 없이 입력해주세요',
            fullWidth: true,
          }}
        />
      </TextFormInput>
    </FormBox>
  );
};
