import {Service} from '@/features/services/models';
import {collection, deleteDoc, doc, getDoc, onSnapshot, setDoc} from "firebase/firestore";
import {db} from "@/firebase";
import {SnackbarUtilities} from "@/utilities";


export const getAllServices = (onDataChange: (services: Service[]) => void) => {
  const serviceRef = collection(db, "services");
  return onSnapshot(serviceRef, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()} as unknown as Service));
      onDataChange(data);
    },
    () => {
      SnackbarUtilities.error('Error al obtener los servicios');
    },
  )
};

export const getServicesByIds = async (servicesIds: string[] = []): Promise<Service[]> => {
  const services: Service[] = [];
  for (const serviceId of servicesIds) {
    const serviceRef = doc(db, "services", serviceId);
    const serviceDoc = await getDoc(serviceRef);
    const service = {...serviceDoc.data(), id: serviceDoc.id} as Service;
    services.push(service);
  }

  return services;
}

export const deleteService = async (idService: string) => {
  try {
    await deleteDoc(doc(db, "services", idService));
    SnackbarUtilities.success('Servicio eliminado');
  } catch (error) {
    SnackbarUtilities.error('Error al eliminar el servicio');
  }
};

export const updateService = (idService: string) => {

};

export const createService = async (service: Service[]) => {
  //const postID = postRef.key;
  await setDoc(doc(db, "services", "newId"), {service});
}

