import Swal from "sweetalert2"

export const alertConfirm = async (
  title: string,
  text: string,
  icon: string,
  confirmButtonText: string = 'Confirmar',
  cancelButtonText: string = 'Cancelar'
) => {

  // @ts-ignore
  return await Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText,
    cancelButtonText
  })
}
