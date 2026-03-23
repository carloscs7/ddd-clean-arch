import { DocumentoRepository } from "../Infrastructure/DocumentoRepository";

export class AtualizarDocumento{

    constructor( private repository = new DocumentoRepository())
    {}

    async execute(idDocumento: number, numeroDocumento: string, tipoDocumento: string){

        const doc = await this.repository.buscarDocumentoPorID(idDocumento);

        if(!doc){
            console.log("Documento não existe");

        }else{
            doc.numeroDocumento = numeroDocumento;
            doc.tipoDocumento = tipoDocumento;
        }

        await this.repository.atualizarDocumento(doc!);
    }
}