import {
  CalendarContext,
  type CalendarViewModeType,
  CALENDAR_VIEW_MODE_OPTION,
} from '@/modules/calendar/providers/calendar-context.ts';
import { type ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import dayjs, { type Dayjs } from 'dayjs';
import type { Event } from '@/common/api/event/EventApi.type.ts';
import type { GetLessonDto } from '@/common/api/event/EventApi.dto.ts';
import { EventApi } from '@/common/api/event/EventApi.ts';

interface Props {
  children: ReactNode;
}

export const CalendarContextProvider = ({ children }: Props) => {
  const [viewMode, setViewMode] = useState<CalendarViewModeType>(CALENDAR_VIEW_MODE_OPTION.DAY);
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());
  const [events, setEvents] = useState<Event[]>([]);

  const fetchEvents = useCallback(async (params: GetLessonDto) => {
    const data = await EventApi.getAll({ ...params });
    setEvents(data);
  }, []);

  useEffect(() => {
    fetchEvents({ campId: 1, eventId: 1 });
  }, [fetchEvents]);

  const value = useMemo(
    () => ({
      viewMode,
      setViewMode,
      currentDate,
      setCurrentDate,
      events,
      fetchEvents,
    }),
    [viewMode, currentDate, events, fetchEvents],
  );

  return <CalendarContext.Provider value={value}>{children}</CalendarContext.Provider>;
};
