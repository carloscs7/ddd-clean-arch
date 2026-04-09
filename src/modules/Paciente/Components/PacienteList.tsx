"use client"

import { useEffect, useState } from "react"
import { ListarPaciente } from "../application/ListarPaciente";
import { Endereco } from "@/modules/Endereco/Domain/Endereco";
import { InserirPaciente } from "../application/InserirPaciente";
import { RemoverPaciente } from "../application/removerPaciente";
import { PacienteForm } from "./PacienteForm";

export function PacienteList() {

    async function carregarPacientes() {

        const [pacientes, setPacientes] = useState<any[]>([]);

        const uc = new ListarPaciente();
        const lista = await uc.execute();

        setPacientes(lista);
    }

    useEffect(()=>{

        carregarPacientes();
    }, []);

    async function inserirPaciente(dados:any) {
        const endereco = new Endereco(1, dados.endereco.logradouro, dados.endereco.numero, dados.endereco.bairro, 
        dados.endereco.cidade, dados.endereco.estado);

        const uc = new InserirPaciente();

        await uc.execute(
            dados.id,
            dados.nome,
            dados.genero,
            dados.idade,
            dados.peso,
            dados.altura,
            1,
            dados.numeroDocumento,
            dados.tipoDocumento,
            endereco
        );

        await carregarPacientes();
        
    }

    async function removerPaciente(id: number) {

        const uc = new RemoverPaciente();

        await uc.execute(id);

        await carregarPacientes();
        
    }

    return(

        <div>

            <PacienteForm onsubmit={inserirPaciente} />
            <hr/>

            <h2> LISTA DE PACIENTES: </h2>

            {PacienteList.}

        </div>
    );


}