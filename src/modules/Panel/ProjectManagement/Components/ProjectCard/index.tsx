import { Card, CardContent, Typography, LinearProgress, Box, Button, Chip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';

export default function ProjectCard ({ project }: any) {
  return (
    <Card sx={{ width: 350, p: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h6">{project.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {project.company}
            </Typography>
          </Box>
          <Chip label="En Proceso" color="primary" size="small" />
        </Box>

        <Box mt={2}>
          <Typography variant="body2">Progreso</Typography>
          <LinearProgress variant="determinate" value={project.progress} />
          <Typography variant="caption">{project.progress}%</Typography>
        </Box>

        <Box mt={2} display="flex" alignItems="center" gap={1}>
          <CalendarTodayIcon fontSize="small" />
          <Typography variant="body2">{project.date}</Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <AttachMoneyIcon fontSize="small" />
          <Typography variant="body2">S/ {project.budget.toLocaleString()}</Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2">{project.location}</Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <PersonIcon fontSize="small" />
          <Typography variant="body2">{project.engineer}</Typography>
        </Box>

        <Box mt={2} display="flex" justifyContent="space-between">
          <Button variant="outlined" size="small">Ver</Button>
          <Button variant="contained" size="small">Editar</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

