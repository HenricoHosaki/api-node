const express = require ('express');
const router = require ('./src/routes/pessoa');
const porta = 8081;
const app = express();

app.use(express.json());

app.use(router);

app.listen (porta, ()=>{
    console.log("Serviço rodando na porta: " + porta)
});