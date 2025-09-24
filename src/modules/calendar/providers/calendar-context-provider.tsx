import {
  CalendarContext,
  type CalendarViewModeType,
  CALENDAR_VIEW_MODE_OPTION,
} from '@/modules/calendar/providers/calendar-context.ts';
import { type ReactNode, useMemo, useState } from 'react';
import dayjs, { type Dayjs } from 'dayjs';

interface Props {
  children: ReactNode;
}

export const CalendarContextProvider = ({ children }: Props) => {
  const [viewMode, setViewMode] = useState<CalendarViewModeType>(CALENDAR_VIEW_MODE_OPTION.DAY);
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());
  const viewModeMemo = useMemo(
    () => ({
      viewMode,
      setViewMode,
    }),
    [viewMode],
  );

  const currentDateMemo = useMemo(
    () => ({
      currentDate,
      setCurrentDate,
    }),
    [currentDate],
  );
  return (
    <CalendarContext.Provider value={{ ...viewModeMemo, ...currentDateMemo }}>
      {children}
    </CalendarContext.Provider>
  );
};
