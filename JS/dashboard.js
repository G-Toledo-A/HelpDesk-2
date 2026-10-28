//importa a lista de chamados
import { chamados } from "./chamados.js";

// Procura o elemento <div id="app">.
// Função que desenha o Dashboard.
export function mostrarDashboard() {

    // filter cria um novo array com chamados abertos.
    // length conta quantos existem.
    const abertos = chamados
        .filter(chamado => chamado.status === "Aberto")
        .length;

    const sendoAtendidos = chamados
        .filter(chamado => chamado.status === "Em atendimento")
        .length;

    const encerrados = chamados
        .filter(chamado => chamado.status === "Encerrado")
        .length;

    const prioritarios = chamados
        .filter(chamado => chamado.prioridade === "Alta")
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

            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h2 class="h5">Sendo atendidos</h2>

                        <p class="display-6">
                            ${sendoAtendidos}
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h2 class="h5">Encerrados</h2>

                        <p class="display-6">
                            ${encerrados}
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h2 class="h5">De alta prioridade</h2>

                        <p class="display-6">
                            ${prioritarios}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}