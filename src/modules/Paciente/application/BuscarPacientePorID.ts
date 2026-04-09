import { PacienteRepository } from "../infrastructure/PacienteRepository";


export class BuscarPacientePorID{
    constructor(private repository = new PacienteRepository())
    {}

    async execute(id: number){

        return this.repository.buscarPacientePorID(id);
    }
}