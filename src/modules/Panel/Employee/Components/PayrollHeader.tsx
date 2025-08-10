import { Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function PayrollHeader({ onAdd }: any) {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
      <Box>
        <Typography variant="h6">Gestión de Planillas</Typography>
        <Typography variant="body2" color="text.secondary">
          Administra el registro de pagos semanales de los empleados
        </Typography>
      </Box>
      <Button variant="contained" startIcon={<AddIcon />} onClick={onAdd}>
        Nueva Planilla
      </Button>
    </Box>
  );
}
