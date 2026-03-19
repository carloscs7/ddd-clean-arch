export default function BuscarAdminPorIdForm(){

    return (

        <div>

            <form method="GET" action={"/api/admins/buscar-admin-id"}>
                <fieldset>
                    <label htmlFor="idUser"> ID do Admin: </label> <input type="number" id="idUser" name="idUser" required />
                    <button type="submit"> Buscar Admin </button>
                </fieldset>
            </form>

        </div>
    );
}