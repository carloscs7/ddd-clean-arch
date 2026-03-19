import { AdminRepository } from "../infrastructure/AdminRepository";

export class RemoverAdmin{
    constructor (private repositorio = new AdminRepository())
    { }

    async execute(id: number){

        await this.repositorio.removerAdmin(id);
    }
}