import {collection, onSnapshot, query, where} from "firebase/firestore";

import {db} from "@/firebase";

import {Appointment} from "@/features/appointments/models";
import {SnackbarUtilities} from "@/utilities";


export const getAllAppointments = (onDataChange: (appointments: Appointment[]) => void, userId: string) => {
  const dbAppointmentsRef = query(collection(db, "appointments"), where("userId", "==", userId));

  return onSnapshot(dbAppointmentsRef,
    (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()} as unknown as Appointment));
      console.log("data", data);
      onDataChange(data);
    }, (error) => {
      SnackbarUtilities.error('Error al obtener las citas');
    },
  );
};


