import { SafeResourceUrl } from "@angular/platform-browser";

export interface Pregunta {
    id: string;
    titulo: string;
    imagen: string | undefined;
    simulador: SafeResourceUrl | string | undefined;
    pregunta: string;
    opciones: any[];
    respuesta: number;
  }