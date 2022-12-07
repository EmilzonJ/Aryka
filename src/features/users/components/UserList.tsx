import {getAllUsers, UserUpsertData} from "@/features";
import {useEffect, useState} from "react";
import {User} from '@/features/users/models';
import {DataTable, FormDialog} from "@/components";
import {userColumns} from "@/features/users/components/users.columns";
import {deleteWithConfirm} from "@/utilities";
import {deleteUser} from "@/features/users/services";
import {useFormDialog} from "@/hooks";
import {createUser} from "@/features/users";
import {UserUpsert} from "@/features/users";
import {yupResolver} from "@hookform/resolvers/yup";
import {userAddValidationSchema} from "@/features/users/validations/user-add.validations";

export const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);

  const onDelete = async (idUsers: string) => {
    await deleteWithConfirm({
      title: '¿Estás seguro de eliminar este usuario?',
      action: async () => await deleteUser(idUsers),
    })
  }

  useEffect(() => {
      const unsubscribe = getAllUsers(
        (data) => setUsers(data))
      return () => unsubscribe();
    },
    []
  );
  const formDialog = useFormDialog({
    onCreateAction: async (data: unknown) => {
      await createUser(data as UserUpsertData);
      yupResolver(userAddValidationSchema)
    }
  });
  return (
    <>
      <FormDialog title="Usuarios" {...formDialog}>
        <UserUpsert/>
      </FormDialog>
      <DataTable
        columns={userColumns}
        rows={users}
        onDelete={onDelete}
      />
    </>
  )
}
