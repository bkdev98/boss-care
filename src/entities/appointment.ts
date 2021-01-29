import {ISpecialist} from './specialist';

export interface IAppointment {
  specialist: ISpecialist;
  date: Date;
}
