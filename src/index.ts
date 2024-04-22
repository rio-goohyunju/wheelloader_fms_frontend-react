import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { AuthProvider } from './hooks/constate/AuthContext';
import { StyledToastContainer } from './hooks/toast/toastStyle';
// import { worker } from './mocks/worker';
import { ThemeProvider } from './theme';

if (process.env.REACT_APP_ENV === 'dev') {
  worker.start();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
  queryCache: new QueryCache(),
});

const rootElement = document.getElementById('root');

if (rootElement) {
  if (ReactDOM.createRoot) {
    // React 18
    ReactDOM.createRoot(rootElement).render(<App />);
  } else {
    // React 17 and below
    ReactDOM.render(<App />, rootElement);
  }
} else {
  console.error('Root element not found');
}

dayjs.locale('ko');
dayjs.extend(duration);

ReactDOM.createRoot(rootElement).render(
  <CookiesProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider>
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
