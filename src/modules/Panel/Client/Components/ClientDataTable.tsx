import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Typography, IconButton, Chip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const rows = [
  {
    id: "CLI-001",
    name: "Inmobiliaria San Martín",
    address: "Av. Arequipa 1234, Lima",
    ruc: "20123456789",
    contactName: "Carlos San Martín",
    contactAlt: "Ana Martínez",
    phone: "987654321",
    email: "contacto@inmobiliariasanmartin.com",
    date: "14/1/2024",
    status: "Activo",
    projects: 1,
  },
  {
    id: "CLI-002",
    name: "Grupo Comercial Norte",
    address: "Jr. Cusco 567, Lima",
    ruc: "20987654321",
    contactName: "María González",
    phone: "912345678",
    email: "info@grupocomercial.com",
    date: "9/2/2024",
    status: "Activo",
    projects: 1,
  },
  {
    id: "CLI-003",
    name: "Municipalidad del Callao",
    address: "Plaza de Armas s/n, Callao",
    ruc: "20111222333",
    contactName: "Pedro Ramírez",
    contactAlt: "Luis Torres",
    phone: "945678123",
    email: "obras@municallao.gob.pe",
    date: "4/12/2023",
    status: "Inactivo",
    projects: 1,
  },
];

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "name",
    headerName: "Cliente",
    flex: 1.5,
    renderCell: ({ row }) => (
      <Box>
        <Typography fontWeight="500">{row.name}</Typography>
        <Typography color="text.secondary" fontSize={"12px"} sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <LocationOnIcon fontSize="small" />
          {row.address}
        </Typography>
      </Box>
    ),
  },
  { field: "ruc", headerName: "RUC", width: 150 },
  {
    field: "contact",
    headerName: "Contacto",
    flex: 1.2,
    renderCell: ({ row }) => (
      <Box>
        <Typography>{row.contactName}</Typography>
        {row.contactAlt && (
          <Typography  fontSize={"12px"}  color="text.secondary">
            {row.contactAlt}
          </Typography>
        )}
      </Box>
    ),
  },
  {
    field: "phone",
    headerName: "Teléfono",
    width: 140,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1.5,
  },
  {
    field: "date",
    headerName: "Fecha Registro",
    width: 130,
  },
  {
    field: "projects",
    headerName: "Proyectos",
    width: 110,
    renderCell: ({ row }) => (
      <Chip label={`${row.projects} proyecto(s)`} size="small" />
    ),
  },
  {
    field: "status",
    headerName: "Estado",
    width: 100,
    renderCell: ({ row }) => (
      <Chip
        label={row.status}
        size="small"
        color={row.status === "Activo" ? "success" : "default"}
      />
    ),
  },
  {
    field: "actions",
    headerName: "Acciones",
    width: 100,
    renderCell: () => (
      <>
        <IconButton><VisibilityIcon /></IconButton>
        <IconButton><EditIcon /></IconButton>
      </>
    ),
  },
];

export default function ClientDataGrid() {
  return (
    <Box sx={{ height: 500 }}>
      <DataGrid rows={rows} columns={columns} disableRowSelectionOnClick />
    </Box>
  );
}
