
export default function InserirAdminForm() {

    return (

        <div>
            <form method="GET" action={"/api/admins/inserir"}>
                <fieldset>
                    <legend> Insira dos dados do Admin: </legend>
                    <label htmlFor="idUser"> ID: </label> <input type="number" id="idUser" name="idUser" required />
                    <label htmlFor="email"> E-mail: </label> <input type="email" id="email" name="email" required />

                    <label htmlFor="ativo"> Ativo? </label>
                    <select id="ativo" name="ativo">
                        <option value={"true"}> SIM </option>
                        <option value={"false"}> NÃO </option>
                    </select>

                    <label htmlFor="senha"> Senha: </label> <input type="password" id="senha" name="senha" required />

                    <label htmlFor="nome"> Nome: </label> <input type="text" id="nome" name="nome" required />

                    <button type="submit"> Inserir Admin </button>
                </fieldset>
            </form>
        </div>
    );
}