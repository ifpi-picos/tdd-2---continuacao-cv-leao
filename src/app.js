const express = require('express');
const app = express();
app.use(express.json());

const Tarefas = require('./tarefas');
const tarefas = new Tarefas();

app.post('/tarefas', (req, res) => {
    const { descricao } = req.body;

    tarefas.adicionar(descricao);

    res.status(201).send("Tarefa adicionada com sucesso!");
});

app.delete('/tarefas/:indice', (req, res) => {
    const { indice } = req.params;

    tarefas.remover(indice);

    res.status(200).send("Tarefa removida com sucesso!");
});

app.get('/tarefas', (req, res) => {

});

app.patch('/tarefas/:indice', (req, res) => {

});

module.exports = app;
