import type { DayScheduleType } from '@/shared/components/calendar/types/day-schedule.type';
import type { Dispatch } from 'react';

type CalendarOutletContextType = {
  currentDate: Date;
  schedules: DayScheduleType[];
  setCurrentDate: Dispatch<React.SetStateAction<DayScheduleType[]>>;
};

export type { CalendarOutletContextType };
