import { Usuario } from "@/modules/Usuario/domain/Usuario";

export class Admin extends Usuario{

    private _nome: string;

    constructor(idUser: number, email: string, ativo: boolean, senha: string, nome: string){
        super(idUser, email, ativo, senha)
        this._nome = nome;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }
}