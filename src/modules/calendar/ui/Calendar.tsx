import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import dayjs, { Dayjs } from 'dayjs';

import { Box } from '@mui/material';
import PageTitle from '@/common/components/PageTitle.tsx';
import type { DayScheduleType } from '@/modules/calendar/types/day-schedule.type.ts';
import type { TabType } from '@/common/types/tabs.type.ts';

import WeekCalendar from '@/modules/calendar/ui/WeekCalendar.tsx';
import DayCalendar from '@/modules/calendar/ui/DayCalendar.tsx';

const TABS: TabType[] = [
  {
    name: 'День',
    path: 'day-calendar',
    component: DayCalendar,
  },
  {
    name: 'Неделя',
    path: 'week-calendar',
    component: WeekCalendar,
  },
];

export default function Calendar() {
  const [schedules, setSchedules] = useState<DayScheduleType[]>([]);
  const [currentDate, setCurrentDate] = useState<Dayjs | null>(dayjs());

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
