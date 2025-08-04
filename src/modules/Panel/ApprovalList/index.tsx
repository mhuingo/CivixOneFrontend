import { Box, Typography, Paper, Chip } from '@mui/material';

const approvals = [
  {
    type: 'Presupuesto',
    level: 'Alta',
    title: 'Materiales de construcción - Proyecto PROJ-001',
    amount: 'S/ 45,000',
  },
  {
    type: 'Compra',
    level: 'Media',
    title: 'Equipos de seguridad industrial',
    amount: 'S/ 8,500',
  },
  {
    type: 'Presupuesto',
    level: 'Baja',
    title: 'Servicios de topografía - Proyecto PROJ-003',
    amount: 'S/ 12,000',
  },
];

export default function ApprovalList() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Aprobaciones Pendientes
      </Typography>
      <Typography variant="body2" mb={2}>
        Elementos que requieren tu atención
      </Typography>
      {approvals.map((appr, i) => (
        <Paper variant="outlined" key={i} sx={{ p: 2, mb: 2 }}>
          <Box display="flex" gap={1} mb={1}>
            <Chip label={appr.type} size="small" />
            <Chip label={appr.level} size="small" color={
              appr.level === 'Alta' ? 'error' : appr.level === 'Media' ? 'warning' : 'default'
            } />
          </Box>
          <Typography fontSize={14}>{appr.title}</Typography>
          <Typography variant="caption" color="text.secondary">Monto: {appr.amount}</Typography>
        </Paper>
      ))}
    </Paper>
  );
}