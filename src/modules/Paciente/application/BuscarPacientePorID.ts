import { PacienteRepository } from "../infrastructure/PacienteRepository";


export class buscarPacientePorID{
    constructor(private repository = new PacienteRepository())
    {}

    async execute(id: number){

        return this.repository.buscarPacientePorID(id);
    }
}