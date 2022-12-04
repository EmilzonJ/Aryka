import {getAllUsers} from "@/features";
import {useEffect, useState} from "react";
import {User} from '@/features/users/models';
import {DataTable, FormDialog} from "@/components";
import {userColumns} from "@/features/users/components/users.columns";

export const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);

  const onDelete = async (id: string) => {
    console.log(id);
  }

  useEffect(() => {
      const unsubscribe = getAllUsers(
        (data) => setUsers(data))
      return () => unsubscribe();
    },
    []
  );

  return (
    <>
      <FormDialog/>
      <DataTable columns={userColumns} rows={users} onDelete={onDelete}/>
    </>
  )
}
