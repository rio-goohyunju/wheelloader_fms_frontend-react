import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastOptions } from 'react-toastify';

type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default';

export const showToast = (
  type: ToastType,
  message?: string,
  options: ToastOptions = {}
): void => {
  const toastOptions: ToastOptions = {
    position: toast.POSITION.TOP_CENTER,
    pauseOnFocusLoss: false,
    autoClose: 500,
    ...options,
  };

  switch (type) {
    case 'success':
      toast.success(message || '성공적으로 완료했습니다', toastOptions);
      break;
    case 'error':
      toast.error(message || '다시 시도해주세요', toastOptions);
      break;
    case 'info':
      toast.info(message, toastOptions);
      break;
    case 'warning':
      toast.warn(message, toastOptions);
      break;
    default:
      toast(message, toastOptions);
  }
};
