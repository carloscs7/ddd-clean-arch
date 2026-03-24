import { EnderecoRepository } from "../infrastructure/EnderecoRepository";

export class ListarEnderecos{

    constructor(private repository = new EnderecoRepository())

    {}

    async execute(){
        return this.repository.listarEnderecos;
    }
}