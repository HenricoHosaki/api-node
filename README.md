# Como utilizar o código:

## Passo 1: "(caminho da pasta)>" node --watch index.js

## Passo 2: no Postman, deverá criar os endpoints para teste no seguinte formato 

pegarTodos-> localhost:8081/api/v1/nomes/

pegarUm -> localhost:8081/api/v1/nome/:id

AdicionarPessoa -> localhost:8081/api/v1/nome

AlterarPessoa -> localhost:8081/api/v1/nome/:id

DeletarPessoa -> localhost:8081/api/v1/nome/:id

### Para adicionar um novo nome, deverá utilizar o Body do endpoint com o tipo RAW e formato JSON
Exemplo: 

          {
          "nome": "maria"
          }

### !! Após reiniciar a aplicação, a array será resetada, devido à falta de um banco de dados no código !!
