import {ISpecialist} from './specialist';

export interface IAppointment {
  id: string;
  specialist: ISpecialist;
  date: Date;
}
