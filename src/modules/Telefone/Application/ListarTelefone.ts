import { TelefoneRepository } from "../Infrastructure/TelefoneRepository";


export class listarTelefones{

    constructor(private repository = new TelefoneRepository())

    {}

    async execute(){
        return this.repository.listarTelefones;
    }
}