import type { Entity } from './Entity.type';

export interface Person extends Entity {
  lastName: string;
  firstName: string;
  patrName: string;
}
