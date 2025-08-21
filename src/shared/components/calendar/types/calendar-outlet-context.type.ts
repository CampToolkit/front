import type { DayScheduleType } from '@/shared/components/calendar/types/day-schedule.type';
import type { Dispatch, SetStateAction } from 'react';
import type { Dayjs } from 'dayjs';

type CalendarOutletContextType = {
  currentDate: Dayjs;
  schedules: DayScheduleType[];
  setCurrentDate: Dispatch<SetStateAction<Dayjs>>;
};

export type { CalendarOutletContextType };
