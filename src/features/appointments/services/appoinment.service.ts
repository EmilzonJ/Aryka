import {Appointment} from "@/features/appointments/models";

const appointments: Appointment[] = [
  {
    id: "1",
    customer_name: "John Doe",
  }
]

export const getAllAppointments = (): Appointment[] => {
  //TODO: fetch appointments from firebase
  return appointments;
}
