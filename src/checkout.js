import { desenharProdutoNoCarrinhoSimples, lerLocalStorage, apagarDoLocalStorege, salvarLocalStorage } from "./utilidade";

function desenharProdutoCheckout() {
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
    for (const idProduto in idsProdutoCarrinhoComQuantidade) {
        desenharProdutoNoCarrinhoSimples(idProduto, "container-produtos-checkout", idsProdutoCarrinhoComQuantidade[idProduto]);
    }
}

function finalizarCompra(evento) {
    evento.preventDefault();
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
    if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
        return;
    }
    const dataAtual = new Date();
    const pedidoFeito = {
        dataPedido: dataAtual,
        pedido: idsProdutoCarrinhoComQuantidade
    }
    const historicoDePedidos = lerLocalStorage("historico") ?? [];
    const historicoDePedidosAtualizados = [pedidoFeito, ...historicoDePedidos];
    salvarLocalStorage("historico", historicoDePedidosAtualizados);
    apagarDoLocalStorege("carrinho")
    window.location.href = "./pedidos.html";
}

desenharProdutoCheckout();

document.addEventListener("submit", (evt) => finalizarCompra(evt));
