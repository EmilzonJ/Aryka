import {collection, doc, onSnapshot, query, addDoc, where, documentId, deleteDoc} from "firebase/firestore";

import {db} from "@/firebase";

import {Appointment, AppointmentCreateModel} from "@/features/appointments/models";
import {SnackbarUtilities} from "@/utilities";

export const createAppointment = async (appointment: AppointmentCreateModel) => {
  try {
    await addDoc(collection(db, "appointments"), {...appointment});
    SnackbarUtilities.success('Cita creada correctamente');
  } catch (error) {
    SnackbarUtilities.error('Error al crear la cita');
  }
}

export const getAllAppointments = (onDataChange: (appointments: Appointment[]) => void, userId: string) => {
  const dbAppointmentsRef = query(collection(db, "appointments"), where("userId", "==", userId));

  return onSnapshot(dbAppointmentsRef,
    (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()} as unknown as Appointment));
      onDataChange(data);
    }, (error) => {
      SnackbarUtilities.error('Error al obtener las citas');
    },
  );
};

export const deleteAppointment = async (idAppointment: string) => {
  try {
    await deleteDoc(doc(db, "appointments", idAppointment));
    SnackbarUtilities.success('Cita eliminada');
  } catch (error) {
    SnackbarUtilities.error('Error al eliminar la cita');
  }
}


