import { Pregunta } from "./pregunta";

export interface Pensamiento {
    id: string;
    preguntas: Pregunta[];
  }