import { AdminRepository } from "../infrastructure/AdminRepository";

export class BuscarAdminPorId{

    constructor(private repositorio = new AdminRepository())
    
    { }

    async execute(id: number){

        return this.repositorio.buscarPorId(id);
    }
}