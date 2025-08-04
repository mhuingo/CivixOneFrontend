import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Stack,
  InputAdornment,
} from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../../services/auth.service";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("mhuingo");
  const [password, setPassword] = useState("admin1");
  const { setUser } = useAuth();

  const handleLogin = async () => {
    try {
      const user = await loginUser(username, password);
      setUser(user); // 🔥 Actualiza el contexto
      navigate('/panel')
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: "#f8f8f8" }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
          width: "100%",
          maxWidth: 400,
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <Box display="flex" justifyContent="center" mb={2}>
          <Box
            bgcolor="#0a0a1a"
            borderRadius="50%"
            width={50}
            height={50}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ApartmentIcon sx={{ color: "white" }} />
          </Box>
        </Box>

        {/* Título */}
        <Typography variant="h6" fontWeight="bold">
          PABALBO
        </Typography>
        <Typography variant="body2" mb={3}>
          Sistema Administrativo
        </Typography>

        {/* Formulario */}
        <Stack spacing={2}>
          <TextField
            label="Usuario"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
          <Button
            onClick={handleLogin}
            variant="contained"
            fullWidth
            sx={{ bgcolor: "#0a0a1a", "&:hover": { bgcolor: "#000" } }}
          >
            Iniciar Sesión
          </Button>
        </Stack>

        {/* Credenciales de prueba */}
        <Box mt={3}>
          <Typography variant="caption" color="text.secondary">
            Credenciales de prueba:
          </Typography>
          <Typography variant="caption" display="block">
            Email: admin@pabalbo.com
          </Typography>
          <Typography variant="caption">Contraseña: admin123</Typography>
        </Box>
      </Paper>
    </Box>
  );
}
