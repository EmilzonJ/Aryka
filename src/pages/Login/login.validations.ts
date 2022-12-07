import * as yup from "yup";

export const LoginValidations = yup.object().shape({
  email: yup.string().required("El email es requerido").email("Ingrese un email válido"),
  password: yup.string().required("La contraseña es requerida").min(6, "Mínimo 6 caracteres")
});
