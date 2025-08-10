import { Grid, Paper, Typography } from "@mui/material";

export default function PayrollSummary({
  total,
  activas,
  estaSemana,
  totalPagar,
}: any) {
  return (
    <Grid container spacing={2} mb={3}>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Total Planillas
          </Typography>
          <Typography variant="h6">{total}</Typography>
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Planillas Activas
          </Typography>
          <Typography variant="h6" color="green">
            {activas}
          </Typography>
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Esta Semana
          </Typography>
          <Typography variant="h6">{estaSemana}</Typography>
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Total a Pagar
          </Typography>
          <Typography variant="h6">S/ {totalPagar.toLocaleString()}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
