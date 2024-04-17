import { useFormContext } from 'react-hook-form';

import { FormBox } from '@/components/Common/FormBox';
import { FormInputText } from '@/components/Common/FormInputText';
import { TextFormInput } from '@/components/Common/TextFormInput';

import { SiteUserFormValue } from '../types';

export const UserAccountForm = () => {
  const { control, watch } = useFormContext<SiteUserFormValue>();

  const newPassword = watch('password');

  return (
    <FormBox>
      <TextFormInput title="이름">
        <FormInputText
          name="name"
          control={control}
          defaultValue=""
          rules={{
            required: '사용자 이름을 입력해주세요',
            maxLength: {
              value: 15,
              message: '이름은 최대 15자입니다.',
            },
          }}
          textFieldProps={{
            label: '본인 이름을 입력해주세요',
            fullWidth: true,
            type: 'text',
          }}
        />
      </TextFormInput>
      <TextFormInput title="새로운 비밀번호">
        <FormInputText
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: '새 비밀번호를 입력해주세요' }}
          textFieldProps={{
            label: '새 비밀번호',
            fullWidth: true,
            type: 'password',
          }}
        />
      </TextFormInput>
      <TextFormInput title="새로운 비밀번호 확인">
        <FormInputText
          name="confirmPassword"
          control={control}
          defaultValue=""
          rules={{
            required: '비밀번호를 다시 입력해주세요',
            validate: (value) =>
              value === newPassword || '입력한 비밀번호와 일치하지 않습니다.',
          }}
          textFieldProps={{
            label: '비밀번호 확인',
            fullWidth: true,
            type: 'password',
          }}
        />
      </TextFormInput>
    </FormBox>
  );
};
