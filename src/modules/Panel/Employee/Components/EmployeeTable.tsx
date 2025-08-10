import { DataGrid } from '@mui/x-data-grid';
import { Chip, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function EmployeeTable({ employees }: any) {
  const columns = [
    { field: 'name', headerName: 'Empleado', flex: 1 },
    {
      field: 'document',
      headerName: 'Documento',
      flex: 1,
      valueGetter: (params: any) => `${params?.row.documentType} ${params?.row.documentNumber}`,
    },
    { field: 'role', headerName: 'Cargo', flex: 1 },
    {
      field: 'category',
      headerName: 'Categoría',
      flex: 1,
      renderCell: (params: any) => <Chip label={params.value} size="small" />,
    },
    { field: 'contractType', headerName: 'Tipo Contrato', flex: 1 },
    {
      field: 'paymentType',
      headerName: 'Forma de Pago',
      flex: 1,
      renderCell: (params: any) => (
        <Chip
          label={params.value}
          size="small"
          color={
            params.value === 'Mensual'
              ? 'secondary'
              : params.value === 'Semanal'
              ? 'success'
              : 'primary'
          }
        />
      ),
    },
    {
      field: 'salary',
      headerName: 'Sueldo Base',
      flex: 1,
      valueFormatter: (params: any) => `S/ ${params.value}`,
    },
    {
      field: 'status',
      headerName: 'Estado',
      flex: 1,
      renderCell: (params: any) => (
        <Chip
          label={params.value}
          size="small"
          color={params.value === 'Activo' ? 'success' : 'default'}
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Acciones',
      flex: 0.5,
      sortable: false,
      renderCell: () => (
        <IconButton color="primary">
          <EditIcon />
        </IconButton>
      ),
    },
  ];

  const rows = employees.map((emp:any, i: number) => ({ id: i + 1, ...emp }));

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        disableRowSelectionOnClick
      />
    </div>
  );
}
