import {
  Typography, Grid, TextField, InputLabel, MenuItem, Select, FormControl
} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';

export default function PayrollInfoForm({
  formData, handleChange, handleEmployeeSelect, employees, projects
}: any) {
  return (
    <>
      <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <DescriptionIcon fontSize="small" sx={{ mr: 1 }} />
        Información de la Planilla
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{xs:12}}>
          <FormControl fullWidth size='small'>
            <InputLabel>Seleccionar Empleado</InputLabel>
            <Select
              name="employee"
              value={formData.employee}
              label="Seleccionar Empleado"
              onChange={(e) => handleEmployeeSelect(e.target.value)}
            >
              {employees.map((emp: any) => (
                <MenuItem key={emp.id} value={emp.id}>
                  {`${emp.fullName} (${emp.documentNumber})`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid size={{xs:6}}>
          <FormControl fullWidth size='small'>
            <InputLabel>Proyecto Asignado</InputLabel>
            <Select
              name="project"
              value={formData.project}
              label="Proyecto Asignado"
              onChange={handleChange}
            >
              {projects.map((proj: any) => (
                <MenuItem key={proj.id} value={proj.id}>
                  {proj.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid size={{xs:6}}>
          <TextField
            fullWidth
            size='small'
            type="date"
            name="startDate"
            label="Fecha Inicio Semana"
            InputLabelProps={{ shrink: true }}
            value={formData.startDate}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={{xs:6}}>
          <TextField
            fullWidth
            size='small'
            type="date"
            name="endDate"
            label="Fecha Fin Semana"
            InputLabelProps={{ shrink: true }}
            value={formData.endDate}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </>
  );
}
