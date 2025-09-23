import type { Camp } from '@/common/api/camp/CampApi.type.ts';
import { useCallback, useEffect, useState } from 'react';
import { CampApi } from '@/common/api/camp/CampApi.ts';

interface UseCampApiResult {
  camp: Camp | null;
  camps: Camp[];
  fetch: (campId?: number) => Promise<void>;
}

export function useCampApi(campId?: number): UseCampApiResult {
  const [state, setState] = useState<Camp[]>([]);
  const [isSingleCamp, setIsSingleCamp] = useState(false);

  const fetch = useCallback(async () => {
    if (campId) {
      const response = await CampApi.getOne(campId);
      setState([response]);
      setIsSingleCamp(true);
    } else {
      const response = await CampApi.getAll();
      setState(response);
      setIsSingleCamp(false);
    }
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    camp: isSingleCamp ? (state[0] ?? null) : null,
    camps: state,
    fetch,
  };
}
