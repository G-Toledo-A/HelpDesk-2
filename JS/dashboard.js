// Procura o elemento <div id="app">.
// Função que desenha o Dashboard.
export function mostrarDashboard() {

    // filter cria um novo array com chamados abertos.
    // length conta quantos existem.
    const abertos = chamados
        .filter(chamado => chamado.status === "Aberto")
        .length;

    // innerHTML substitui o conteúdo da área principal.
    app.innerHTML = `
        <h1 class="mb-4">Dashboard</h1>

        <div class="row g-3">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h2 class="h5">Total de chamados</h2>

                        <p class="display-6">
                            ${chamados.length}
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h2 class="h5">Abertos</h2>

                        <p class="display-6">
                            ${abertos}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}