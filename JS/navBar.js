import { mostrarDashboard } from "./dashboard";

// Guardaremos a referência para alterar a tela.
const app = document.getElementById("app");

// Seleciona todos os elementos que têm data-view.
const links = document.querySelectorAll("[data-view]");

// Percorre os links.
links.forEach(link => {

    // Escuta clique.
    link.addEventListener("click", evento => {

        // Impede navegação padrão.
        evento.preventDefault();

        // Lê data-view.
        const view = link.dataset.view;

        // Decide qual "tela" mostrar.
        if (view === "dashboard") {
            mostrarDashboard();
        }

        if (view === "chamados") {
            mostrarChamados();
        }

        if (view === "novo") {
            mostrarNovoChamado();
        }
    });
});

// Primeira tela.
mostrarDashboard();
