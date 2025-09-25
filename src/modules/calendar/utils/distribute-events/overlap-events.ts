import dayjs from 'dayjs';
import type { Event } from '@/common/api/event/EventApi.type.ts';

export type DistributedEvent = Event[][];

export function overlapEvents(data: Event[]) {
  const newData: DistributedEvent = [];

  const sorted = data.toSorted((a, b) => dayjs(a.startDate).diff(dayjs(b.startDate)));

  let currentGroup: Event[] = [];

  for (const event of sorted) {
    if (currentGroup.length === 0) {
      currentGroup.push(event);
      continue;
    }

    const lastEvent = currentGroup[currentGroup.length - 1];
    if (event.startDate < lastEvent.endDate) {
      currentGroup.push(event);
    } else {
      newData.push(currentGroup);
      currentGroup = [event];
    }
  }

  if (currentGroup.length > 0) {
    newData.push(currentGroup);
  }

  return newData;
}
