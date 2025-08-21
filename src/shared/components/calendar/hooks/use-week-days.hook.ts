import { useMemo } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';

dayjs.extend(isoWeek);

export function useWeekDays(date: Dayjs) {
  return useMemo(() => {
    const startOfWeek = date.startOf('isoWeek');
    return Array.from(Array(7)).map((_, i) => startOfWeek.add(i, 'day'));
  }, [date]);
}
