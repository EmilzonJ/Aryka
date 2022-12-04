import {Service} from '@/features/services/models';
import {collection, onSnapshot, doc, deleteDoc, setDoc} from "firebase/firestore";
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

export const deleteService = async (idService: string) => {
    //TO DO: ventana que pregunte al usuario si desea eliminar el servicio
    await deleteDoc(doc(db, "services",idService));
};

export const updateService = (idService: string) =>{
    
};

export const createService = async (service: Service[]) =>{
    //const postID = postRef.key;
    await setDoc(doc(db,"services","newId"),{service});
}

