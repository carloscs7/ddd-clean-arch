import { PacienteRepository } from "../infrastructure/PacienteRepository";

;

export class ListarPaciente{
    constructor(private repository = new PacienteRepository())
    {}

    async execute(){
        return this.repository.listarPaciente();
    }
}