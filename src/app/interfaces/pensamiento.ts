import { Pregunta } from "./pregunta";

export interface Pensamiento {
    id: number;
    preguntas: Pregunta[] | undefined;
  }