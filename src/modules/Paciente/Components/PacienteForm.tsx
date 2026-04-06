"use client"

import { DocumentoForm } from "@/modules/Documento/Componets/DocumentoForm";
import { EnderecoForm } from "@/modules/Endereco/Components/EnderecoForm";
import { TelefoneForm } from "@/modules/Telefone/Components/TelefoneForm";
import { useState } from "react"

export function PacienteForm({onsubmit}: any){

    const [nome, setNome] = useState("");
    const [genero, setGenero] = useState("");
    const [idade, setIdade] = useState("");
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState(""); 

    const [documento, setDocumento] = useState<any>(null);
    const [endereco, setEndereco] = useState<any>(null);
    const [telefone, setTelefone] = useState<any>(null);

    return(
        <div>

            Nome: <input type="text" value={nome} onChange={e => setNome(e.target.value)}/><br/>
            Gênero: <input type="text" value={genero} onChange={e => setGenero(e.target.value)}/><br/>
            Idade: <input type="text" value={idade} onChange={e => setIdade(e.target.value)}/><br/>
            Peso: <input type="text" value={peso} onChange={e => setPeso(e.target.value)}/><br/>
            Altura: <input type="text" value={altura} onChange={e => setAltura(e.target.value)}/><br/>

            <hr />

            <DocumentoForm onsubmit = {(numeroDocumento: string, tipoDocumento: string) => {
                setDocumento({numeroDocumento, tipoDocumento})
            }} />

            <EnderecoForm onsubmit = {(logradouro: string, numero: number, bairro: string, cidade: string, estado: string) => {
                setEndereco({logradouro, numero, bairro, cidade, estado})
            }} />

            <TelefoneForm onsubmit = {(ddd: string, numeroTelefone: number, tipoTelefone: string, ativo: boolean) => {
                setTelefone({ddd, numeroTelefone, tipoTelefone, ativo })
            }} />

            <button type="submit">Salvar Dados</button>

        </div>
    )

}