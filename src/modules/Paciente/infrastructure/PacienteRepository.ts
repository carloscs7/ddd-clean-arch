import { Paciente } from "../Domain/Paciente";

export class PacienteRepository{

    private static pacientes: Paciente[] = [];

    // LISTAR PACIENTE:
    async listarPaciente(){

        return PacienteRepository.pacientes;
    }

    // INSERIR PACIENTES:
    async inserirPacientes(paciente: Paciente){

        PacienteRepository.pacientes.push(paciente);
    }

    // BUSCAR POR ID:
    async buscarPacientePorID(idPaciente: number){

        return PacienteRepository.pacientes.find(pac => pac.id === idPaciente);

    }

    // REMOVER PACIENTE:
    async removerPaciente(idPaciente: number){
        PacienteRepository.pacientes = PacienteRepository.pacientes.filter(pac => pac.id !== idPaciente);
    }

    // ATUALIZAR PACIENTE:
    async atualizarPaciente(paciente: Paciente){

        // Buscando a posição em que o documento solicitado para atualizar para dentro do array.
        const indice = PacienteRepository.pacientes.findIndex(pac => pac.id === paciente.id);

        if(indice !== -1){
            PacienteRepository.pacientes[indice] = paciente;

        }else{
            console.log("Documento não encontrado!");
        }
    }
}