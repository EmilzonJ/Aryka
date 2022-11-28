import {collection, query, where, getDocs} from "firebase/firestore";

import {db} from "@/firebase";

import {Appointment} from "@/features/appointments/models";
import {getCurrentUser} from "@/features/users/services";
import {SnackbarUtilities} from "@/utilities";

export const getAllAppointments = async (): Promise<Appointment[]> => {

  const appointments: Appointment[] = [];

  try {
    const currentUser = await getCurrentUser();

    const appointmentsRef = collection(db, "appointments");
    const q = query(appointmentsRef, where("userId", "==", currentUser?.uid));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      appointments.push(doc.data() as Appointment);
    });
  } catch (error) {
    SnackbarUtilities.error('Error al obtener las citas');
  }

  return appointments;
}
