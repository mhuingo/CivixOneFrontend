import { Typography, Grid, TextField } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

export default function PayrollPaymentForm({ formData, handleChange }: any) {
  return (
    <>
      <Typography
        variant="subtitle1"
        sx={{ display: "flex", alignItems: "center", mb: 2, mt: 2 }}
      >
        <MonetizationOnIcon fontSize="small" sx={{ mr: 1 }} />
        Información de Pago
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 6 }}>
          <TextField
            size="small"
            fullWidth
            label="Sueldo Base (S/)"
            value={`S/ ${formData.baseSalary}`}
            disabled
          />
        </Grid>

        <Grid size={{ xs: 6 }}>
          <TextField
            size="small"
            fullWidth
            type="number"
            name="netAmount"
            label="Monto Neto a Pagar (S/)"
            value={formData.netAmount}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TextField
            size="small"
            fullWidth
            name="observations"
            label="Observaciones"
            multiline
            rows={3}
            value={formData.observations}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </>
  );
}
