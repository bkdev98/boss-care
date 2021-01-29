import {IAppointment} from '@entities/appointment';

export const BOOK_APPOINTMENT = 'BOOK_APPOINTMENT';
export function bookAppointment(appointment: IAppointment) {
  return {
    type: BOOK_APPOINTMENT,
    payload: {appointment},
  };
}

export const CANCEL_APPOINTMENT = 'CANCEL_APPOINTMENT';
export function cancelAppointment(id: string) {
  return {
    type: CANCEL_APPOINTMENT,
    payload: {id},
  };
}
