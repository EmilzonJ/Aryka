import {GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import {Button} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {useTableActionsContext} from "@/context/table-actions.context";

const Actions = ({id}: { id: string }) => {
  const {onEdit, onDelete} = useTableActionsContext();

  return <>
    {onEdit &&
        <Button
            startIcon={<EditIcon/>}
            onClick={() => onEdit(id)}
        />
    }

    {onDelete &&
        <
            Button
            startIcon={<DeleteIcon/>}
            onClick={() => onDelete(id)}
        />
    }
  </>
}

export const columnsWithActions = (columns: GridColDef[]): GridColDef[] => {
  const actions: GridColDef = {
    field: 'actions',
    headerName: 'Acciones',
    sortable: false,
    flex: 1,
    minWidth: 200,
    headerAlign: 'center',
    align: 'center',
    disableColumnMenu: true,
    renderCell: (params: GridRenderCellParams) => <Actions id={params.row.id}/>
  }

  return [...columns, actions]
}
