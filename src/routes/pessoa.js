const express = require ('express'); //importação do framework express
const ControllerPessoa = require ("../controllers/pessoa"); //importação da classe ControllerPessoa

const controller = new ControllerPessoa(); //Instância de objeto da classe ControllerPessoa
const router = express.Router() //define o uso de Router que é padrão do express

router.get('/api/v1/nomes', controller.PegarTodos) //adicionada ao endpoint o PegarTodos do objeto controller
router.get('/api/v1/nome/:id', controller.PegarUm) //adicionada ao endpoint o PegarUm do objeto controller
router.post('/api/v1/nome', controller.Adicionar) //adicionada ao endpoint o Adicionar do objeto controller
router.put('/api/v1/nome/:id', controller.Alterar) //adicionada ao endpoint o Alterar do objeto controller
router.delete('/api/v1/nome/:id', controller.Deletar) //adicionada ao endpoint o Deletar do objeto controller

module.exports = router; //exportação da rota