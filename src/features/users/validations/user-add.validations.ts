import * as yup from "yup";


export const userAddValidationSchema = yup.object().shape({
  name: yup.string().required('Nombre del empleado es requerido').min(3, 'Nombre del empleado debe tener al menos 3 caracteres'),
  email: yup.string().required("El email es requerido").email("Ingrese un email válido"),
  password: yup.string().required("La contraseña es requerida").min(6, "Mínimo 6 caracteres"),
  cel: yup.string().required('Teléfono del empleado es requerido').min(8, 'Teléfono del empleado debe tener 8 caracteres').max(8),
  area: yup.string().required('Área en la que labora es requerido'),
})

  
