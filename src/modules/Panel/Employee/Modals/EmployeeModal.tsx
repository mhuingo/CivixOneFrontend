import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, Grid, Divider
} from '@mui/material';
import { useState } from 'react';
import PersonalInfoForm from './Components/PersonalInfoForm ';
import LaborInfoForm from './Components/LaborInfoForm';

const initialData = {
  documentType: 'DNI',
  documentNumber: '',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  address: '',
  position: '',
  category: 'Admin',
  contractType: '',
  startDate: '',
  endDate: '',
  baseSalary: 0,
  paymentType: 'Mensual',
  observations: ''
};

export default function EmployeeFormModal({ open, onClose, onSave }: any) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    setFormData(initialData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Registrar Nuevo Empleado</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          {/* Parte 1: Información Personal */}
          <Grid size={{xs:12, md:6}}>
            <PersonalInfoForm formData={formData} handleChange={handleChange} />
          </Grid>

          {/* Parte 2: Información Laboral + Pago */}
          <Grid size={{xs:12, md:6}}>
            <LaborInfoForm formData={formData} handleChange={handleChange} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button variant="contained" onClick={handleSave}>
          Registrar Empleado
        </Button>
      </DialogActions>
    </Dialog>
  );
}
