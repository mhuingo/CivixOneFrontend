import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/panel");
  };

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      bgcolor="#f5f5f5"
      p={4}
    >
      <ErrorOutlineIcon sx={{ fontSize: 80, color: "#d32f2f" }} />
      <Typography variant="h3" mt={2}>
        404 - Página no encontrada
      </Typography>
      <Typography variant="body1" mt={1} color="textSecondary">
        La ruta que estás buscando no existe o ha sido movida.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={handleGoHome}
        sx={{ mt: 4 }}
      >
        Volver al Inicio
      </Button>
    </Box>
  );
}
