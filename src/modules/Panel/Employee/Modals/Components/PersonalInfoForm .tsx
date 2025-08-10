import {
  Typography, Grid, TextField, MenuItem, InputLabel, Select, FormControl
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export default function PersonalInfoForm({ formData, handleChange }:any) {
  return (
    <>
      <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <PersonIcon fontSize="small" sx={{ mr: 1 }} />
        Información Personal
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{xs:6}}>
          <FormControl fullWidth
            size='small'>
            <InputLabel>Tipo Documento</InputLabel>
            <Select
              name="documentType"
              value={formData.documentType}
              label="Tipo Documento"
              onChange={handleChange}
            >
              <MenuItem value="DNI">DNI</MenuItem>
              <MenuItem value="CE">CE</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{xs:6}}>
          <TextField
            fullWidth
            size='small'
            name="documentNumber"
            label="Número"
            value={formData.documentNumber}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={{xs:12}}>
          <TextField
            fullWidth
            size='small'
            name="firstName"
            label="Nombre Completo"
            value={formData.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={{xs:12}}>
          <TextField
            fullWidth
            size='small'
            name="lastName"
            label="Apellidos"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={{xs:6}}>
          <TextField
            fullWidth
            size='small'
            name="phone"
            label="Teléfono"
            value={formData.phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={{xs:6}}>
          <TextField
            fullWidth
            size='small'
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>

        <Grid size={{xs:12}}>
          <TextField
            fullWidth
            multiline
            rows={3}
            size='small'
            name="address"
            label="Dirección"
            value={formData.address}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </>
  );
}
