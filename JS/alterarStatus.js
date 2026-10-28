import { chamados } from "./chamados.js";

function atendeChamado(idChamado){
    //vai na lista / array
    //procura pelo id do chamado
    //confirma status
    if (chamados[idChamado].status === "Aberto"){
        //muda status
        console.log("Botão \"funcionando\"")
        chamados[idChamado].status = "Em atendimento";
    }
    return;
}

function clamaJustificativa(idChamado){
    //vai na lista / array
    //procura pelo id do chamado
    //confirma status
    //pega os dados
    //limpa a tela
    //mota a nova tela com os dados
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
            //teste(pega o tipo do botão e o id do item)
            console.log("Ação:", botao.id)
            console.log("Id:", botao.dataset.id)
        }
        else if(botao.id === "btnEncerrar"){
            // status = "Em atendimento"
            clamaJustificativa(botao.dataset.id);
            //teste(pega o tipo do botão e o id do item)
            console.log("Ação:", botao.id)
            console.log("Id:", botao.dataset.id)
        }
    })
}