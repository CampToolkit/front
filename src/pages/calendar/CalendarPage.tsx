import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import dayjs from 'dayjs';
import { Dayjs } from 'dayjs';

import { useCalendarContext } from '@/shared/components/calendar/hooks/use-calendar-context.hook.ts';

import { Box } from '@mui/material';
import PageTitle from '@/shared/components/PageTitle.tsx';

import type { DayScheduleType } from '@/shared/components/calendar/types/day-schedule.type';

export default function CalendarPage() {
  const [schedules, setSchedules] = useState<DayScheduleType[]>([]);
  const [currentDate, setCurrentDate] = useState<Dayjs | null>(dayjs());

  const { role, spyingPersonId } = useCalendarContext();

  useEffect(() => {
    setSchedules([]);
  }, []);

  return (
    <Box>
      <PageTitle title="Расписание" showBackButton={true} />
      <Outlet context={{ schedules, currentDate, setCurrentDate }} />
    </Box>
  );
}
