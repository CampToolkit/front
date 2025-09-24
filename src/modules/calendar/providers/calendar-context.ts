import { createContext, type Dispatch, useContext } from 'react';
import dayjs, { type Dayjs } from 'dayjs';

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
};

export const CalendarContext = createContext<CalendarContextType>(DEFAULT_VALUES);

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error('useCalendarContext must be used within CalendarContext');
  }
  return context;
};
