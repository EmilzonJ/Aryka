import {Service} from '@/features/services/models';
import {collection, onSnapshot} from "firebase/firestore";
import {db} from "@/firebase";
import {SnackbarUtilities} from "@/utilities";


export const getAllServices = (onDataChange: (services: Service[]) => void) => {
    const serviceRef = collection(db, "services");
    return onSnapshot(serviceRef, (querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()} as unknown as Service));
            console.log(data)
            onDataChange(data);
        },
        () => {
            SnackbarUtilities.error('Error al obtener los servicios');
        },
    )
}; 

