import { TelefoneRepository } from "../Infrastructure/TelefoneRepository";


export class BuscarTelefonePorID{

    constructor(private repository = new TelefoneRepository()){}
    
    async execute(idTelefone: number){
    
        return this.repository.buscarTelefonePorID(idTelefone);
    }

}

