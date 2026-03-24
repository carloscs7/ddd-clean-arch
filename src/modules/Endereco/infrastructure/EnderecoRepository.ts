import { Endereco } from "../Domain/Endereco"

export class EnderecoRepository {

    private static enderecos: Endereco[] = [];

    // Listar endereços.
    async listarEnderecos() {
        return EnderecoRepository.enderecos;
    }

    // Buscar endereços por ID.
    async buscarEnderecoPorID(idEndeco: number) {
        return EnderecoRepository.enderecos.find(endereco => endereco.idEndereco === idEndeco);
    }

    // Inserir endereços.
    async inserirEndereco(endereco: Endereco) {
        EnderecoRepository.enderecos.push(endereco);

    }

    // Remover endereços.
    async removerEndereco(idEndereco: number) {
        EnderecoRepository.enderecos = EnderecoRepository.enderecos.filter(enderecos => enderecos.idEndereco !== idEndereco);
    }

    // Atualizar endereços.
    async atualizarEndereco(endereco: Endereco) {

            
            const indice = EnderecoRepository.enderecos.findIndex(doc => doc.idEndereco === endereco.idEndereco);

            if (indice !== -1) {
                EnderecoRepository.enderecos[indice] = endereco;

            } else {
                console.log("Endereço não encontrado!");
            }
        
    }
}