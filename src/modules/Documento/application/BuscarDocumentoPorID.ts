import { DocumentoRepository } from "../Infrastructure/DocumentoRepository";

export class buscarDocumentoPorID{
    constructor(private repository = new DocumentoRepository())
    {}

    async execute(idDocumento: number){

        return this.repository.buscarDocumentoPorID(idDocumento);
    }
}