const RepositoryPessoa = require("../repository/pessoa");

const repo = new RepositoryPessoa();

class ServicePessoa{
    PegarTodos(){ //método pegar todos
        return repo.PegarTodos(); //retorna valores que criei
    }

    PegarUm(id){ //método pegar todos
        return repo.PegarUm(id); //retorna um valor definido pelo id
    }

    Adicionar(nome){ //método pegar todos
        return repo.Adicionar(nome); //adiciona valor por nome
    }

    Alterar(id, nome){ //método pegar todos
        return repo.Alterar(id, nome); //altera valor por nome id
    }

    Deletar(id){ //método pegar todos
        return repo.Deletar(id); //deleta valores por id
    }
}

module.exports = ServicePessoa; //exporta a classe ServicePessoa