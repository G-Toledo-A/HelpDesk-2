import { chamados, mostrarChamados } from "./chamados.js";
import { clamaJustificativa } from "./encerraChamado.js";
import { mostraDadosChamado } from "./dadosChamado.js";

//equivale o item da lista usando o id coletado
export function equivale(valor) {
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

//houve o load da tabela
export function ouveTabela(item){
    item.addEventListener("click",function(afeta){
        const botao = afeta.target.closest("button[data-id]");

        if(!botao || !"button[data-id"){
            return;
        }

        //botões de alteração de status
        if(botao.id === "btnAtender"){
            // status = "Aberto"
            //puxa função para mudar o status do chamado
            atendeChamado(botao.dataset.id);
        }
        else if(botao.id === "btnEncerrar"){
            // status = "Em atendimento"
            clamaJustificativa(botao.dataset.id);
        }

        //botão de visualização
        if(botao.id === "btnVisu"){
            console.log(botao.id);
            console.log(botao.dataset.id);
            mostraDadosChamado(botao.dataset.id);
        }
    })
}