export interface IReminder {
  id: string;
  name: string;
  isOnce?: boolean;
  time?: Date;
  periodNumber?: number;
  periodUnit?: 'day' | 'week' | 'month' | 'year';
}
