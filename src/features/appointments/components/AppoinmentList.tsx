import {getAllAppointments} from "@/features/appointments/services";
import {useEffect, useState} from "react";
import {Appointment} from "@/features/appointments/models";

export const AppointmentList = () => {

  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const appointmentsList = async () => {
    return await getAllAppointments();
  }

  useEffect(() => {
    appointmentsList().then((appointments) => {
      setAppointments(appointments);
    });
  }, [appointments]);

  return (
    <>
      <h1>Appointments</h1>
      <ul>
        {appointments.map((appointment) => (
            <li key={appointment.userId}>
              {
                appointment.customer + "   " +
                appointment.customerPhone + "   " +
                appointment.description + "   " +
                appointment.startDate + "   " +
                appointment.endDate + "   " +
                appointment.status + "   " +
                appointment.userId
              }
            </li>
          )
        )}
      </ul>
    </>
  )
}
