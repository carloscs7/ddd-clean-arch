import { Telefone } from "../Domain/Telefone";

export class TelefoneRepository {

    private static telefones: Telefone[] = [];

    // Listar telefones.
    async listarTelefones() {
        return TelefoneRepository.telefones;
    }

    // Buscar telefone por ID.
    async buscarTelefonePorID(idTelefone: number) {
        return TelefoneRepository.telefones.find(telefone => telefone.idTelefone === idTelefone);
    }

    // Buscar telefone por Numero.
    async buscarTelefonePorNumero(numeroTelefone: string) {
        return TelefoneRepository.telefones.find(telefone => telefone.numeroTelefone === numeroTelefone);
    }

    // Inserir telefones.
    async inserirTelefone(telefone: Telefone) {
        TelefoneRepository.telefones.push(telefone);

    }

    // Remover telefone.
    async removerTelefone(idTelefone: number) {
        TelefoneRepository.telefones = TelefoneRepository.telefones.filter(telefone => telefone.idTelefone !== idTelefone);
    }

    // Atualizar telefone.
    async atualizarTelefone(telefone: Telefone) {

            
            const indice = TelefoneRepository.telefones.findIndex(tel => tel.idTelefone === telefone.idTelefone);

            if (indice !== -1) {
                TelefoneRepository.telefones[indice] = telefone;

            } else {
                console.log("Endereço não encontrado!");
            }
        
    }
}