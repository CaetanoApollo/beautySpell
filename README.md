# Beauty Spell - Cosméticos Místicos

O código que você forneceu está escrito em JavaScript e HTML/CSS. Aqui está uma análise da funcionalidade do código:

**Arquivos HTML (HTML Files):**

* `index.html`: Esta é a página inicial do site. Ela exibe duas seções, "Sessão Dia" e "Sessão Noite", que mostram os produtos categorizados para uso durante o dia e a noite. Também inclui cabeçalho, rodapé e um link para o arquivo de script.
* `carrinho.html`: Esta é a página do carrinho de compras. Ela exibe uma tabela com detalhes do produto, como nome, preço, quantidade e subtotal. Possui também uma seção para o resumo do carrinho (subtotal, frete e total) e botões para "Confirmar Pedido" e "Voltar para a página principal".
* `checkout.html`: Esta é a página de finalização de compra. Possui um formulário onde os usuários podem inserir suas informações de pagamento (número do cartão, nome, data de validade e CVV). Também inclui botões para "Finalizar Pedido" e "Voltar para a página principal".
* `produto.html`: Esta é a página do produto. Ela exibe a imagem, nome, preço, descrição de um único produto e botões "Adicionar ao Carrinho" e "Comprar Agora". Também inclui um botão Voltar.

**Arquivo CSS (CSS File):**

Este arquivo define o estilo do site, incluindo fontes, cores, layout e formatação para vários elementos como cabeçalhos, rodapés, botões, seções de produtos, etc.

**Arquivo JavaScript (JavaScript File):**

Este arquivo contém a lógica principal do site.

* **Carregar Produtos (Load Products):** Esta função busca dados de produtos de uma fonte (um array definido no próprio script) e preenche as seções de produtos na página principal (index.html).
* **Carregar Detalhes do Produto (Load Product Details):**  Esta função obtém o ID do produto da URL quando um produto é clicado na página principal e o usa para buscar os detalhes específicos do produto e exibi-los na página do produto (produto.html).
* **Adicionar ao Carrinho (Add to Cart):** Esta função adiciona o ID de um produto selecionado ao carrinho do usuário (armazenando-o no Local Storage).
* **Carregar Carrinho (Load Cart):**  Esta função recupera os IDs dos produtos do carrinho do usuário (armazenados no Local Storage) e busca os dados dos produtos correspondentes para preencher a tabela do carrinho na página do carrinho de compras (carrinho.html). Também calcula o subtotal e o preço total.
* **Redirecionar para Carrinho/Finalizar Compra (Redirect to Cart/Checkout):**  Estas funções lidam com cliques em botões e redirecionam o usuário para a página do carrinho de compras ou de finalização de compra (carrinho.html ou checkout.html).
* **Obter ID do Produto da URL (Get Product ID from URL):**  Esta função extrai o ID do produto da URL quando um link do produto é clicado.
* **Configurar Botão Voltar (Setup Back Button):**  Esta função adiciona um listener de evento de clique ao botão Voltar em várias páginas, redirecionando o usuário de volta para a página principal (index.html).


Um site sobre cosméticos místicos, desenvolvido por três alunos do Senac São Leopoldo: Caetano Apollo, Eduarda Cheiran e Isabelli Fernandes. Utilizamos linguagens de marcação de texto (HTML e CSS) e também linguagens de programação (JavaScript) para criar este projeto.

https://caetanoapollo.github.io/beautySpell/index.html
