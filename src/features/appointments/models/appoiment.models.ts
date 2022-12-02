import firebase from "firebase/compat";
import Timestamp = firebase.firestore.Timestamp;

export interface Appointment {
  id: string;
  customer: string;
  customerPhone: string;
  description: string;
  startDate: Timestamp;
  endDate: Timestamp;
  userId: string;
}
