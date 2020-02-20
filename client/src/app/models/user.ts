import { Church } from './church';
import { Team } from './team';

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  church: Church;
  team: Team;
  createdAt: string;
  updatedAt: string;
  _v: number;
}
