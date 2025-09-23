import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import dayjs from 'dayjs';
import { Dayjs } from 'dayjs';

import { useCalendarContext } from '@/modules/calendar/hooks/use-calendar-context.hook.ts';

import { Box } from '@mui/material';
import PageTitle from '@/common/components/PageTitle.tsx';

import type { DayScheduleType } from '@/modules/calendar/types/day-schedule.type';

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
