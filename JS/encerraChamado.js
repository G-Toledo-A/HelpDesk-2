import { chamados, mostrarChamados } from "./chamados.js";
import { equivale } from "./alterarStatus.js";

export function clamaJustificativa(idChamado){
    //vai na lista / array, pega o objeto
    const chamado = equivale(idChamado);

    //procura pelo id do chamado
    //confirma status
    if (chamado.status === "Em atendimento"){
        
        //monta a nova tela com os dados
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
                        Qual foi a solução?
                    </label>

                    <textarea
                        class="form-control"
                        id="justificativa"
                        rows="4">
                    </textarea>
                </div>

                <button class="btn btn-success" type="submit">
                    Cadastrar
                </button>
            </form>
        `;

        //determina o formulario
        const formulario = document.getElementById("formFechamento");

        //pega justificativa
        formulario.addEventListener("submit", (event) => {
            event.preventDefault();

            adicionaJustificativa(chamado.id);
        });
    }
}

//adiciona um novo atributo somente aquele chamado da lista
function adicionaJustificativa(id){
    
    const chamado = equivale(id);

    chamado.solucao = document.getElementById("justificativa").value;

    chamado.status = "Encerrado";

    mostrarChamados();
}