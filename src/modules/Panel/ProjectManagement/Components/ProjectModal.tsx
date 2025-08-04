// components/ProjectModal.tsx
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Typography,
  DialogActions,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import { IProject } from "../../../Interfaces/Project.interface";

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: IProject) => void;
  mode: "crear" | "editar" | "ver";
  initialData?: IProject;
}

const defaultProject: IProject = {
  nombre: "",
  cliente: "",
  ingeniero: "",
  fechaInicio: "",
  fechaFin: "",
  costo: "",
  moneda: "Soles (S/)",
  estado: "Planificación",
  direccion: "",
};

export default function ProjectModal({
  open,
  onClose,
  onSubmit,
  mode,
  initialData,
}: ProjectModalProps) {
  const isViewMode = mode === "ver";
  const [formData, setFormData] = useState<IProject>(defaultProject);

  useEffect(() => {
    if (mode === "editar" || mode === "ver") {
      setFormData(initialData || defaultProject);
    } else {
      setFormData(defaultProject);
    }
  }, [initialData, mode]);

  const handleInputChange =
    (field: keyof IProject) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: event.target.value });
    };

  const handleSelectChange =
    (field: keyof IProject) => (event: SelectChangeEvent) => {
      setFormData({ ...formData, [field]: event.target.value });
    };

  const handleSubmit = () => {
    if (onSubmit) onSubmit(formData);
    onClose();
  };

  const getTitle = () => {
    if (mode === "crear") return "Crear Nuevo Proyecto";
    if (mode === "editar") return "Editar Proyecto";
    return "Detalle del Proyecto";
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{getTitle()}</DialogTitle>
      <DialogContent>
        {mode === "crear" && (
          <Typography variant="body2" color="text.secondary" mb={2}>
            Completa la información del nuevo proyecto de construcción
          </Typography>
        )}

        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <TextField
              size="small"
              label="Nombre del Proyecto"
              fullWidth
              placeholder="Ej: Edificio Residencial..."
              value={formData.nombre}
              onChange={handleInputChange("nombre")}
              disabled={isViewMode}
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <FormControl fullWidth disabled={isViewMode} size="small">
              <InputLabel>Cliente</InputLabel>
              <Select
                value={formData.cliente}
                onChange={handleSelectChange("cliente")}
                label="Cliente"
              >
                <MenuItem value="Cliente A">Cliente A</MenuItem>
                <MenuItem value="Cliente B">Cliente B</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <FormControl fullWidth disabled={isViewMode} size="small">
              <InputLabel>Ingeniero Responsable</InputLabel>
              <Select
                value={formData.ingeniero}
                onChange={handleSelectChange("ingeniero")}
                label="Ingeniero Responsable"
              >
                <MenuItem value="Ing. Carlos Rodríguez">
                  Ing. Carlos Rodríguez
                </MenuItem>
                <MenuItem value="Ing. Luis Martínez">
                  Ing. Luis Martínez
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              size="small"
              label="Fecha de Inicio"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={formData.fechaInicio}
              onChange={handleInputChange("fechaInicio")}
              disabled={isViewMode}
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              size="small"
              label="Fecha de Finalización"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={formData.fechaFin}
              onChange={handleInputChange("fechaFin")}
              disabled={isViewMode}
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              size="small"
              label="Costo del Proyecto"
              type="number"
              fullWidth
              value={formData.costo}
              onChange={handleInputChange("costo")}
              disabled={isViewMode}
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <FormControl fullWidth disabled={isViewMode} size="small">
              <InputLabel>Moneda</InputLabel>
              <Select
                value={formData.moneda}
                onChange={handleSelectChange("moneda")}
                label="Moneda"
              >
                <MenuItem value="Soles (S/)">Soles (S/)</MenuItem>
                <MenuItem value="Dólares (USD)">Dólares (USD)</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 6 }}>
            <FormControl fullWidth disabled={isViewMode} size="small">
              <InputLabel>Estado</InputLabel>
              <Select
                value={formData.estado}
                onChange={handleSelectChange("estado")}
                label="Estado"
              >
                <MenuItem value="Planificación">Planificación</MenuItem>
                <MenuItem value="En Proceso">En Proceso</MenuItem>
                <MenuItem value="Finalizado">Finalizado</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField
              size="small"
              label="Dirección"
              fullWidth
              multiline
              rows={3}
              placeholder="Dirección completa del proyecto"
              value={formData.direccion}
              onChange={handleInputChange("direccion")}
              disabled={isViewMode}
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} variant="outlined">
          {isViewMode ? "Cerrar" : "Cancelar"}
        </Button>
        {!isViewMode && (
          <Button onClick={handleSubmit} variant="contained" color="primary">
            {mode === "crear" ? "Crear Proyecto" : "Guardar Cambios"}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
