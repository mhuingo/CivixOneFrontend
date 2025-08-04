import { Box } from "@mui/material";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Panel() {
  return (
    <Box display="flex">
      <Sidebar />
      <Box p={4} flex={1}>
        <Outlet />
      </Box>
    </Box>
  );
}
