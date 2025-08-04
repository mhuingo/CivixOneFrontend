// src/AppRoutes.tsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginForm from "./modules/Login/LoginForm";
import NotFoundPage from "./modules/Error/NotFoundPage";
import Panel from "./modules/Panel/Panel";
import ProjectManagement from "./modules/Panel/ProjectManagement";
import ApprovalList from "./modules/Panel/ApprovalList";
import PrivateRoute from "./modules/Login/PrivateRoute";

// Importa tus páginas o vistas

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route element={<PrivateRoute />}>
          <Route path="/panel" element={<Panel />}>
            <Route index element={<ApprovalList />} />
            <Route path="approval-list" element={<ApprovalList />} />
            <Route path="project-management" element={<ProjectManagement />} />
          </Route>
        </Route>
        {/* Redirección a home si no existe ruta */}
        <Route path="*" element={<Navigate to="/404" replace />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
