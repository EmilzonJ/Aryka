import {addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, query, setDoc, where} from "firebase/firestore";

import {db} from "@/firebase";

import {Appointment, AppointmentFirebase, AppointmentUpsertModel} from "@/features/appointments/models";
import {SnackbarUtilities} from "@/utilities";
import {getServicesByIds} from "@/features/services/services";

export const createAppointment = async (appointment: AppointmentUpsertModel) => {
  try {
    console.log('create');
    console.log(appointment);
    await addDoc(collection(db, "appointments"), {...appointment});
    SnackbarUtilities.success('Cita creada correctamente');
  } catch (error) {
    console.log(error);
    SnackbarUtilities.error('Error al crear la cita');
  }
}

export const updateAppointment = async (appointment: AppointmentUpsertModel, id: string) => {
  try {
    await setDoc(doc(db, "appointments", id), appointment);
    SnackbarUtilities.success('Cita actualizada correctamente');
  } catch (error) {
    SnackbarUtilities.error('Error al actualizar la cita');
  }
}

export const getAllAppointments = (onDataChange: (appointments: Appointment[]) => void, userId: string) => {
  const dbAppointmentsRef = query(collection(db, "appointments"), where("userId", "==", userId));

  return onSnapshot(dbAppointmentsRef,
    (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()} as unknown as Appointment));
      onDataChange(data);
    }, () => {
      SnackbarUtilities.error('Error al obtener las citas');
    },
  );
};

export const getAppointmentById = async (id: string) => {
  const appointmentRef = await doc(db, "appointments", id);

  const appointmentDoc = await getDoc(appointmentRef);
  const appointment = appointmentDoc.data() as AppointmentFirebase;

  const servicesIds = appointment.services;
  const services = await getServicesByIds(servicesIds);

  return {...appointment, services} as Appointment;
}

export const deleteAppointment = async (idAppointment: string) => {
  try {
    await deleteDoc(doc(db, "appointments", idAppointment));
    SnackbarUtilities.success('Cita eliminada');
  } catch (error) {
    SnackbarUtilities.error('Error al eliminar la cita');
  }
}


