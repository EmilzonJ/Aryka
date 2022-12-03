import {getAllUsers} from "@/features";
import {useEffect, useState} from "react";
import {User} from '@/features/users/models';
import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import {Button} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {DataTable, FormDialog} from "@/components";

const onDelete = (id: string) => {
    console.log(id);
}

const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Nombre',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 200
    },
    {
        field: 'email',
        headerName: 'E-mail',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 200
    },
    {
        field: 'cel',
        headerName: 'No. Celular',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 200
    },
    {
        field: 'area',
        headerName: 'Area de Trabajo',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 200
    },
    {
        field: 'actions',
        headerName: 'Actions',
        type: 'number',
        sortable: false,
        flex: 1,
        minWidth: 200,
        headerAlign: 'center',
        align: 'center',
        renderCell: (params: GridRenderCellParams) => {

            return <>
                <
                    Button
                    startIcon={<DeleteIcon/>}
                    onClick={() => onDelete(params.row.id as string)}
                />
            </>
        },
    }
]
export const UsersList = () => {
    const [users, setUsers] = useState<User[]>([]);


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
            <DataTable columns={columns} rows={users}/>
        </>
    )
}