export interface IModal {
  open: boolean;
  mode: "crear" | "ver" | "editar";
  project: any;
}
