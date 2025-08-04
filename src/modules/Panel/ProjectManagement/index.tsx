import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ProjectCard from "./Components/ProjectCard";
import { useState } from "react";
import { IProject } from "../../Interfaces/Project.interface";
import ProjectModal from "./Components/ProjectModal";
import { IModal } from "../../Interfaces/Modal.interface";

const projects = [
  {
    id: "PROJ-001",
    name: "Edificio Residencial Los Olivos",
    company: "Inmobiliaria San Martín",
    date: "14/1/2024 - 14/12/2024",
    budget: 850000,
    location: "Av. Carlos Izaguirre 1234, Los Olivos",
    engineer: "Ing. Carlos Rodríguez",
    progress: 75,
  },
  {
    id: "PROJ-002",
    name: "Centro Comercial Plaza Norte",
    company: "Grupo Comercial Norte",
    date: "29/2/2024 - 29/6/2025",
    budget: 2400000,
    location: "Av. Túpac Amaru 5678, Independencia",
    engineer: "Ing. Luis Martínez",
    progress: 45,
  },
  {
    id: "PROJ-003",
    name: "Puente Vehicular Callao",
    company: "Municipalidad del Callao",
    date: "30/9/2023 - 19/8/2024",
    budget: 1200000,
    location: "Av. Colonial - Puente Callao",
    engineer: "Ing. Pedro Vargas",
    progress: 90,
  },
];

export default function ProjectManagement() {
  const [modal, setModal] = useState<IModal>({
    open: false,
    mode: "crear",
    project: {},
  });

  const handleOpenModal = (mode: "crear" | "ver" | "editar", project = {}) => {
    setModal({ open: true, mode, project });
  };

  const handleCloseModal = () => {
    setModal({ ...modal, open: false });
  };

  const handleSubmit = (projectData: IProject) => {
    if (modal.mode === "crear") {
      // Lógica para crear
      console.log("Creando proyecto:", projectData);
    } else {
      // Lógica para actualizar
      console.log("Editando proyecto:", projectData);
    }
  };

  return (
    <Box p={4}>
      <ProjectModal
        open={modal.open}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        mode={modal.mode}
        initialData={modal.project}
      />

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Box>
          <Typography variant="h5">Gestión de Proyectos</Typography>
          <Typography variant="body2" color="text.secondary">
            Administra y monitorea todos los proyectos de construcción
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenModal("crear")}
        >
          Nuevo Proyecto
        </Button>
      </Box>

      <TextField
        fullWidth
        placeholder="Buscar proyectos..."
        variant="outlined"
        size="small"
        sx={{ mb: 4 }}
      />

      <Grid container spacing={3}>
        {projects.map((proj, idx) => (
          <Grid key={idx}>
            <ProjectCard project={proj} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
