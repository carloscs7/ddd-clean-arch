import { Admin } from "../domain/Admin";

export class AdminRepository {

    private static _admins: Admin[] = [];

    // O MÉTODO PUSH INSERE O ADMIN UMA POSIÇÃO À FRENTE EM '_ADMINS'. 
    async inserirAdmin(admin: Admin) {

        try {
            AdminRepository._admins.push(admin);

        } catch (error) {
            throw new Error('Erro ao inserir um novo Admin!');

        }
    }



    // SIMPLESMENTE RETORNA A INSTÂNCIA ATUAL '_ADMINS'.
    async listarAdmins() {

        try {
            return AdminRepository._admins;
        } catch (error) {
            throw new Error('Erro ao listar os Admins do sistema');
        }
    }



    // O FIND RETORNA UMA INSTÂNCIA DE ADMIN ENCONTRADA OU UM 'UNDEFINED'
    async buscarPorId(id: number) {

        try {
            return AdminRepository._admins.find(admin => admin.idUser === id);
        } catch (error) {
            throw new Error('Erro ao executar a busca por Id');
        }

    }



    async buscarPorNome(nome: string) {

        try {
            return AdminRepository._admins.find(admin => admin.nome === nome);
        } catch (error) {
            throw new Error('Erro ao executar a busca por Nome');
        }

    }



    async atualizarAdmin(admin: Admin) {

        try {
            // O FINDINDEX RETORNA O ÍNDICE DE ALOCAÇÃO DO ADMIN DENTRO DO ARRAY ESTÁTICO ( _ADMINS )
            const indiceDaBusca = AdminRepository._admins.findIndex(ad => ad.idUser === admin.idUser);

            // SE O RESULTADO DA BUSCA RETORNAR UM VALOR DIFERENTE DE 'UNDEFINED' (-1):
            if (indiceDaBusca !== -1) {

                AdminRepository._admins[indiceDaBusca] = admin;
            }
        } catch (error) {
            throw new Error('Erro ao atualizar os dados do Admin');
        }

    }



    // O REPOSITÓRIO RECEBE UM ARRAY 'FILTRADO' JÁ COM O ADMIN REMOVIDO
    async removerAdmin(id: number) {

        try {

            AdminRepository._admins = AdminRepository._admins.filter(admin => admin.idUser !== id);
        } catch (error) {
            throw new Error('Erro ao remover um Admin');
        }
    }
}