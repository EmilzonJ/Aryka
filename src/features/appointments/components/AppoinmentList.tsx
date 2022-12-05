import {deleteAppointment, getAllAppointments} from "@/features/appointments/services";
import {useEffect, useState} from "react";
import {Appointment, AppointmentCreateModel} from "@/features/appointments/models";
import {useAuth} from "@/context";
import {DataTable, FormDialog} from "@/components";
import {AppointmentCreate} from "@/features/appointments/components";
import {appointmentColumns} from "@/features/appointments/utils";
import {deleteWithConfirm} from "@/utilities";
import {yupResolver} from "@hookform/resolvers/yup";
import {appointmentEditValidationSchema} from "@/features/appointments/validations";
import {useFormDialog} from "@/hooks";

export const AppointmentList = () => {
  const {user} = useAuth()
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const onDelete = async (id: string) => {
    console.log(id)
    await deleteWithConfirm({
      title: '¿Estás seguro de eliminar esta cita?',
      action: async () => await deleteAppointment(id),
    })
  }

  useEffect(() => {
    if (!user) return;
    const unsubscribe = getAllAppointments(
      (data) => setAppointments(data),
      user?.uid as string);
    return () => unsubscribe();
  }, []);

  const formDialog = useFormDialog({
    onCreateAction: async (data: unknown) => {
      console.log(data)
      console.log('create');
    },
    onUpdateAction: async (data: unknown) => {
      console.log(data)
      console.log('update');
    },
    resolver: yupResolver(appointmentEditValidationSchema),
    mapper: (data) => {
      return {
        ...data,
        startDate: data?.startDate?.toDate(),
        endDate: data?.endDate?.toDate(),
      }
    }
  });

  const onEdit = (id: string) => {
    const appointment = appointments.find((appointment) => appointment.id === id);
    formDialog.handleEdit(appointment as AppointmentCreateModel);
  }

  return (
    <>
      <FormDialog {...formDialog} title="Citas">
        <AppointmentCreate/>
      </FormDialog>
      <DataTable columns={appointmentColumns} rows={appointments} onEdit={onEdit} onDelete={onDelete}/>
    </>
  )
}
