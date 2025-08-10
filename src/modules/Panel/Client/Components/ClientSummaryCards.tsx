import { Box, Paper, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import FolderIcon from "@mui/icons-material/Folder";

const cards = [
  { label: "Total Clientes", value: 3, sub: "2 activos", icon: <PersonIcon /> },
  { label: "Con Proyectos", value: 3, sub: "Clientes con proyectos activos", icon: <FolderIcon /> },
  { label: "Nuevos este Mes", value: 2, sub: "Registrados en junio 2025", icon: <EventIcon /> },
];

export default function ClientSummaryCards() {
  return (
    <Box display="flex" gap={2}>
      {cards.map((card, i) => (
        <Paper key={i} elevation={0} sx={{ p: 2, flex: 1 }}>
          <Box display="flex" flexDirection="column" gap={0.5}>
            <Typography variant="body2" color="text.secondary">{card.label}</Typography>
            <Typography variant="h5">{card.value}</Typography>
            <Typography variant="caption" color="text.secondary">{card.sub}</Typography>
          </Box>
        </Paper>
      ))}
    </Box>
  );
}
