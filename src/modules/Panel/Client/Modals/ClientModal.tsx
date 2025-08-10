// src/components/clientes/ClientFormModal.tsx
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

interface ClientFormModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export default function ClientFormModal({
  open,
  onClose,
  onSubmit,
}: ClientFormModalProps) {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      ruc: "",
      address: "",
      contactPrimary: "",
      contactSecondary: "",
      phone: "",
      email: "",
      registerDate: dayjs(),
      notes: "",
    },
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  const submitForm = (data: any) => {
    onSubmit(data);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Registrar Nuevo Cliente</DialogTitle>
      <DialogContent>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Completa la información del nuevo cliente
        </Typography>
        <form onSubmit={handleSubmit(submitForm)}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 8 }}>
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field }: any) => (
                  <TextField
                    {...field}
                    label="Nombre/Razón Social"
                    fullWidth
                    required
                    size="small"
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Controller
                name="ruc"
                control={control}
                rules={{ required: true }}
                render={({ field }: any) => (
                  <TextField
                    {...field}
                    label="RUC"
                    fullWidth
                    required
                    size="small"
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Controller
                name="address"
                control={control}
                render={({ field }: any) => (
                  <TextField
                    {...field}
                    label="Dirección"
                    fullWidth
                    size="small"
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="contactPrimary"
                control={control}
                rules={{ required: true }}
                render={({ field }: any) => (
                  <TextField
                    {...field}
                    label="Contacto Principal"
                    fullWidth
                    required
                    size="small"
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="contactSecondary"
                control={control}
                render={({ field }: any) => (
                  <TextField
                    {...field}
                    label="Contacto Secundario"
                    fullWidth
                    size="small"
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="phone"
                control={control}
                rules={{ required: true }}
                render={({ field }: any) => (
                  <TextField
                    {...field}
                    label="Teléfono"
                    fullWidth
                    required
                    size="small"
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Controller
                name="email"
                control={control}
                render={({ field }: any) => (
                  <TextField {...field} label="Email" fullWidth size="small" />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Controller
                name="registerDate"
                control={control}
                render={({ field }: any) => (
                  <DatePicker
                    {...field}
                    label="Fecha de Registro"
                    format="DD/MM/YYYY"
                    slotProps={{
                      textField: { fullWidth: true, size: "small" },
                    }}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Controller
                name="notes"
                control={control}
                render={({ field }: any) => (
                  <TextField
                    size="small"
                    {...field}
                    label="Observaciones"
                    fullWidth
                    multiline
                    minRows={3}
                  />
                )}
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button variant="outlined" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="contained" onClick={handleSubmit(submitForm)}>
          Registrar Cliente
        </Button>
      </DialogActions>
    </Dialog>
  );
}
