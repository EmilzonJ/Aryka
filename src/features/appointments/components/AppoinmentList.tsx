import {getAllAppointments} from "@/features/appointments/services";

export const AppointmentList = () => {

  const appointments = getAllAppointments();

  return (
    <>
      {JSON.stringify(appointments)}
    </>
  )
}
