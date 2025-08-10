import { Box, Tabs, Tab, TextField, Typography } from "@mui/material";
import { useState } from "react";
import EmployeeTable from "./Components/EmployeeTable";
import EmployeeSummary from "./Components/EmployeeSummary";
import EmployeeHeader from "./Components/EmployeeHeader";
import PayrollHeader from "./Components/PayrollHeader";
import PayrollSummary from "./Components/PayrollSummary";
import PayrollTable from "./Components/PayrollTable";
import EmployeeFormModal from "./Modals/EmployeeModal";
import PayrollFormModal from "./Modals/PayrollModal";
// Datos simulados
const EMPLOYEE_DATA = [
  {
    name: "Juan Carlos Pérez García",
    documentType: "DNI",
    documentNumber: "12345678",
    role: "Ingeniero Civil",
    category: "Administrativo",
    contractType: "Planilla Obrero",
    paymentType: "Mensual",
    salary: 3500,
    status: "Activo",
  },
  {
    name: "María Elena González Vega",
    documentType: "DNI",
    documentNumber: "87654321",
    role: "Asistente Administrativo",
    category: "Administrativo",
    contractType: "Solo Planilla",
    paymentType: "Semanal",
    salary: 2800,
    status: "Activo",
  },
  {
    name: "Carlos Alberto Rodríguez Sánchez",
    documentType: "DNI",
    documentNumber: "11223344",
    role: "Operario Especializado",
    category: "Operario",
    contractType: "Sobre",
    paymentType: "Diario",
    salary: 2200,
    status: "Activo",
  },
  {
    name: "Ana Patricia Torres Mendoza",
    documentType: "CE",
    documentNumber: "001234567",
    role: "Contadora",
    category: "Otros",
    contractType: "Otros",
    paymentType: "Mensual",
    salary: 3200,
    status: "Inactivo",
  },
];
const PAYROLL_DATA = [
  {
    id: "PLN-001",
    name: "Juan Carlos Pérez García",
    documentType: "DNI",
    documentNumber: "12345678",
    project: "Construcción Edificio Comercial Plaza Norte",
    company: "Inversiones Plaza Norte S.A.C.",
    contractType: "Planilla Obrero",
    startDate: "9/6/2024",
    endDate: "15/6/2024",
    salary: 3500,
    netAmount: 3200,
    status: "Activo",
  },
  {
    id: "PLN-002",
    name: "María Elena González Vega",
    documentType: "DNI",
    documentNumber: "87654321",
    project: "Remodelación Oficinas Corporativas",
    company: "Corporación Empresarial Lima S.A.",
    contractType: "Solo Planilla",
    startDate: "9/6/2024",
    endDate: "15/6/2024",
    salary: 2800,
    netAmount: 650,
    status: "Activo",
  },
];

const initialEmployees = [
  {
    id: "EMP-001",
    fullName: "Juan Carlos Pérez García",
    documentType: "DNI",
    documentNumber: "12345678",
    position: "Ingeniero Civil",
    category: "Administrativo",
    contractType: "Planilla Obrero",
    paymentType: "Mensual",
    baseSalary: 3500,
    status: "Activo",
  },
  // ... otros empleados
];

export default function Employee() {
  const [tabIndex, setTabIndex] = useState(0);

  const [employees, setEmployees] = useState(initialEmployees);
  const [openEmployeeModal, setOpenEmployeeModal] = useState(false);
  const [openPayrollModal, setOpenPayrollModal] = useState(false);

  const total = EMPLOYEE_DATA.length;
  const activos = EMPLOYEE_DATA.filter((e) => e.status === "Activo").length;
  const inactivos = total - activos;
  const masaSalarial = EMPLOYEE_DATA.reduce((acc, e) => acc + e.salary, 0);

  const handleSaveEmployee = (newEmployee: any) => {
    const newId = `EMP-${String(employees.length + 1).padStart(3, "0")}`;

    const employeeWithId = {
      ...newEmployee,
      id: newId,
      baseSalary: Number(newEmployee.baseSalary),
    };

    setEmployees((prev) => [...prev, employeeWithId]);
  };

  const handleSavePayroll = (newEmployee: any) => {
    const newId = `EMP-${String(employees.length + 1).padStart(3, "0")}`;

    const employeeWithId = {
      ...newEmployee,
      id: newId,
      baseSalary: Number(newEmployee.baseSalary),
    };

    setEmployees((prev) => [...prev, employeeWithId]);
  };

  return (
    <Box p={4}>
      <Box>
        <Typography variant="h5">Personal y Planillas</Typography>
        <Typography variant="body2" color="text.secondary">
          Gestión integral del recurso humano y nóminas de PABALBO
        </Typography>
      </Box>

      <Tabs
        value={tabIndex}
        onChange={(e, val) => setTabIndex(val)}
        textColor="primary"
        indicatorColor="primary"
        sx={{ my: 3 }}
      >
        <Tab label="Empleados" />
        <Tab label="Planillas" />
      </Tabs>

      {tabIndex === 0 && (
        <>
          <EmployeeFormModal
            open={openEmployeeModal}
            onClose={() => setOpenEmployeeModal(false)}
            onSave={handleSaveEmployee}
          />

          <EmployeeHeader onAdd={() => setOpenEmployeeModal(true)} />
          <TextField
            fullWidth
            placeholder="Buscar empleados..."
            size="small"
            sx={{ mb: 3 }}
          />

          <EmployeeSummary
            total={total}
            activos={activos}
            inactivos={inactivos}
            masaSalarial={masaSalarial}
          />

          <EmployeeTable employees={EMPLOYEE_DATA} />
        </>
      )}

      {tabIndex === 1 && (
        <>
          <PayrollFormModal
            open={openPayrollModal}
            onClose={() => setOpenPayrollModal(false)}
            onSave={handleSavePayroll}
            employees={employees}
            projects={[]}
          />

          <PayrollHeader onAdd={() => setOpenPayrollModal(true)} />

          <TextField
            fullWidth
            placeholder="Buscar planillas..."
            size="small"
            sx={{ mb: 3 }}
          />

          <PayrollSummary
            total={PAYROLL_DATA.length}
            activas={PAYROLL_DATA.filter((p) => p.status === "Activo").length}
            estaSemana={0}
            totalPagar={PAYROLL_DATA.reduce((acc, p) => acc + p.netAmount, 0)}
          />

          <PayrollTable rows={PAYROLL_DATA} />
        </>
      )}
    </Box>
  );
}
