import * as yup from "yup";
import dayjs from "dayjs";

export const appointmentEditValidationSchema = yup.object().shape({
  customer: yup.string().required('Nombre del cliente es requerido'),
  customerPhone: yup.string().required('Teléfono del cliente es requerido'),
  startDate: yup.date().required('Fecha de inicio es requerida').defined(),
  endDate: yup.date()
    .required('Fecha de fin es requerida').test('is-greater-than-start-date', 'La fecha de fin debe ser mayor a la fecha de inicio',  (value,context)=> {
      return dayjs(value).isAfter(context.parent.startDate);
    })
});
