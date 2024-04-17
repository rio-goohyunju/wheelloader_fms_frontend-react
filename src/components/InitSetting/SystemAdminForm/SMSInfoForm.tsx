import { useEffect, useState } from 'react';

import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import { FormBox } from '@/components/Common/FormBox';
import { TextFormInput } from '@/components/Common/TextFormInput';
import { useInitContext } from '@/hooks/constate/InitContext';
import { useTestSMS } from '@/hooks/remote';
import { showToast } from '@/hooks/toast/toastUtils';

import { FormInputText } from '../../Common/FormInputText';
import { FormRadio } from '../../Common/FormRadio';
import { SystemAdminFormValue } from '../types';

export const SMSInfoForm = () => {
  const { control, watch, getValues } = useFormContext<SystemAdminFormValue>();
  const smsValues = watch('sms');

  const navigate = useNavigate();
  const { mutateAsync: sendTestSMS } = useTestSMS();
  const { siteID } = useParams<{ siteID: string }>();
  const { setIsLoading } = useInitContext();
  const [logMessages, setLogMessages] = useState<string[]>([]);

  useEffect(() => {
    if (!siteID) navigate('/admin/signin');
    setIsLoading(true);
  }, [siteID]);

  const handleTestSubmit = async () => {
    try {
      const isSmsFilled = Object.values(smsValues).every(
        (value) => value !== undefined && value !== ''
      );
      if (!siteID) return;
      if (isSmsFilled) {
        const data = { ...getValues('sms'), ...getValues('smsTest') };
        const res = await sendTestSMS(data);
        setLogMessages((prev) => [res.message, ...prev]);
        showToast('success', '테스트 문자 전송에 성공했습니다.');
        setIsLoading(false);
      }
    } catch (e) {
      showToast('error', '테스트 문자 전송에 실패했습니다.');
    }
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <SMSForm control={control} />
      </Grid>
      <Grid item xs={6}>
        <FormBox>
          <TextFormInput title="수신번호">
            <FormInputText
              name="smsTest.testRecipientPhoneNumber"
              defaultValue=""
              control={control}
              rules={{
                required: '사용자 핸드폰 번호를 입력해주세요 (-제외)',
                pattern: {
                  value: /^\d{11}$/,
                  message:
                    '올바른 핸드폰 번호 형식을 입력해주세요 (ex: 01012345678)',
                },
              }}
              textFieldProps={{
                label: '테스트 수신 번호',
                fullWidth: true,
                placeholder: '휴대폰 번호를 입력해주세요 (-제외)',
              }}
            />
          </TextFormInput>
          <TextFormInput title="문자 내용">
            <FormInputText
              name="smsTest.testContent"
              defaultValue=""
              control={control}
              textFieldProps={{
                label: '테스트 메세지를 입력해주세요',
                fullWidth: true,
                type: 'text',
              }}
            />
          </TextFormInput>
          <Button variant="contained" type="submit" onClick={handleTestSubmit}>
            테스트
          </Button>
          <Box>
            <Typography variant="subtitle1">테스트 로그</Typography>
            <List
              sx={{
                height: '100%',
                maxHeight: '11.25rem',
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

const SMSForm = ({ control }) => {
  return (
    <FormBox>
      <TextFormInput title="기본설정명">
        <FormInputText
          name="sms.alias"
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
      <TextFormInput title="API Key">
        <FormInputText
          name="sms.apiKey"
          defaultValue=""
          control={control}
          rules={{ required: 'API Key를 입력해주세요' }}
          textFieldProps={{
            label: 'API Key 값을 입력해주세요',
            fullWidth: true,
            type: 'text',
          }}
        />
      </TextFormInput>
      <TextFormInput title="발신자 번호">
        <FormInputText
          name="sms.senderPhoneNumber"
          defaultValue=""
          control={control}
          rules={{
            required: '발신자 번호를 입력해주세요',
            pattern: {
              value: /^\d{11}$/,
              message:
                '올바른 핸드폰 번호 형식을 입력해주세요 (ex: 01012345678)',
            },
          }}
          textFieldProps={{
            label: '발신자 번호',
            fullWidth: true,
            type: 'tel',
          }}
        />
      </TextFormInput>
      <TextFormInput title="대행사">
        <FormRadio
          name="sms.agency"
          defaultValue=""
          control={control}
          rules={{ required: '대행사를 선택해주세요' }}
          group={[
            { value: 'SEJONG', label: '세종' },
            { value: 'GABIA', label: '가비아' },
          ]}
          label="대행사를 선택해주세요"
        />
      </TextFormInput>
    </FormBox>
  );
};
