import {
  createAppointment,
  deleteAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment
} from "@/features/appointments/services";
import {useEffect, useState} from "react";
import {Appointment, AppointmentUpsertModel} from "@/features/appointments/models";
import {useAuth} from "@/context";
import {DataTable, FormDialog} from "@/components";
import {AppointmentUpsert} from "@/features/appointments/components";
import {appointmentColumns} from "@/features/appointments/utils";
import {deleteWithConfirm} from "@/utilities";
import {yupResolver} from "@hookform/resolvers/yup";
import {appointmentEditValidationSchema} from "@/features/appointments/validations";
import {useFormDialog} from "@/hooks";

export const AppointmentList = () => {
  const {user} = useAuth()
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [selectedRowId, setSelectedRowId] = useState('')

  const onDelete = async (id: string) => {
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
      const appointment = data as AppointmentUpsertModel;
      appointment.userId = user?.uid as string;
      await createAppointment(appointment);
    },
    onUpdateAction: async (data: unknown) => {
      await updateAppointment(data as AppointmentUpsertModel, selectedRowId);
    },
    resolver: yupResolver(appointmentEditValidationSchema),
    mapper: (data) => {
      return {
        ...data,
        startDate: data?.startDate?.toDate(),
        endDate: data?.endDate?.toDate(),
      }
    },
    defaultValues: {services: []},
  });

  const onEdit = async (id: string) => {
    setSelectedRowId(id);
    const appointment = await getAppointmentById(id);
    formDialog.handleEdit(appointment);
  }

  return (
    <>
      <FormDialog {...formDialog} title="Citas">
        <AppointmentUpsert/>
      </FormDialog>
      <DataTable
        columns={appointmentColumns}
        rows={appointments}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </>
  )
}
