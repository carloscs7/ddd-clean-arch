import { Documento } from "../Domain/Documento";

export class DocumentoRepository{

    private static documentos: Documento[] = [];

    // LISTAR DOCUMENTOS:
    async listarDocumentos(){
        
        return DocumentoRepository.documentos;
    }
}