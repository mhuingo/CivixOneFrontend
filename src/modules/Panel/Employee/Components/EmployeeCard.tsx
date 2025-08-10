import { Card, CardContent, Typography } from "@mui/material";

export default function EmployeeCard() {
  return (
    <Card variant="outlined" sx={{ minWidth: 160, m: 1 }}>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">
          Personal y Planilla
        </Typography>
        <Typography variant="h6">
          gestion Integral del recurso humano y nómina de PABALBO
        </Typography>
      </CardContent>
    </Card>
  );
}
