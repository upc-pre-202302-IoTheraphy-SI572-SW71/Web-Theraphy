import {Theraphy} from "./theraphy";

export interface Appointment {
  id: number;
  done: boolean;
  topic: string;
  diagnosis: string;
  date: string;
  hour: string;
  place: string;
  theraphy: Theraphy;

}
