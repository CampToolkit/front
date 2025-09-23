import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import { RouterProvider } from 'react-router-dom';
import AppThemeProvider from './providers/theme/ThemeProvider';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { router } from '@/app/providers/router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
        <RouterProvider router={router} />
      </LocalizationProvider>
    </AppThemeProvider>
  </StrictMode>,
);
