// Função que desenha o formulário.
function mostrarNovoChamado() {

    app.innerHTML = `
        <h1 class="mb-4">Novo chamado</h1>

        <form id="formChamado">
            <div class="mb-3">
                <label class="form-label" for="titulo">
                    Título
                </label>

                <input
                    class="form-control"
                    id="titulo"
                    required>
            </div>

            <div class="mb-3">
                <label class="form-label" for="descricao">
                    Descrição
                </label>

                <textarea
                    class="form-control"
                    id="descricao"
                    rows="4">
                </textarea>
            </div>

            <div class="mb-3">
                <label class="form-label" for="prioridade">
                    Prioridade
                </label>

                <select class="form-select" id="prioridade" required>
                    <option value="">Selecione</option>
                    <option>Baixa</option>
                    <option>Média</option>
                    <option>Alta</option>
                </select>
            </div>

            <button class="btn btn-success" type="submit">
                Cadastrar
            </button>
        </form>
    `;

    // Procura o formulário que acabou de ser criado.
    const formulario = document.getElementById("formChamado");

    // Escuta o envio do formulário.
    formulario.addEventListener("submit", cadastrarChamado);
}

// Função executada no submit.
function cadastrarChamado(evento) {

    // Impede o navegador de recarregar a página.
    evento.preventDefault();

    // push adiciona um novo objeto no array.
    chamados.push({
        // ID simplificado para aula.
        id: chamados.length + 1,

        // Lê o valor do campo título.
        titulo: document.getElementById("titulo").value,

        // Lê o valor da descrição.
        descricao: document.getElementById("descricao").value,

        // Lê o valor selecionado.
        prioridade: document.getElementById("prioridade").value,

        // Novo chamado começa aberto.
        status: "Aberto"
    });

    // Depois do cadastro, mostra a lista.
    mostrarChamados();
}