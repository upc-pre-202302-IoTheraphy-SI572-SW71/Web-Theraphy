export interface Patient {
  id: number,
  dni: string,
  age: number,
  photoUrl: string,
  birthdayDate: string,
  appointmentQuantity: number,
  location: string
}

export class Patient{
  constructor(
    public id: number,
    public dni: string,
    public age: number,
    public photoUrl: string,
    public birthdayDate: string,
    public appointmentQuantity: number,
    public location: string
  ) {
  }
}
