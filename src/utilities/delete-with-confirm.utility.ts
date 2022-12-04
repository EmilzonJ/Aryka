import {alertConfirm} from "@/utilities/alert-confirm.utility";


interface DeleteWithConfirmProps {
  title: string;
  action: () => Promise<void>;
}

export const deleteWithConfirm = async ({title, action}: DeleteWithConfirmProps) => {
  const {isConfirmed} = await alertConfirm(
    title,
    'Esta acción no se puede deshacer',
    'warning'
  )

  if (isConfirmed) {
    await action();
  }

}
