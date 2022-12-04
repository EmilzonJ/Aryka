import {GridColDef} from "@mui/x-data-grid";
import {renderCellExpand} from "@/components";
import {columnsWithActions} from "@/utilities";

export const serviceColumns: GridColDef[] = columnsWithActions([
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
      minWidth: 200,
      renderCell: renderCellExpand
    },
  ]
)


