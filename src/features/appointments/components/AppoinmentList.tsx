import {getAllAppointments} from "@/features/appointments/services";
import {useEffect, useState} from "react";
import {Appointment} from "@/features/appointments/models";
import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import {Button} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useAuth} from "@/context";
import {DataTable, FormDialog, renderCellExpand} from "@/components";
import {toLocalDate} from "@/utilities";

const onDelete = (id: number) => {
  console.log(id);
}

const columns: GridColDef[] = [
  {
    field: 'customer',
    headerName: 'Cliente',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    minWidth: 200
  },
  {
    field: 'customerPhone',
    headerName: 'Cliente Telefono',
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
    minWidth: 200,
    renderCell: renderCellExpand
  },
  {
    field: 'startDate',
    headerName: 'Fecha de inicio',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    minWidth: 200,

    renderCell: (params: GridRenderCellParams) => {
      return toLocalDate(params.value.toDate());
    }
  },
  {
    field: 'endDate',
    headerName: 'Fecha de fin',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    minWidth: 200,
    renderCell: (params: GridRenderCellParams) => {
      return toLocalDate(params.value.toDate());
    }
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
          onClick={() => onDelete(params.row.id as number)}
        />
        <
          Button
          startIcon={<DeleteIcon/>}
          onClick={() => onDelete(params.row.id as number)}
        />
      </>
    },
  },
];

export const AppointmentList = () => {
  const {user} = useAuth()
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    console.log('useEffect');
    if (!user) return;
    const unsubscribe = getAllAppointments(
      (data) => setAppointments(data),
      user?.uid as string);
    return () => unsubscribe();
  }, []);

  return (
    <>
      <FormDialog/>
      <DataTable columns={columns} rows={appointments}/>
    </>
  )
}
