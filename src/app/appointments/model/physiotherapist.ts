import {User} from "../../security/model/user";

export interface Physiotherapist {
  id: number,
  dni: string,
  specialization: string,
  age: number,
  location: string,
  photoUrl: string,
  birthdayDate: string,
  rating: number,
  consultationQuantity: number,
  patientQuantity: number,
  yearsExperience: number,
  fees: number,
  user: User
}
