// Array com dados temporários.
// Eles existem apenas enquanto a página está aberta.
const chamados = [
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
        titulo: "notebook não liga",

        // Descrição detalhada.
        descricao: "O computador não apresenta sinal de energia.",

        // Prioridade do atendimento.
        prioridade: "Alta",

        // Situação atual.
        status: "Encerrado"
    }
];


// Função que desenha a listagem.
function mostrarChamados() {

    app.innerHTML = `
        <h1 class="mb-4">Chamados</h1>

        <div class="table-responsive">
            <table class="table table-striped align-middle">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Prioridade</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    ${
                        // map transforma cada objeto em uma linha HTML.
                        chamados.map(chamado => `
                            <tr>
                                <td>${chamado.id}</td>
                                <td>${chamado.titulo}</td>
                                <td>${chamado.prioridade}</td>
                                <td>${chamado.status}</td>
                            </tr>
                        `)
                        // join une todas as linhas sem vírgula.
                        .join("")
                    }
                </tbody>
            </table>
        </div>
    `;
}