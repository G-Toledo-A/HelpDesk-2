import { chamados, mostrarChamados } from "./chamados.js";

//equivale o item da lista usando o id coletado
function equivale(valor) {
    //equivale "chamado" usando o número pego com o id na lista.
    const chamado = chamados.find((item) => item.id === Number(valor));

    if (!chamado) {
        console.log("Chamado não encontrado");
        return null;
    }
    //retorna o objeto :D
    return chamado;
}

function atendeChamado(idChamado){
    //vai na lista / array, pega o objeto
    const chamado = equivale(idChamado);
    
    //procura pelo id do chamado
    //confirma status
    // Confirma status acessando as propriedades do objeto retornado
    if (chamado.status === "Aberto") {
        // Altera o status diretamente no objeto (que aponta para a referência no array)
        chamado.status = "Em atendimento";
    }
    //atualiza tabela
    mostrarChamados();
}

function clamaJustificativa(idChamado){
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
                        ID: ${chamados[idChamado].id}
                    </label>
                </div>

                <div class="mb-3">
                    <label class="form-label" for="titulo">
                        Título: ${chamados[idChamado].titulo}
                    </label>
                </div>

                <div class="mb-3">
                    <label class="form-label" for="descricao">
                        Descrição : ${chamados[idChamado].descricao}
                    </label>
                </div>

                <div class="mb-3">
                    <label class="form-label" for="prioridade">
                        Prioridade
                    </label>

                    <select class="form-select" id="prioridade" required>
                        <option>${chamados[idChamado].prioridade}</option>
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
        formulario.addEventListener("submit", adicionaJustificativa);

        //adiciona um novo atributo somente aquele chamado da lista
        
    }
}

//houve o load da tabela
export function ouveTabela(item){
    item.addEventListener("click",function(afeta){
        const botao = afeta.target.closest("button[data-id]");

        if(!botao || !"button[data-id"){
            return;
        }

        if(botao.id === "btnAtender"){
            // status = "Aberto"
            //puxa função para mudar o status do chamado
            atendeChamado(botao.dataset.id);
        }
        else if(botao.id === "btnEncerrar"){
            // status = "Em atendimento"
            clamaJustificativa(botao.dataset.id);
        }
    })
}