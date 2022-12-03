import {getAllServices} from '@/features/services/services';
import {useEffect, useState} from "react";
import {Service} from '@/features/services/models';
import {getAllAppointments} from "@/features/appointments/services";
import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import {Button} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
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
        field: 'price',
        headerName: 'Precio',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 200
    },
    {
        field: 'description',
        headerName: 'Descripción',
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
                <Button
                    startIcon={<EditIcon/>}
                    onClick={() => onDelete(params.row.id as string)}
                />
                <
                    Button
                    startIcon={<DeleteIcon/>}
                    onClick={() => onDelete(params.row.id as string)}
                />
            </>
        },
    }
]
export const ServicesList = () => {
    const [services, setServices] = useState<Service[]>([]);
    
    
    useEffect(() =>{
            const unsubscribe = getAllServices(
                (data) => setServices(data))
            return () => unsubscribe();
    },
    []
    );
    
    // @ts-ignore
    // @ts-ignore
    return(
        <>
            <FormDialog/>
            <DataTable columns={columns} rows={services}/>
        </>
    )
}