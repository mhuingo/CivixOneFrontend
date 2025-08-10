
import { Grid, Paper, Typography } from "@mui/material";

export default function EmployeeSummary({ total, activos, inactivos, masaSalarial }: any) {
  return (
    <Grid container spacing={2} mb={3}>
      <Grid size={ {xs:12, md:3}}>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography variant="body2" color="text.secondary">Total Empleados</Typography>
          <Typography variant="h6">{total}</Typography>
        </Paper>
      </Grid>
      <Grid size={ {xs:12, md:3}}>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography variant="body2" color="text.secondary">Empleados Activos</Typography>
          <Typography variant="h6" color="green">{activos}</Typography>
        </Paper>
      </Grid>
      <Grid size={ {xs:12, md:3}}>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography variant="body2" color="text.secondary">Empleados Inactivos</Typography>
          <Typography variant="h6" color="error">{inactivos}</Typography>
        </Paper>
      </Grid>
      <Grid size={ {xs:12, md:3}}>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography variant="body2" color="text.secondary">Masa Salarial</Typography>
          <Typography variant="h6">S/ {masaSalarial.toLocaleString()}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
