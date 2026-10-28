import { ouveTabela } from "./alterarStatus.js";

// Array com dados temporários.
// Eles existem apenas enquanto a página está aberta.

// exporta a lista para outros arquivos
export const chamados = [
    {
        // Identificador único deste exemplo.
        id: 1,

        // Título curto.
        titulo: "Computador não liga",

        // Descrição detalhada.
        descricao: "O computador não apresenta sinal de energia.",

        // Prioridade do atendimento.
        prioridade: "Alta",

        // Situação atual.
        status: "Aberto"
    },
    {
        id: 2,
        titulo: "Senha bloqueada",
        descricao: "Usuário não consegue acessar o sistema.",
        prioridade: "Média",
        status: "Em atendimento"
    },
    {
        // Identificador único deste exemplo.
        id: 3,

        // Título curto.
        titulo: "teste",

        // Descrição detalhada.
        descricao: "item da lista criado para testar filtragem",

        // Prioridade do atendimento.
        prioridade: "Baixa",

        // Situação atual.
        status: "Aberto"
    },
    {
        // Identificador único deste exemplo.
        id: 4,

        // Título curto.
        titulo: "notebook não liga",

        // Descrição detalhada.
        descricao: "O computador não apresenta sinal de energia.",

        // Prioridade do atendimento.
        prioridade: "Alta",

        // Situação atual.
        status: "Encerrado"
    }
];

function organizarLista(lista) {

    //objeto criado para determinação de valor de posição em lista
    const nivelDprioridade = {
        "Alta": 1,
        "Média": 2,
        "Baixa": 3
    };

    //compara os itens da lista de acordo com o valor do objeto criado 
    lista.sort((a, b) => 
        nivelDprioridade[a.prioridade] - nivelDprioridade[b.prioridade]);

    return lista;
}

// Função que desenha a listagem.
export function mostrarChamados() {
    //organiza a lista de chamados no inicio do chamado da função exportada
    organizarLista(chamados);

    //objeto de classes criado para carregar a comparação
    const nivelDprioridade = {
        "Alta": "alta",
        "Média": "media",
        "Baixa": "baixa"
    };

    //objeto de classes para realizar ações de chamados
    const estado = {
        "Aberto":        (id) => 
            `<button type="button" class="btn btn-primary" id="btnAtender" data-id="${id}">Atender</button>`,
        "Em atendimento":(id) =>  
            `<button type="button" class="btn btn-primary" id="btnEncerrar" data-id="${id}">Encerrar</button>`,
        "Encerrado":     (id) =>
            `<button type="button" class="btn btn-secondary" data-id="${id}" disabled>Terminado</button>`
    };

    // map transforma cada objeto em uma linha HTML.
    const listaChamados = chamados.map(chamado => {
        //compara a prioridade com o objeto e determina a classe de acordo
        const nivel = nivelDprioridade[chamado.prioridade] || "";
        //chama o botão dependendo do status.
        const estadoDstatus = estado[chamado.status] ? estado[chamado.status](chamado.id) : "";
       /*
        const estadoDstatus = estado[chamado.status] || "";
        */

        return `
            <!-- determina a classe do chamado de acordo com a prioridade -->
            <tr class="${nivel}">
                <td>${chamado.id}</td>
                <td>${chamado.titulo}</td>
                <td>${chamado.prioridade}</td>
                <td>${chamado.status}</td>
                <td>${estadoDstatus}</td>
                <td><button type="button" class="btn btn-primary" id="btnVisu" data-id="${chamado.id}">Visualizar</button></td>
            </tr>
        
        <!-- join une todas as linhas sem vírgula. -->
        `;
    }).join("");

    app.innerHTML = `
        <h1 class="mb-4">Chamados</h1>

        <div class="table-responsive">
            <table class="table table-striped align-middle table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Prioridade</th>
                        <th>Status</th>
                        <th colspan="2">Ações</th>
                    </tr>
                </thead>

                <tbody id="corpoTabela">
                    ${listaChamados}
                </tbody>
            </table>
        </div>
    `;

    ouveTabela(app);
}