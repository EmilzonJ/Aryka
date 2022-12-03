import {DataGrid, GridColDef} from '@mui/x-data-grid';

export interface DataTableProps {
  columns: GridColDef[];
  rows: any[];
  subtractHeight?: string;
}

export const DataTable = ({columns, rows, subtractHeight = '140px'}: DataTableProps) => {
  return (
    <div style={{height: `calc(100vh - ${subtractHeight})`, width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        loading={rows.length === 0}
      />
    </div>
  );
}
