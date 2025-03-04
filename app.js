const listaEnderecos = [];

function consultarCEP() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    const resultadoDiv = document.getElementById('resultado');

    if (cep.length !== 8) {
        alert("CEP inválido!");
        return;
    }

    // Requisição à API do ViaCEP
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                resultadoDiv.innerHTML = "CEP não encontrado.";
            } else {
                resultadoDiv.innerHTML = `
                    <p><strong>Endereço:</strong> ${data.logradouro}</p>
                    <p><strong>Bairro:</strong> ${data.bairro}</p>
                    <p><strong>Cidade:</strong> ${data.localidade}</p>
                    <p><strong>Estado:</strong> ${data.uf}</p>
                `;

                // Armazenar o endereço
                listaEnderecos.push(data);
                atualizarListaEnderecos();
            }
        })
        .catch(error => {
            resultadoDiv.innerHTML = "Erro ao consultar o CEP.";
            console.error(error);
        });
}

function atualizarListaEnderecos() {
    const lista = document.getElementById('lista-enderecos');
    lista.innerHTML = '';

    listaEnderecos.forEach(endereco => {
        const li = document.createElement('li');
        li.textContent = `${endereco.logradouro}, ${endereco.bairro}, ${endereco.localidade} - ${endereco.uf}`;
        lista.appendChild(li);
    });
}

function ordenarEnderecos() {
    const criterio = prompt("Escolha o critério de ordenação: (cidade, bairro, estado)").toLowerCase();

    if (['cidade', 'bairro', 'estado'].includes(criterio)) {
        listaEnderecos.sort((a, b) => a[criterio].localeCompare(b[criterio]));
        atualizarListaEnderecos();
    } else {
        alert("Critério inválido.");
    }
}
