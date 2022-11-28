
export interface Appointment {
  id: string;
  customer: string;
  customerPhone: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: string;
  userId: string;
}
