type PersonType = {
  id: number;
  lastName: string;
  firstName: string;
  patrName: string;
};

type PracticeSessionType = {
  campId: number;
  groupId: number;
  practiceType: string;
  auditorium: string;
  coach: PersonType;
};

type DayScheduleType = {
  date: Date;
  practiceSession: PracticeSessionType;
};

export type { DayScheduleType };
