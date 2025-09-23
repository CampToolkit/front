import type { Person } from '@/common/api/lib/types/Person.type';

export interface Sportsman extends Person {
  birthDate: string;
  createdAt: string;
  updatedAt: string;
}
