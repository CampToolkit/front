import { Box, Typography } from '@mui/material';

import { useCalendarContext } from '@/modules/calendar/providers/calendar-context.ts';

export default function DayCalendar() {
  const { currentDate } = useCalendarContext();

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
