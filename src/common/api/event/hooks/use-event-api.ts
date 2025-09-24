import { useCallback, useEffect, useState } from 'react';
import { EventApi } from '@/common/api/event/EventApi.ts';
import type { Event } from '@/common/api/event/EventApi.type';
import type { GetLessonDto } from '@/common/api/event/EventApi.dto.ts';

export function useEventApi(params: GetLessonDto) {
  const [state, setState] = useState<Event[]>([]);

  const fetch = useCallback(async (params: GetLessonDto) => {
    const data = await EventApi.getAll({ ...params });
    setState(data);
  }, []);

  useEffect(() => {
    fetch(params);
  }, []);

  return { state, fetch };
}
