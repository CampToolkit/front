import dayjs, { type Dayjs } from 'dayjs';

import {
  overlapEvents,
  type DistributedEvent,
} from '@/modules/calendar/utils/distribute-events/overlap-events.ts';
import { isSameDay } from '@/modules/calendar/utils/distribute-events/filter-by-date.ts';
import type { Event } from '@/common/api/event/EventApi.type.ts';

interface Params {
  list: Event[];
  currentDate: Dayjs;
}

export function distributeEvents({ list, currentDate }: Params): DistributedEvent {
  const grouped = list.filter((item) => isSameDay(dayjs(item.startDate), currentDate));

  return overlapEvents(grouped);
}
