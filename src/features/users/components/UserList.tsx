import {
  getAllUsers, getServiceById, getUserById,
  ServiceUpsertModel,
  updateUser,
  UserUpsertData
} from "@/features";
import {useEffect, useState} from "react";
import {User, UserDataEdit} from '@/features/users/models';
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
  const [selectedRowId, setSelectedRowId] = useState('');

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

    },
    resolver: yupResolver(userAddValidationSchema),
    onUpdateAction: async (data: unknown) => {
      await updateUser(selectedRowId, data as UserDataEdit);
    }
  })
  const onEdit = async (id: string) => {
    setSelectedRowId(id);
    const user = await getUserById(id);
    formDialog.handleEdit(user);
  }
  return (
    <>
      <FormDialog title="Usuarios" {...formDialog}>
        <UserUpsert/>
      </FormDialog>
      <DataTable
        columns={userColumns}
        rows={users}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </>
  )
}
