import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import PageTitle from '@/shared/components/PageTitle.tsx';

import type { DayScheduleType } from '@/shared/components/calendar/types/day-schedule.type';
import { useCalendarContext } from '@/shared/components/calendar/hooks/use-calenar-context.hook';

export default function CalendarPage() {
  const [schedules, setSchedules] = useState<DayScheduleType[]>([]);
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  const info = useCalendarContext('sportsman');

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

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
