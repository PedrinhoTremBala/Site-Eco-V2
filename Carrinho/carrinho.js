       function carregarCarrinho() {
            let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

            if (carrinho.length === 0) {
                document.getElementById('carrinho-container').innerHTML = '<div class="empty-cart">Carrinho vazio.</div>';
                return;
            }

            carrinho.forEach(item => {
                const divItem = document.createElement('div');
                divItem.classList.add('item');
                divItem.innerHTML = `
                    <img src="${item.imagem}" alt="${item.nome}">
                    <div class="item-info">
                        <span><strong>${item.nome}</strong></span>
                        <span>${item.preco}</span>
                    </div>
                    <span class="item-remove" onclick="removerItem('${item.nome}')">Remover</span>
                `;
                document.getElementById('carrinho-container').appendChild(divItem);
            });
        }

        function removerItem(nome) {
            let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
            carrinho = carrinho.filter(item => item.nome !== nome);
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            carregarCarrinho();
        }

        window.onload = carregarCarrinho;