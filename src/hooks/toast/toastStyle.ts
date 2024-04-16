import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const StyledToastContainer = styled(ToastContainer)`
  font-family: 'Roboto', sans-serif;

  .Toastify__toast {
    width: auto;
    font-size: 16px;
    border-radius: 20px;
    padding: 16px 28px;
  }
`;
