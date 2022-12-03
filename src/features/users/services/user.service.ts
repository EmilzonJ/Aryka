import {User} from '@/features/users/models';
import {collection, onSnapshot} from "firebase/firestore";
import {db} from "@/firebase";
import {SnackbarUtilities} from "@/utilities";


export const getAllUsers = (onDataChange: (services: User[]) => void) => {
    const Users = collection(db, "users");
    return onSnapshot(Users, (querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()} as unknown as User));
            console.log(data)
            onDataChange(data);
        },
        () => {
            SnackbarUtilities.error('Error al obtener los usuarios');
        },
    )
}; 