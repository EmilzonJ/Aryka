import {getAllAppointments} from "@/features/appointments/services";
import {useEffect, useState} from "react";
import {Appointment} from "@/features/appointments/models";
import {useAuth} from "@/context";
import {DataTable, FormDialog} from "@/components";
import {appointmentColumns} from "@/features/appointments/components";

export const AppointmentList = () => {
  const {user} = useAuth()
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const onDelete = async (id: string) => {
    console.log(id);
  }

  const onEdit = (id: string) => {
    console.log(id);
  }

  useEffect(() => {
    if (!user) return;
    const unsubscribe = getAllAppointments(
      (data) => setAppointments(data),
      user?.uid as string);
    return () => unsubscribe();
  }, []);

  return (
    <>
      <FormDialog/>
      <DataTable columns={appointmentColumns} rows={appointments} onEdit={onEdit} onDelete={onDelete}/>
    </>
  )
}
