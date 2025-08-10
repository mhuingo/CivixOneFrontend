import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import {
  Dashboard,
  Assignment,
  RequestQuote,
  CheckCircle,
  ShoppingCart,
  People,
  BarChart,
  Settings,
  ExitToApp,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { icon: <Dashboard />, label: "Panel Principal", path: "/panel/approval-list" },
  { icon: <Assignment />, label: "Proyectos", path: "/panel/project-management" },
  { icon: <RequestQuote />, label: "Presupuestos", path: "/panel/budgets" },
  { icon: <CheckCircle />, label: "Aprobaciones", path: "/panel/approval-list" },
  { icon: <ShoppingCart />, label: "Compras", path: "/panel/purchases" },
  { icon: <People />, label: "Personal", path: "/panel/employee" },
  { icon: <BarChart />, label: "Reportes", path: "/panel/reports" },
  { icon: <People />, label: "Clientes", path: "/panel/client" },
  { icon: <Settings />, label: "Configuración", path: "/panel/settings" },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Box
      width={270}
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      borderRight="1px solid #ddd"
      position="relative"
      zIndex={1}
      bgcolor="white"
    >
      <Box>
        <Box fontWeight="bold" fontSize={18} mb={2} pl={2} pt={2}>
          PABALBO
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItemButton
              key={index}
              selected={location.pathname === item.path}
              sx={{ borderRadius: "8px", mx: 1, mb: 0.5 }}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      <Box px={2} pb={2}>
        <Divider sx={{ mb: 1 }} />
        <Button
          fullWidth
          onClick={handleLogout}
          startIcon={<ExitToApp />}
          color="inherit"
        >
          Cerrar Sesión
        </Button>
      </Box>
    </Box>
  );
}
