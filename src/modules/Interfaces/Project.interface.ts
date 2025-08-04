// types/Project.ts

export interface IProject {
  nombre: string;
  cliente: string;
  ingeniero: string;
  fechaInicio: string;
  fechaFin: string;
  costo: number | string;
  moneda: string;
  estado: string;
  direccion: string;
}
