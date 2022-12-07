import {LoginFormData} from "@/pages";
import {signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "@/firebase";
import {SnackbarUtilities} from "@/utilities";
import {UserFirebaseAuth} from "@/features/users/models";

interface Error {
  code: string;
}

export const login = async (data: LoginFormData) => {
  try {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    SnackbarUtilities.success('Bienvenido');
  } catch (error) {
    const {code} = error as Error;

    if (code === 'auth/wrong-password') {
      SnackbarUtilities.error('Contraseña incorrecta');
    } else if (code === 'auth/user-not-found') {
      SnackbarUtilities.error('Usuario no encontrado');
    } else if (code === 'auth/invalid-email') {
      SnackbarUtilities.error('Correo electrónico inválido');
    } else if (code === 'auth/too-many-requests') {
      SnackbarUtilities.error('Demasiados intentos');
    } else {
      SnackbarUtilities.error('Error al iniciar sesión');
    }
  }
}

export const logout = async () => {
  try {
    await signOut(auth);
    SnackbarUtilities.success('Sesión cerrada');
  } catch (error) {
    SnackbarUtilities.error('Error al cerrar sesión');
  }
}

export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user as unknown as UserFirebaseAuth;
  } catch (error) {
    const {code} = error as Error;

    if (code === 'auth/email-already-in-use') {
      SnackbarUtilities.error('El correo electrónico ya está en uso');
    } else if (code === 'auth/invalid-email') {
      SnackbarUtilities.error('Correo electrónico inválido');
    } else if (code === 'auth/invalid-password') { //auth/weak-password can be used
      SnackbarUtilities.error('La contraseña debe tener al menos 6 caracteres');
    } else {
      SnackbarUtilities.error('Error al crear la cuenta');
    }
  }
}