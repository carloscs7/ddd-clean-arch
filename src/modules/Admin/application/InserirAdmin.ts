import { Admin } from "../domain/Admin";
import { AdminRepository } from "../infrastructure/AdminRepository";

/**
 * Esta classe deve ser utilizada para inserir um novo Administrador no sistema
 */
export class InserirAdmin {
    
    constructor(private repositorio = new AdminRepository()) { }

    async execute(idUser: number, email: string, ativo: boolean, senha: string, nome: string) {
        const admin = new Admin(idUser, email, ativo, senha, nome);

        await this.repositorio.inserirAdmin(admin);
    }
}