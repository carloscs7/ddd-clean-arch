export abstract class Usuario {

    private readonly _idUser: number;
    private _email: string;
    private _senha: string;
    private _ativo: boolean;

    constructor(idUser: number, email: string, ativo: boolean, senha: string) {
        this._idUser = idUser;
        this._email = email;
        this._ativo = ativo;
        this._senha = senha;     
    }

    get idUser(){
        return this._idUser;
    }

    get email(){
        return this._email;
    }

    get ativo(){
        return this._ativo;
    }

    get senha(){
        return this._senha;
    }



    set email(email){
        this._email = email;
    }

    set ativo(ativo){
        this._ativo = ativo;
    }

    set senha(senha){
        this._senha = senha;
    }
}