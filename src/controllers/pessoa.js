const servicePessoa = require ('../services/pessoa'); //importação da classe ServicePessoa
const service = new servicePessoa(); //instância da classe ServicePessoa

class ControllerPessoa {
    PegarTodos(req , res){ //responsável por fazer a classe PegarTodos funcionar dentro da classe
        try{ //tenta achar um error
        const nomes = service.PegarTodos(); //const nome recebe método do objeto service
        res.status(200).json({ nomes }) //const nome
        }catch(e) {res.status(500).json({ //se error/ status 500
            e
        })}
    }
}

module.exports = ControllerPessoa;
