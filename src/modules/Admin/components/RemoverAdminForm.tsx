export default function RemoverAdminForm(){

    return (

        <div>

            <form method="GET" action={"/api/admins/remover"}>
                <fieldset>
                    <legend> Informe o ID do Admin a remover </legend>
                    <label htmlFor="idUser"> ID do Admin: </label> <input type="number" id="idUser" name="idUser" required />
                    <button type="submit"> Remover Admin </button>
                </fieldset>
            </form>

        </div>
    );
}