import { useCallback, useEffect, useState } from 'react';

import type { Sportsman } from '@/common/api/sportsman/SportsmanApi.type.ts';
import { SportsmanApi } from '@/common/api/sportsman/SportsmanApi.ts';

export function useSportsmanApi(campId?: number) {
  const [state, setState] = useState<Sportsman[]>([]);

  const fetch = useCallback(async () => {
    let response: Sportsman[];
    if (campId) {
      response = await SportsmanApi.getByCamp(campId);
    } else {
      response = await SportsmanApi.getAll();
    }
    setState(response);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { state, fetch };
}
