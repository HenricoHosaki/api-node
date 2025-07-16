const express = require ('express'); //importação método framework
const router = require ('./src/routes/pessoa'); //router recebe o express.Router
const porta = 8081; //definição de porta para o express ouvir
const app = express(); //app se torna o nosso caminho para utilizar o express

app.use(express.json()); //define o uso de JSON no express

app.use(router); //define o uso do método express.Router no express

app.listen (porta, ()=>{ //porta que irá utilizar
    console.log("Serviço rodando na porta: " + porta)
});