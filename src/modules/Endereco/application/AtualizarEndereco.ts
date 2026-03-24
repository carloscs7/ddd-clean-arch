import { EnderecoRepository } from "../infrastructure/EnderecoRepository";

export class AtualizarEndereco{

      constructor(private repository = new EnderecoRepository){}
        
        async execute(idEndereco: number, logradouro: string, numero: number, bairro: string, cidade: string, estado: string){

            const end = await this.repository.buscarEnderecoPorID(idEndereco);

            if (!end){
                console.log("Endereco não existe");
            }else{
                end.logradouro = logradouro;
                end.numero = numero;
                end.bairro = bairro;
                end.cidade = cidade;
                end.estado = estado;
            }

            await this.repository.atualizarEndereco(end!);
                
        }
    
}