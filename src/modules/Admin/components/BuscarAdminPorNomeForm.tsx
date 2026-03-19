export default function BuscarAdminPorNomeForm(){

    return (

        <div>

            <form method="GET" action={"/api/admins/buscar-admin-nome"}>
                <fieldset>
                    <label htmlFor="nome"> Nome do Admin: </label> <input type="text" id="nome" name="nome" required />
                    <button type="submit"> Buscar Admin </button>
                </fieldset>
            </form>

        </div>
    );
}