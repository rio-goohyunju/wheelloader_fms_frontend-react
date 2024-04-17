import { useEffect } from 'react';

import { useFormContext } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import { FormBox } from '@/components/Common/FormBox';
import { TextFormInput } from '@/components/Common/TextFormInput';
import { useInitContext } from '@/hooks/constate/InitContext';

import { FormInputText } from '../../Common/FormInputText';

export const SystemInfoForm = () => {
  const { control } = useFormContext();
  const navigate = useNavigate();
  const { siteID } = useParams<{ siteID: string }>();
  const { setIsLoading } = useInitContext();
  useEffect(() => {
    if (!siteID) navigate('/admin/signin');
    setIsLoading(false);
  }, [siteID]);

  return (
    <FormBox>
      <TextFormInput title="시스템 이름">
        <FormInputText
          name="system.systemName"
          defaultValue=""
          control={control}
          rules={{
            required: '시스템 이름을 설정해주세요',
            maxLength: {
              value: 30,
              message: '시스템 이름의 길이가 너무 깁니다.',
            },
          }}
          textFieldProps={{
            label: '시스템 이름을 설정해주세요 (30자 제한)',
            fullWidth: true,
            type: 'text',
          }}
        />
      </TextFormInput>
    </FormBox>
  );
};
