type roleType = 'sportsman' | 'sportsman-independent' | 'coach' | 'parent';
type CalendarContextType =
  | {
      role: 'coach';
      campId: number;
      coachId: number;
    }
  | {
      role: 'sportsman' | 'parent';
      campId: number;
      groupId: number;
      sportsmanId: number;
    };

export function useCalendarContext(role: roleType): CalendarContextType {
  if (role === 'coach') {
    return {
      role: 'coach',
      campId: 1,
      coachId: 1,
    };
  }

  return {
    role: 'sportsman',
    campId: 1,
    groupId: 1,
    sportsmanId: 1,
  };
}
