import {
  Typography, Grid, TextField, MenuItem, InputLabel, Select, FormControl
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export default function LaborInfoForm({ formData, handleChange }: any) {
  return (
    <>
      <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <WorkIcon fontSize="small" sx={{ mr: 1 }} />
        Información Laboral
      </Typography>

      <Grid container spacing={2}>
        <Grid  size={{xs:12}}>
          <TextField
            fullWidth
            size='small'
            name="position"
            label="Cargo"
            value={formData.position}
            onChange={handleChange}
          />
        </Grid>

        <Grid  size={{xs:6}}>
          <FormControl fullWidth
            size='small'>
            <InputLabel>Categoría</InputLabel>
            <Select
              name="category"
              value={formData.category}
              label="Categoría"
              onChange={handleChange}
            >
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Obrero">Obrero</MenuItem>
              <MenuItem value="Otros">Otros</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid  size={{xs:6}}>
          <FormControl fullWidth
            size='small'>
            <InputLabel>Tipo de Contrato</InputLabel>
            <Select
              name="contractType"
              value={formData.contractType}
              label="Tipo de Contrato"
              onChange={handleChange}
            >
              <MenuItem value="Recibo">Recibo</MenuItem>
              <MenuItem value="Planilla">Planilla</MenuItem>
              <MenuItem value="CAS">CAS</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid  size={{xs:6}}>
          <TextField
            size='small'
            fullWidth
            name="startDate"
            type="date"
            label="Inicio Contrato"
            InputLabelProps={{ shrink: true }}
            value={formData.startDate}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={{xs:6}}>
          <TextField
            size='small'
            fullWidth
            name="endDate"
            type="date"
            label="Fin Contrato"
            InputLabelProps={{ shrink: true }}
            value={formData.endDate}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', mt: 3, mb: 1 }}>
        <MonetizationOnIcon fontSize="small" sx={{ mr: 1 }} />
        Información de Pago
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{xs:6}}>
          <TextField
            size='small'
            fullWidth
            name="baseSalary"
            label="Sueldo Base (S/)"
            type="number"
            value={formData.baseSalary}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={{xs:6}}>
          <FormControl fullWidth
            size='small'>
            <InputLabel>Forma de Pago</InputLabel>
            <Select
              name="paymentType"
              value={formData.paymentType}
              label="Forma de Pago"
              onChange={handleChange}
            >
              <MenuItem value="Mensual">Mensual</MenuItem>
              <MenuItem value="Semanal">Semanal</MenuItem>
              <MenuItem value="Diario">Diario</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid size={{xs:12}}>
          <TextField
            size='small'
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
