import { EnderecoRepository } from "../infrastructure/EnderecoRepository";

export class BuscarEnderecoPorID{

    constructor(private repository = new EnderecoRepository()){}
    
    async execute(idEndereco: number){
    
        return this.repository.buscarEnderecoPorID(idEndereco);
    }

}