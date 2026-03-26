import { Endereco } from "@/modules/Endereco/Domain/Endereco";
import { PacienteRepository } from "../infrastructure/PacienteRepository";


export class AtualizarPaciente{

    constructor( private repository = new PacienteRepository())
    {}

    async execute(id: number, nome: string, genero: string, idade: number, peso: number, altura: number, 
        idDocumento: number, numeroDocumento: string, tipoDocumento: string, endereco: Endereco){

        const pac = await this.repository.buscarPacientePorID(id);

        if(!pac){
            console.log("Documento não existe");

        }else{
            pac.nome = nome;
            pac.genero = genero;
            pac.idade = idade;
            pac.peso = peso
            pac.altura = altura;

            pac.atualizarDocumento(numeroDocumento, tipoDocumento);
            pac.endereco = endereco;
        }

        await this.repository.atualizarPaciente(pac!);
    }
}