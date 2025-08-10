// src/pages/ClientesPage.tsx
import { Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClientSummaryCards from "./Components/ClientSummaryCards";
import SearchInput from "./Components/SearchInput";
import ClientDataGrid from "./Components/ClientDataTable";
import { useState } from "react";
import ClientFormModal from "./Modals/ClientModal";
export default function Clients() {
  const [openModal, setOpenModal] = useState(false);
  const handleNewClient = (data: any) => {
    console.log("Nuevo cliente registrado:", data);
    // Aquí podrías hacer un POST a la API
  };

  return (
    <Box p={4}>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <ClientFormModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          onSubmit={handleNewClient}
        />

        <Box>
          <Typography variant="h5">Gestión de Clientes</Typography>
          <Typography variant="body2" color="text.secondary">
            Administra la información de todos los clientes de PABALBO
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpenModal(true)}
        >
          Nuevo Cliente
        </Button>
      </Box>

      {/* Summary Cards */}
      <ClientSummaryCards />

      {/* Search input */}
      <Box mt={3} mb={2}>
        <SearchInput placeholder="Buscar por nombre, RUC, contacto o email..." />
      </Box>

      {/* DataGrid */}
      <ClientDataGrid />
    </Box>
  );
}
