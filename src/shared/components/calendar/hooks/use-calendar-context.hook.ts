import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

type CalendarRoleType = 'coach' | 'sportsman';

type CalendarContextType = {
  role: CalendarRoleType;
  spyingPersonId: number | null;
};

export function useCalendarContext(): CalendarContextType {
  const [searchParams] = useSearchParams();
  const role = (searchParams.get('role') as CalendarRoleType) ?? 'sportsman';

  const spyingPersonIdParam = searchParams.get('spyingPersonId');
  const spyingPersonId = spyingPersonIdParam ? Number(spyingPersonIdParam) : null;

  return useMemo(() => {
    return {
      role,
      spyingPersonId,
    };
  }, [role, spyingPersonId]);
}
