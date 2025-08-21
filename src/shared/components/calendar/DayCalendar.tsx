import { Box, Typography } from '@mui/material';

import 'dayjs/locale/ru';

import PageTitle from '@/shared/components/PageTitle.tsx';
import { useOutletContext } from 'react-router-dom';
import type { CalendarOutletContextType } from './types/calendar-outlet-context.type';

export default function DayCalendar() {
  const { currentDate } = useOutletContext<CalendarOutletContextType>();

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <PageTitle title="Расписание" />
        <Typography variant="body1">{currentDate.toDateString()}</Typography>
      </Box>
    </Box>
  );
}
