import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import { RouterProvider } from 'react-router-dom';
import AppThemeProvider from './providers/theme/ThemeProvider';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { router } from '@/app/providers/router';
import { ModalProvider } from '@/app/providers/global-modal/ModalProvider.tsx';
import { ruRU } from '@mui/x-date-pickers/locales';

import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <AppThemeProvider>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale="ru"
          localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
        >
          <RouterProvider router={router} />
        </LocalizationProvider>
      </AppThemeProvider>
    </ModalProvider>
  </StrictMode>,
);
