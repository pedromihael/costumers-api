# Costumers API π½

API desenvolvida para o teste de desenvolvedor da Pagaleve.

A partir dessa API, vocΓͺ pode:

- [x] Listar todos os costumers.
- [x] Recuperar um costumer por vez.
- [x] Editar informaΓ§Γ΅es de um costumer.
- [x] Criar um costumer.
- [x] Deletar um costumer.

## Stack

- [x] Node.JS
- [x] Typescript
- [x] MongoDB
- [x] Jest

## OrganizaΓ§Γ£o

```
.
βββ root/
    βββ log/
    βββ src/
        βββ controllers/
        β   βββ DELETE/
        β   β   βββ //controllers com este metodo
        β   βββ GET/
        β   β   βββ //controllers com este metodo
        β   βββ PATCH/
        β   β   βββ //controllers com este metodo
        β   βββ POST/
        β   β   βββ //controllers com este metodo
        β   βββ repositories/
        β   β   βββ //repositorios para MongoDB (prod) e Fake (testes)
        β   βββ routes/
        β       βββ DELETE/
        β       β   βββ //rotas com este metodo
        β       βββ GET/
        β       β   βββ //rotas com este metodo
        β       βββ PATCH/
        β       β   βββ //rotas com este metodo
        β       βββ POST/
        β           βββ //rotas com este metodo
        βββ entities/
        β   βββ builders/
        β   β   βββ //padrΓ£o de projeto utilizado nos testes
        β   βββ DTOs/
        β   β   βββ //transferΓͺncia de tipos entre camadas
        β   βββ types/
        β   β   βββ //tipos da aplicaΓ§Γ£o
        β   βββ validations/
        β       βββ //funΓ§Γ΅es de validaΓ§Γ£o de dados
        βββ helpers/
        β   βββ populate/
        β       βββ //funΓ§Γ£o de populaΓ§Γ£o do banco
        βββ infra/
        β   βββ containers/
        β   β   βββ //registro de containers com tsyringe
        β   βββ database/
        β   β   βββ //conexΓ£o com Mongo
        β   βββ server.ts
        βββ useCases/
            βββ CreateCostumer/
            β   βββ //useCase
            β   βββ //teste automatizado
            βββ DeleteCostumer/
            β   βββ //useCase
            β   βββ //teste automatizado
            βββ GetCostumerBy/
            β   βββ //useCase
            β   βββ //teste automatizado
            βββ ListCostumers/
            β   βββ //useCase
            β   βββ //teste automatizado
            βββ UpdateCostumer/
                βββ //useCase
                βββ //teste automatizado
```

A organizaΓ§Γ£o segue uma adaptaΓ§Γ£o da arquitetura limpa, onde o coraΓ§Γ£o da aplicaΓ§Γ£o estΓ‘ dentro da camada de infra.

Juntamente a esta camada, existe o diretΓ³rio de containers, onde fica o registro dos containers, um padrΓ£o de projeto utilizado para inversΓ£o e injeΓ§Γ£o de dependΓͺncias quando se trata de banco de dados. A partir deles, Γ© possΓ­vel selecionar qual instΓ’ncia de banco cada use case vai utilizar, facilitando a utilizaΓ§Γ£o de mΓΊltiplas bases numa sΓ³ aplicaΓ§Γ£o. AlΓ©m deste, existe o diretΓ³rio database, que contΓ©m a conexΓ£o com o banco de produΓ§Γ£o utilizado.

Na camada de controllers, estΓ£o presentes os gateways pelos quais as requisiΓ§Γ΅es sΓ£o feitas, e as rotas pelos quais os mesmos respondem. AlΓ©m destes, os repositΓ³rios utilizados para inverter a dependΓͺncia com ORMs. A partir de uma interface ΓΊnica, todo repositΓ³rio deve implementar seus mΓ©todos seguindo os mΓ©todos do ORM utilizado. Dessa forma, todo use case implementarΓ‘ a chamada de um ΓΊnico mΓ©todo para uma ΓΊnica aΓ§Γ£o, sem necessidade de adaptaΓ§Γ΅es para ORMs especΓ­ficos.

Para os use cases, cada um possui seu diretΓ³rio especΓ­fico, sendo eles:

- CreateCostumer: cria um costumer correspondente a entidade Costumer.
- DeleteCostumer: remove um costumer da base dado seu _id.
- GetCostumerBy: retorna um costumer a partir de um de seus atributos, especificado nos parametros da chamada.
- ListCostumers: lista todos os costumers da base.
- UpdateCostumer: atualiza dados de um determinado costumer.

Cada um dos use cases possui junto a ele um teste unitΓ‘rio automatizado com Jest. Abaixo, o resultado do comando ```yarn test --verbose```:

![test coverage](./assets/tests.png)

Na camada de entidades, estΓ£o os artefatos relacionados as entidades da aplicaΓ§Γ£o, sendo eles:

- builders: construtores de objetos de uma entidade especΓ­fica. PadrΓ£o de projeto utilizado para otimizar a implementaΓ§Γ£o de testes.

- DTOs: objeto que simula campos de uma entidade, utilizada para transportar a descriΓ§Γ£o dos campos dessa entidade para outras camadas.

- types: tipos implementados para padronizar dados de uma entidade.

- validations: funΓ§Γ΅es que validam dados de uma entidade em casos especificos.

AlΓ©m destas, uma camada extra chamada helpers, que possui scripts que podem ser utilizados por todas as outras camadas, sendo estes ΓΊteis a essas.

## ExecuΓ§Γ£o

VocΓͺ deve ter [Docker](https://www.docker.com/) ou [Node.JS](https://nodejs.org/en/) instalados.

Para execuΓ§Γ΅es com Docker, na raiz do projeto:

```
$ docker build -t costumers-api .
$ docker run -it -p 8888:8888 -e PORT=8888 -e DB_CONN_STRING="mongodb+srv://pagaleve_teste:<pass>@cluster0.lumgc.mongodb.net/?retryWrites=true&w=majority&ssl=true" -e DB_NAME="pagaleve_teste" -e COLLECTION_NAME="costumers" test-costumers-api
```

Para execuΓ§Γ΅es com Node:

```
$ yarn dev
```

## Demo

A API estΓ‘ implantada [aqui](https://costumers-api.herokuapp.com/health-check)

## Postman dump

No diretΓ³rio postman existe um dump que pode ser utilizado para testar a API e assim entende-la melhor.

## DΓΊvidas

Caso existam dΓΊvidas, pode falar comigo pelo [Linkedin](https://linkedin.com/in/pedromihael).

Cuide-se! π€π½