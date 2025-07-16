const servicePessoa = require ('../services/pessoa'); //importação da classe ServicePessoa
const service = new servicePessoa(); //instância da classe ServicePessoa

class ControllerPessoa {
    PegarTodos(req , res){ //responsável por fazer a classe PegarTodos funcionar dentro da classe
        try{ //tenta achar um error
        const nomes = service.PegarTodos(); //const nome recebe método pegarTodos do objeto service
        res.status(200).json({ nomes }) //const nome
        }catch(e) {res.status(500).json({ //se error/ status 500
            e
            })
        }
    }

     PegarUm(req , res){ 
        try{ //tenta achar um error
        const id = req.params.id;
        const nome = service.PegarUm(id); //const nome recebe método pegarUm do objeto service
        res.status(200).json({ nome }) //const nome que recebeu id como parametro
        }catch(e) {res.status(500).json({ //se error/ status 500
            e
            })
        }
    }

     Adicionar(req , res){ 
        try{ //tenta achar um error
        const nome = req.body.nome;
        const nomes = service.Adicionar(nome); //const nome recebe parametro 
        res.status(201).json({ nomes }) //const nome que recebe param nome (201: criado)
        }catch(e) {res.status(500).json({ //se error/ status 500
            e
            })
        }
    }

     Alterar(req , res){ 
        try{ //tenta achar um error
        const id = req.params.id;
        const nome = req.body.nome;
        const nomes = service.Alterar(id, nome); //const nome recebe param e body id,nome
        res.status(200).json({ mensagem: 'Alterado com sucesso' }) //mensagem para definir sucesso 
        }catch(e) {res.status(500).json({ //se error/ status 500
            e
            })
        }
    }

     Deletar(req , res){ 
        try{ //tenta achar um error
        const id = req.params.id;
        service.Deletar(id); //const nome recebe método do objeto service
        res.status(204).json() //status de deletado
        }catch(e) {res.status(500).json({ //se error/ status 500
            e
            })
        }
    }
}

module.exports = ControllerPessoa;
