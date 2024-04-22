import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '../tanstack/react-query';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { AuthProvider } from './hooks/constate/AuthContext';
import { StyledToastContainer } from './hooks/toast/toastStyle';
// import { worker } from './mocks/worker';
import { router } from './routes';

import 'dayjs/locale/ko';

// if (process.env.REACT_APP_ENV === 'dev') {
//   worker.start();
// }

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as HTMLElement);
dayjs.locale('ko');
dayjs.extend(duration);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
  queryCache: new QueryCache(),
});

root.render(
  <QueryClientProvider>
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
        <AuthProvider>
          <CookiesProvider>
            <StyledToastContainer newestOnTop />
            <RouterProvider router={router} />
          </CookiesProvider>
        </AuthProvider>
      </LocalizationProvider>
    </ThemeProvider>
  </QueryClientProvider>
);
