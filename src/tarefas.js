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
    this.lista.splice(indice);
  }

  todas() {
    return this.lista;
  }

  marcarConcluida(indice) {
    this.lista[indice].concluida = true;
  }
}

module.exports = Tarefas;
