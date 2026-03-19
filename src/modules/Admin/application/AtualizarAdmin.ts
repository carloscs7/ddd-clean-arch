import { Admin } from "../domain/Admin";
import { AdminRepository } from "../infrastructure/AdminRepository";

export class AtualizarAdmin {

    constructor(private repositorio = new AdminRepository()) { }

    async execute(idUser: number, email: string, ativo: boolean, senha: string, nome: string) {

        const admin = await this.repositorio.buscarPorId(idUser);

        if (!admin) {
            throw new Error('Não há nenhum admin com este ID!');
        } else {

            admin.email = email;
            admin.ativo = ativo;
            admin.senha = senha;
            admin.nome = nome;

            await this.repositorio.atualizarAdmin(admin);
        }
    }
}