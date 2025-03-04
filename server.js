const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/consulta/:cep', async (req, res) => {
    const cep = req.params.cep.replace(/\D/g, '');

    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        if (response.data.erro) {
            return res.status(404).json({ error: "CEP não encontrado." });
        }
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Erro ao consultar o CEP." });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
