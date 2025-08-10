import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, Grid
} from '@mui/material';
import { useState } from 'react';
import PayrollInfoForm from './Components/PayrollInfoForm';
import PayrollPaymentForm from './Components/PayrollPaymentForm';

const initialData = {
  employee: '',     // ID del empleado seleccionado
  project: '',      // ID del proyecto
  startDate: '',
  endDate: '',
  baseSalary: 0,    // Rellenado automáticamente
  netAmount: 0,
  observations: ''
};

export default function PayrollFormModal({ open, onClose, onSave, employees = [], projects = [] }: any) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEmployeeSelect = (id: any) => {
    const selected = employees.find((emp: any) => emp.id === id);
    setFormData(prev => ({
      ...prev,
      employee: id,
      baseSalary: selected?.baseSalary || 0
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
    setFormData(initialData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Registrar Nueva Planilla</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={3}>
          <Grid size={{xs:12}}>
            <PayrollInfoForm
              formData={formData}
              handleChange={handleChange}
              handleEmployeeSelect={handleEmployeeSelect}
              employees={employees}
              projects={projects}
            />
          </Grid>
          <Grid size={{xs:12}}>
            <PayrollPaymentForm
              formData={formData}
              handleChange={handleChange}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button variant="contained" onClick={handleSubmit}>
          Registrar Planilla
        </Button>
      </DialogActions>
    </Dialog>
  );
}
