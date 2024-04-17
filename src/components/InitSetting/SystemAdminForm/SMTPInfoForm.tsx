import { useEffect, useState } from 'react';

import { LoadingButton } from '@mui/lab';
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';

import { FormBox } from '@/components/Common/FormBox';
import { TextFormInput } from '@/components/Common/TextFormInput';
import { useInitContext } from '@/hooks/constate/InitContext';
import { useTestSMTP } from '@/hooks/remote';
import { showToast } from '@/hooks/toast/toastUtils';

import { FormInputText } from '../../Common/FormInputText';
import { SystemAdminFormValue } from '../types';

export const SMTPInfoForm = () => {
  const { control, watch, getValues } = useFormContext<SystemAdminFormValue>();
  const { setIsLoading } = useInitContext();
  const smtpValues = watch('smtp');
  const navigate = useNavigate();
  const { mutateAsync: sendTestsmtp } = useTestSMTP();
  const { siteID } = useParams<{ siteID: string }>();
  const [logMessages, setLogMessages] = useState<string[]>([]);
  const [testLoading, setTestLoading] = useState(false);

  useEffect(() => {
    if (!siteID) navigate('/admin/signin');
    setIsLoading(true);
  }, [siteID]);

  const handleTestSubmit = async () => {
    try {
      const isSmtpFilled = Object.values(smtpValues).every(
        (value) => value !== undefined && value !== ''
      );

      if (!siteID) return;

      if (isSmtpFilled) {
        setTestLoading(true);
        const data = {
          ...getValues('smtp'),
          ...getValues('smtpTest'),
          siteID,
        };
        const res = await sendTestsmtp(data);
        setLogMessages((prev) => [res.message, ...prev]);
        showToast('success', '테스트 이메일 전송에 성공했습니다.');
        setTestLoading(false);
        setIsLoading(false);
      }
    } catch (e) {
      showToast('error', '테스트 이메일 전송에 실패했습니다.');
    }
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={6}>
        <SMTPForm control={control} />
      </Grid>
      <Grid item xs={6}>
        <FormBox>
          <TextFormInput title="수신 주소">
            <FormInputText
              name="smtpTest.testEmailRecipient"
              defaultValue=""
              control={control}
              rules={{
                required: '테스트 수신 이메일을 입력해주세요',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: '유효한 이메일 주소 형식으로 입력해야 합니다.',
                },
              }}
              textFieldProps={{
                label: '테스트 수신 이메일 주소',
                fullWidth: true,
                type: 'email',
              }}
            />
          </TextFormInput>
          <LoadingButton
            variant="contained"
            type="button"
            loading={testLoading}
            onClick={handleTestSubmit}
          >
            테스트
          </LoadingButton>
          <Box>
            <Typography variant="subtitle1">테스트 로그</Typography>
            <List
              sx={{
                height: '100%',
                maxHeight: '17.25rem',
                overflowY: 'scroll',
              }}
            >
              {logMessages?.map((message, index) => (
                <ListItem key={index}>
                  <ListItemText primary={message} />
                </ListItem>
              ))}
            </List>
          </Box>
        </FormBox>
      </Grid>
    </Grid>
  );
};

const SMTPForm = ({ control }) => {
  return (
    <FormBox>
      <TextFormInput title="기본설정명">
        <FormInputText
          name="smtp.alias"
          defaultValue=""
          control={control}
          textFieldProps={{
            label:
              '설정명을 입력해주세요. 입력하지 않으면 기본설정 으로 입력됩니다',
            fullWidth: true,
            type: 'text',
          }}
        />
      </TextFormInput>
      <TextFormInput title="호스트">
        <FormInputText
          name="smtp.address"
          defaultValue=""
          control={control}
          rules={{ required: 'SMTP 호스트 주소입력을 해주세요' }}
          textFieldProps={{
            label: 'SMTP 호스트 주소를 입력해주세요 (ex google.com)',
            fullWidth: true,
            type: 'text',
          }}
        />
      </TextFormInput>
      <TextFormInput title="아이디">
        <FormInputText
          name="smtp.id"
          defaultValue=""
          control={control}
          rules={{ required: 'SMTP 아이디를 입력해주세요' }}
          textFieldProps={{
            label: '사용하시는 SMTP 서비스 계정의 아이디를 입력해주세요',
            fullWidth: true,
            type: 'email',
          }}
        />
      </TextFormInput>
      <TextFormInput title="비밀번호">
        <FormInputText
          name="smtp.password"
          defaultValue=""
          control={control}
          rules={{ required: 'SMTP 비밀번호를 입력해주세요' }}
          textFieldProps={{
            label: '사용하시는 SMTP 서비스 계정의 비밀번호를 입력해주세요',
            fullWidth: true,
          }}
        />
      </TextFormInput>
      <TextFormInput title="포트 번호">
        <FormInputText
          name="smtp.port"
          defaultValue=""
          control={control}
          rules={{
            required: 'SMTP 포트번호를 입력해주세요',
            min: { value: 1, message: '1 이상의 값을 입력해주세요' },
          }}
          textFieldProps={{
            label: 'SMTP 의 포트 번호를 입력해주세요',
            fullWidth: true,
            type: 'number',
          }}
        />
      </TextFormInput>
    </FormBox>
  );
};
