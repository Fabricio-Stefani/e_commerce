const catalogoPodutos = document.getElementById("container-produto");

function exibirTodos() {
    const produtosEscondidos = Array.from(catalogoPodutos.getElementsByClassName("hidden"));

    for (const produto of produtosEscondidos) {
        produto.classList.remove("hidden");
    }
}

function esconderMasculinos() {
    exibirTodos();
    const produtosMasculinos = Array.from(catalogoPodutos.getElementsByClassName("masculino"));

    for (const produto of produtosMasculinos) {
        produto.classList.add("hidden");
    }
}


function esconderFemininos() {
    exibirTodos();
    const produtosFemininos = Array.from(catalogoPodutos.getElementsByClassName("feminino"));

    for (const produto of produtosFemininos) {
        produto.classList.add("hidden");
    }
}

export function inicializarFiltros() {
    document.getElementById("exibir-todos").addEventListener("click", exibirTodos);
    document.getElementById("exibir-feminino").addEventListener("click", esconderMasculinos);
    document.getElementById("exibir-masculino").addEventListener("click", esconderFemininos);
}