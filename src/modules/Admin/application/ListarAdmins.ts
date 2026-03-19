import { AdminRepository } from "../infrastructure/AdminRepository";

export class ListarAdmins{

    constructor(private repositorio = new AdminRepository())
    
    { }

    async execute(){
        return this.repositorio.listarAdmins();
    }
}