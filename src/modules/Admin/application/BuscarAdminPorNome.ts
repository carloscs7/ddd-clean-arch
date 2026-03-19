import { AdminRepository } from "../infrastructure/AdminRepository";

export class BuscarAdminPorNome{

    constructor(private repositorio = new AdminRepository())
    
    { }

    async execute(nome: string){

        return this.repositorio.buscarPorNome(nome);
    }
}