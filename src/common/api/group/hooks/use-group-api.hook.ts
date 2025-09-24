import { useCallback, useEffect, useState } from 'react';
import type { Group } from '@/common/api/group/GroupApi.type.ts';
import { GroupApi } from '../GroupApi';

export function useGroupApi(campId?: number) {
  const [state, setState] = useState<Group[]>([]);

  const fetch = useCallback(async () => {
    let response: Group[];
    if (campId) {
      response = await GroupApi.getByCamp(campId);
    } else {
      response = await GroupApi.getAll();
    }
    setState(response);
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  return { state, fetch };
}
