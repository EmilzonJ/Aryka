import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {TableActionsContext} from "@/context";

export interface DataTableProps {
  columns: GridColDef[];
  rows: any[];
  subtractHeight?: string;
  onDelete?: (id: string) => Promise<void>;
  onEdit?: (id: string) => void;
}

export const DataTable = ({columns, rows, subtractHeight = '140px',onEdit, onDelete}: DataTableProps) => {
  return (
    <TableActionsContext.Provider value={{onEdit, onDelete}}>
      <div style={{height: `calc(100vh - ${subtractHeight})`, width: '100%'}}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          loading={rows.length === 0}
        />
      </div>
    </TableActionsContext.Provider>
  );
}
