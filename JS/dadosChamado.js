import { equivale } from "./alterarStatus.js";

export function mostraDadosChamado(id){
    const chamado = equivale(id);

    if(!chamado.solucao){

    app.innerHTML = `
        <h1 class="mb-4">Justifique o fechamento</h1>

        <form id="formFechamento">
            <div class="mb-3">
                <label class="form-label">
                    ID: ${chamado.id}
                </label>
            </div>

            <div class="mb-3">
                <label class="form-label" for="titulo">
                    Título: ${chamado.titulo}
                </label>
            </div>

            <div class="mb-3">
                <label class="form-label" for="descricao">
                    Descrição : ${chamado.descricao}
                </label>
            </div>

            <div class="mb-3">
                <label class="form-label" for="prioridade">
                    Prioridade
                </label>

                <select class="form-select" id="prioridade" required>
                    <option>${chamado.prioridade}</option>
                </select>
            </div>
        </form>
    `;
    }
    else{
        app.innerHTML = `
            <h1 class="mb-4">Justifique o fechamento</h1>

            <form id="formFechamento">
                <div class="mb-3">
                    <label class="form-label">
                        ID: ${chamado.id}
                    </label>
                </div>

                <div class="mb-3">
                    <label class="form-label" for="titulo">
                        Título: ${chamado.titulo}
                    </label>
                </div>

                <div class="mb-3">
                    <label class="form-label" for="descricao">
                        Descrição : ${chamado.descricao}
                    </label>
                </div>

                <div class="mb-3">
                    <label class="form-label" for="prioridade">
                        Prioridade
                    </label>

                    <select class="form-select" id="prioridade" required>
                        <option>${chamado.prioridade}</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label class="form-label" for="justificativa">
                        Justificativa : ${chamado.solucao}
                    </label>
                </div>
            </form>
        `;
    }
}