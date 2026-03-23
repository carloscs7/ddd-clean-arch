import { DocumentoRepository } from "../Infrastructure/DocumentoRepository";

export class removerDocumento{
    constructor (private repository = new DocumentoRepository())
    {}

    async execute(idDocumento: number){

        await this.repository.removerDocumento(idDocumento);
    }
}