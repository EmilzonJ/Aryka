import {Appointment} from "@/features/appointments/models";

export interface AppointmentUpsertModel extends Omit<Appointment, "id" | "services"> {
  services: string[];
}
