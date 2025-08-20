import { Box } from '@mui/material';
import WeekCalendar from '@/shared/components/calendar/WeekCalendar.tsx';
import PageTitle from '@/shared/components/PageTitle.tsx';

export default function CalendarPage() {
  return (
    <Box>
      <PageTitle title="Расписание" />
      <WeekCalendar />
    </Box>
  );
}
