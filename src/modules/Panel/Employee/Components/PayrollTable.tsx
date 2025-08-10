import { DataGrid } from "@mui/x-data-grid";
import { Chip, IconButton, Box, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function PayrollTable({ rows }: any) {
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "employee",
      headerName: "Empleado",
      flex: 1.5,
      renderCell: ({ row }: any) => (
        <Box marginTop={"5px"}>
          <Typography variant="body2">{row.name}</Typography>
          <Typography color="text.secondary" fontSize={"12px"}>
            {row.documentType}: {row.documentNumber}
          </Typography>
        </Box>
      ),
    },
    {
      field: "project",
      headerName: "Proyecto",
      flex: 1.5,
      renderCell: ({ row }: any) => (
        <Box marginTop={"5px"}>
          <Typography variant="body2">{row.project}</Typography>
          <Typography color="text.secondary" fontSize={"12px"}>
            {row.company}
          </Typography>
        </Box>
      ),
    },
    {
      field: "contractType",
      headerName: "Tipo Contrato",
      flex: 1,
      renderCell: ({ value }: any) => <Chip label={value} size="small" />,
    },
    {
      field: "week",
      headerName: "Semana",
      flex: 1,
      renderCell: ({ row }: any) => `${row.startDate} al ${row.endDate}`,
    },
    {
      field: "salary",
      headerName: "Sueldo Base",
      flex: 1,
      valueFormatter: ({ value }: any) => `S/ ${value}`,
    },
    {
      field: "netAmount",
      headerName: "Monto Neto",
      flex: 1,
      renderCell: ({ value }: any) => (
        <Typography color="green">S/ {value.toLocaleString()}</Typography>
      ),
    },
    {
      field: "status",
      headerName: "Estado",
      flex: 1,
      renderCell: ({ value }: any) => (
        <Chip
          label={value}
          color={value === "Activo" ? "success" : "default"}
          size="small"
        />
      ),
    },
    {
      field: "actions",
      headerName: "Acciones",
      flex: 0.5,
      sortable: false,
      renderCell: () => (
        <IconButton>
          <EditIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        disableRowSelectionOnClick
      />
    </div>
  );
}
