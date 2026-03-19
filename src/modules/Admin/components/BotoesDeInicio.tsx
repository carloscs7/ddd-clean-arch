import Link from "next/link";

export default function BotoesDeInicio() {
    return (
        <div>
            <Link href={"/admins"}> Listar Admins </Link> <br />
            <Link href={"/admins/inserir"}> Inserir Admin </Link> <br />
            <Link href={"/admins/buscar-admin-id"}> Buscar Admin por ID </Link> <br />
            <Link href={"/admins/buscar-admin-nome"}> Buscar Admin por Nome </Link> <br />
            <Link href={"/admins/remover"}> Remover Admin </Link> <br />
            <Link href={"/admins/alterar"}> Alterar Admin </Link> <br />
        </div>
    );
}