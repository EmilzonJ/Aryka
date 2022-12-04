import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import {renderCellExpand} from "@/components";
import {columnsWithActions, toLocalDate} from "@/utilities";

export const appointmentColumns: GridColDef[] = columnsWithActions([
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
  }
]);
