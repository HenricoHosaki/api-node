const servicePessoa = require ('../services/pessoa');
const service = new servicePessoa();

class ControllerPessoa {
    PegarTodos(req , res){
        try{
        const nomes = service.PegarTodos();
        res.status(200).json({ nomes: ['joao', 'ana']})
        }catch(e) {res.status(500).json({
            e
        })}
    }
}

module.exports = ControllerPessoa;
