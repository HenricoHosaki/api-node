const express = require ('express'); //importação do framework express
const ControllerPessoa = require ("../controllers/pessoa"); //importação da classe ControllerPessoa

const controller = new ControllerPessoa(); //Instância de objeto da classe ControllerPessoa
const router = express.Router();

router.get('/api/v1/nomes', controller.PegarTodos) //adicionada ao endpoint o PegarTodos do objeto controller

module.exports = router; //exportação da rota