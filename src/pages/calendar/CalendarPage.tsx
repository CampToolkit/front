import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import PageTitle from '@/shared/components/PageTitle.tsx';

import type { DayScheduleType } from '@/shared/components/calendar/types/day-schedule.type';
import { useCalendarContext } from '@/shared/components/calendar/hooks/use-calendar-context.hook.ts';

export default function CalendarPage() {
  const [schedules, setSchedules] = useState<DayScheduleType[]>([]);
  const [currentDate, setCurrentDate] = useState<Date | null>(new Date());

  const { role, spyingPersonId } = useCalendarContext();

  useEffect(() => {
    setSchedules([]);
  }, []);

  return (
    <Box>
      <PageTitle title="Расписание" />
      <Outlet context={{ schedules, currentDate, setCurrentDate }} />
    </Box>
  );
}
