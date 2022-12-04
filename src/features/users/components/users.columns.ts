import {GridColDef} from "@mui/x-data-grid";
import {columnsWithActions} from "@/utilities";

export const userColumns: GridColDef[] = columnsWithActions([
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
  }
]);
