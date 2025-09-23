import { Box, Typography } from '@mui/material';

import 'dayjs/locale/ru';

import type { CalendarOutletContextType } from '@/common/components/calendar/types/calendar-outlet-context.type.ts';
import { useOutletContext } from 'react-router-dom';

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
        <Typography variant="body1">{currentDate.format('DD.MM.YYYY')}</Typography>
      </Box>
    </Box>
  );
}
