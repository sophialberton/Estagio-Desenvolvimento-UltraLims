// Lista para armazenar os endereços que o usuário consultar
const listaEnderecos = [];

// Função para consultar o CEP e buscar as informações do endereço
function consultarCEP() {
    // Pega o valor do CEP inserido no campo de entrada e remove qualquer caractere não numérico
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    // Pega a div onde serão mostrados os resultados da consulta
    const resultadoDiv = document.getElementById('resultado');

    // Verifica se o CEP tem exatamente 8 dígitos, caso contrário, mostra um alerta
    if (cep.length !== 8) {
        alert("CEP inválido!");
        return; // Se o CEP for inválido, a função é interrompida aqui
    }

    // Requisição à API do backend que vai consultar o CEP na API ViaCEP
    fetch(`/consulta/${cep}`)
        .then(response => response.json())  // Converte a resposta para JSON
        .then(data => {
            // Se a resposta da API contiver um erro, exibe a mensagem de "CEP não encontrado"
            if (data.error) {
                resultadoDiv.innerHTML = "CEP não encontrado.";
            } else {
                // Caso o CEP seja encontrado, mostra os dados do endereço na tela
                resultadoDiv.innerHTML = `
                    <p><strong>Endereço:</strong> ${data.logradouro}</p>
                    <p><strong>Bairro:</strong> ${data.bairro}</p>
                    <p><strong>Cidade:</strong> ${data.localidade}</p>
                    <p><strong>Estado:</strong> ${data.uf}</p>
                `;
                // Adiciona os dados do endereço à lista de endereços
                listaEnderecos.push(data);
                // Atualiza a tabela para mostrar os novos endereços armazenados
                atualizarTabela();
            }
        })
        .catch(error => {
            // Se ocorrer um erro durante a requisição, exibe uma mensagem de erro
            resultadoDiv.innerHTML = "Erro ao consultar o CEP.";
            console.error(error); // Exibe o erro no console para facilitar o debug
        });
}

// Função para atualizar a tabela exibindo os endereços armazenados
function atualizarTabela() {
    // Pega a referência da tabela onde os endereços serão listados
    const tabela = document.getElementById('lista-enderecos');
    // Limpa o conteúdo da tabela antes de adicionar os novos dados
    tabela.innerHTML = '';

    // Itera sobre cada endereço armazenado na lista
    listaEnderecos.forEach(endereco => {
        // Cria uma nova linha (tr) para cada endereço
        const tr = document.createElement('tr');
        // Adiciona as células (td) na linha com os dados do endereço
        tr.innerHTML = `
            <td>${endereco.logradouro}</td> <!-- Endereço -->
            <td>${endereco.bairro}</td>     <!-- Bairro -->
            <td>${endereco.localidade}</td>  <!-- Cidade -->
            <td>${endereco.uf}</td>         <!-- Estado -->
        `;
        // Adiciona a linha criada à tabela
        tabela.appendChild(tr);
    });
}

// Função para ordenar a tabela por um campo específico (cidade, bairro ou estado)
function ordenarTabela(campo) {
    const ordemSelecionada = document.getElementById('ordem').value; // Obtém o valor da ordem (asc ou desc)

    listaEnderecos.sort((a, b) => {
        let valorA = a[campo].toLowerCase();  // Obtém o valor do campo A
        let valorB = b[campo].toLowerCase();  // Obtém o valor do campo B

        // Ordenação crescente ou decrescente com base na escolha do usuário
        if (valorA < valorB) return ordemSelecionada === 'asc' ? -1 : 1;
        if (valorA > valorB) return ordemSelecionada === 'asc' ? 1 : -1;
        return 0;
    });

    atualizarTabela();  // Atualiza a tabela após a ordenação
}

