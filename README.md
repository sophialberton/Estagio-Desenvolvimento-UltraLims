# Desafio-2 - Sistema Web para Consulta e Armazenamento de Endereços

## Sistema de Consulta de Endereço pelo CEP

Este sistema permite consultar um endereço a partir de um CEP e armazenar esses endereços em uma lista. O usuário pode ordenar os endereços por cidade, bairro ou estado, de forma crescente ou decrescente. Além disso, o sistema permite a exclusão de endereços individuais da lista por meio de um ícone discreto de lixeira.

---

## Tecnologias Utilizadas

### **Frontend**
- **HTML**: Estrutura da página web, com campos de input, botões e tabela para exibição dos endereços.
- **CSS**: Estilização da página, proporcionando uma interface agradável e responsiva.
- **JavaScript**: Responsável pela interação no frontend, manipulação da DOM, consumo da API e atualização dinâmica da tabela de endereços.
- **Fetch API**: Utilizada para realizar requisições assíncronas ao backend.

### **Backend**
- **Node.js**: Plataforma utilizada para executar o servidor backend.
- **Express.js**: Framework para gerenciar as requisições HTTP de forma eficiente.
- **Axios**: Biblioteca para consumir a API ViaCEP.
- **API ViaCEP**: API utilizada para obter os endereços a partir do CEP informado.

---

## Funcionamento do Sistema

### **Frontend**
1. O usuário insere um **CEP** no campo de input e clica no botão **Consultar**.
2. O sistema faz uma requisição à API ViaCEP para obter as informações do endereço.
3. O endereço retornado é exibido na tela e armazenado em uma lista interna.
4. A lista de endereços é exibida em uma tabela, permitindo ordenar por **Cidade**, **Bairro** ou **Estado**.
5. O usuário pode excluir um endereço individualmente clicando no ícone de lixeira ao lado da sigla do **Estado**.

### **Backend**
1. O servidor é executado utilizando **Node.js** e **Express.js**.
2. Quando o usuário consulta um CEP, o backend faz uma requisição à API **ViaCEP**.
3. Os dados retornados pela API são enviados ao frontend em formato JSON.

---

## Como Clonar e Rodar o Sistema

Como o **Desafio 2** está incluído como um **submódulo**, é necessário clonar corretamente o repositório e inicializar os submódulos.

### **Passos para Clonar e Inicializar o Submódulo**

1. **Clone este repositório para o seu ambiente local, incluindo os submódulos:**
   ```bash
   git clone --recurse-submodules https://github.com/sophialberton/Estagio-Desenvolvimento-UltraLims.git
   ```

   Se já tiver clonado o repositório sem os submódulos, use:
   ```bash
   git submodule update --init --recursive
   ```

2. **Entre no diretório do backend:**
   ```bash
   cd Estagio-Desenvolvimento-UltraLims/Desafio2/backend
   ```

3. **Instale as dependências do backend:**
   ```bash
   npm install
   ```

4. **Inicie o servidor backend:**
   ```bash
   npm start
   ```

5. **Acesse o frontend abrindo o arquivo `index.html` no navegador.**

---

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).

