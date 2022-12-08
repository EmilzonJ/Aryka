import {User, UserDataEdit, UserUpsertData} from '@/features/users/models';
import {collection, deleteDoc, doc, getDoc, onSnapshot, setDoc} from "firebase/firestore";
import {db} from "@/firebase";
import {SnackbarUtilities} from "@/utilities";
import {signUp} from "@/auth";
import {Service, ServiceUpsertModel} from "@/features";

export const getAllUsers = (onDataChange: (services: User[]) => void) => {
  const Users = collection(db, "users");
  return onSnapshot(Users, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()} as unknown as User));
      onDataChange(data);
    },
    () => {
      SnackbarUtilities.error('Error: No es posible obtener los usuarios');
    },
  )
};

export const getUserById = async (id: string) => {
  const user = doc(db, "users", id);
  const userDoc = await getDoc(user);
  return userDoc.data() as UserDataEdit;
}

export const deleteUser = async (id: string) => {
  try {
    await deleteDoc(doc(db, "users", id));
    SnackbarUtilities.success('Usuario eliminado correctamente');
  } catch (error) {
    SnackbarUtilities.error('Error: No se pudo eliminar el usuario');
  }
};
export const updateUser = async (id: string, user: UserDataEdit) => {
  try {
    await setDoc(doc(db, "users", id), user);
    SnackbarUtilities.success("Usuario editado correctamente");
  } catch (error) {
    console.log(error);
    SnackbarUtilities.error("Error al editar el usuario");
  }
};

export const createUser = async (userDb: UserUpsertData) => {
  const userAuth = await signUp(userDb.email, userDb.password);

  if (!userAuth) return;

  try {
    await setDoc(doc(db, "users", userAuth.uid), userDb);
    SnackbarUtilities.success('Usuario creado correctamente');
  } catch (error) {
    SnackbarUtilities.error('Error: No se pudo crear el usuario');
  }

}