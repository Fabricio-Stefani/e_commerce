import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo";
import { inicializarCarrinho, atualizarPrecoCarrinho, renderizarProdutoCarrinho } from "./src/menuCarrinho";



renderizarCatalogo();
inicializarCarrinho();
renderizarProdutoCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();