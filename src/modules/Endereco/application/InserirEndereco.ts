import { Endereco } from "../Domain/Endereco";
import { EnderecoRepository } from "../infrastructure/EnderecoRepository";

export class InserirEnderecos{
   
    constructor(private repository = new EnderecoRepository())
    
    {}
    
    async execute(idEndereco: number, logradouro: string, numero: number, bairro: string, cidade: string, estado: string){

        const endereco = new Endereco(idEndereco, logradouro, numero, bairro, cidade, estado)

        await this.repository.inserirEndereco(endereco);

            
    }

}