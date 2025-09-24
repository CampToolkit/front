import { createContext, type Dispatch, useContext } from 'react';
import dayjs, { type Dayjs } from 'dayjs';
import type { Event } from '@/common/api/event/EventApi.type.ts';
import type { GetLessonDto } from '@/common/api/event/EventApi.dto.ts';

export const CALENDAR_VIEW_MODE_OPTION = {
  DAY: 'DAY',
  WEEK: 'WEEK',
} as const;

export type CalendarViewModeType = keyof typeof CALENDAR_VIEW_MODE_OPTION;

interface CalendarContextType {
  viewMode: CalendarViewModeType;
  setViewMode: Dispatch<CalendarViewModeType>;
  currentDate: Dayjs;
  setCurrentDate: Dispatch<Dayjs>;
  events: Event[];
  fetchEvents: (params: GetLessonDto) => void;
}

const DEFAULT_VALUES: CalendarContextType = {
  viewMode: CALENDAR_VIEW_MODE_OPTION.WEEK,
  setViewMode: () => {
    throw new Error('It does not work without CalendarContext');
  },
  currentDate: dayjs(),
  setCurrentDate: () => {
    throw new Error('It does not work without CalendarContext');
  },

  events: [],

  fetchEvents: (params: GetLessonDto) => {
    throw new Error(`It does not work without CalendarContext; ${params}`);
  },
};

export const CalendarContext = createContext<CalendarContextType>(DEFAULT_VALUES);

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error('useCalendarContext must be used within CalendarContext');
  }
  return context;
};
