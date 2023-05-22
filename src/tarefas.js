class Tarefas {
  constructor() {
    this.lista = [];
  }

  adicionar(descricao) {
    const newTask = {
      descricao: descricao,
      concluida: false
    };

    this.lista.push(newTask);
  }

  remover(indice) {

  }

  todas() {

  }

  marcarConcluida(indice) {

  }
}

module.exports = Tarefas;
