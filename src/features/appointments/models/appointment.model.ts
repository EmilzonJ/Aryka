import firebase from "firebase/compat";
import {Service} from "@/features/services/models";
import Timestamp = firebase.firestore.Timestamp;

export interface Appointment {
  id: string;
  customer: string;
  customerPhone: string;
  services: Service[];
  description: string;
  startDate: Timestamp;
  endDate: Timestamp;
  userId: string;
}

