import { Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function EmployeeHeader({ onAdd }: any) {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
      <Box>
        <Typography variant="h6">Gestión de Empleados</Typography>
        <Typography variant="body2" color="text.secondary">
          Administra la información personal y contractual de los empleados
        </Typography>
      </Box>
      <Button variant="contained" startIcon={<AddIcon />} onClick={onAdd}>
        Nuevo Empleado
      </Button>
    </Box>
  );
}
