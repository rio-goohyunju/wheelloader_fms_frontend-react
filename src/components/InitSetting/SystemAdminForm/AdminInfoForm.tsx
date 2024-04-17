import { useEffect } from 'react';

import { useFormContext } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';

import { FormBox } from '@/components/Common/FormBox';
import { TextFormInput } from '@/components/Common/TextFormInput';
import { useInitContext } from '@/hooks/constate/InitContext';

import { FormInputText } from '../../Common/FormInputText';

export const AdminInfoForm = () => {
  const { control, watch } = useFormContext();
  const navigate = useNavigate();
  const { siteID } = useParams<{ siteID: string }>();
  const { setIsLoading } = useInitContext();

  useEffect(() => {
    if (!siteID) navigate('/admin/signin');
    setIsLoading(false);
  }, [siteID]);
  const newPassword = watch('user.newPassword');

  return (
    <FormBox>
      <TextFormInput title="새로운 비밀번호">
        <FormInputText
          name="user.newPassword"
          defaultValue=""
          control={control}
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
          name="user.confirmPassword"
          defaultValue=""
          control={control}
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
