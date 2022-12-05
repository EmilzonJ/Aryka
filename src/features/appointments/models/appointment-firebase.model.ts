import {Appointment} from "@/features/appointments/models";

export interface AppointmentFirebase extends Omit<Appointment, 'services'> {
  services: string[];
}
