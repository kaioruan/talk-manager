# Boas vindas ao repositório do Talker Manager!

Esse projeto foi desenvolvido durante o módulo de BackEnd na Trybe! #vqv 🚀

Aqui você vai encontrar os detalhes de como foi o desenvolvimento do projeto e quais foram os requisitos obrigatórios para o desenvolvimento.

---

# Habilidades desenvolvidas

Neste projeto, fui capaz de:

- Ler e escrever arquivos localmente com NodeJS;
- Escrever seus próprios scripts que criam e consomem Promises;
- Reescrever código que usa callbacks para que use Promises;
- Detectar e solucionar problemas no código de forma mais objetiva;
- Entender o que é o HTTP, o que é uma API e o que os dois têm a ver com o Express;
- Escrever APIs utilizando Node e Express;
- Entender a estrutura de uma aplicação Express e como organizar seu código;
- Criar rotas e aplicar middlewares.
---

# Funcionamento da aplicação

⚠ **Atenção:** ⚠

Para rodar a aplicação é necessário executar um dos comandos abaixo.

Modo de produção:
```sh
npm start
```
Modo de desenvolvimento:
```sh
npm run dev
```
---
# Requisitos desenvolvidos no projeto:
### Requisitos Obrigatórios:

- ✅ 1. Crie o endpoint GET `/talker`: O endpoint deve retornar um array com todas as pessoas palestrantes cadastradas.
- ✅ 2. Crie o endpoint GET `/talker/:id`: O endpoint deve retornar uma pessoa palestrante com base no id da rota.

- ✅ 3. Crie o endpoint POST `/login`: O endpoint deve ser capaz de retornar um token aleatório de 16 caracteres que deverá ser utilizado nas demais requisições.

- ✅ 4. Crie o endpoint POST `/talker`: O endpoint deve ser capaz de adicionar uma nova pessoa palestrante ao seu arquivo.

- ✅ 5. Crie o endpoint PUT `/talker/:id`: O endpoint deve ser capaz de editar uma pessoa palestrante com base no id da rota, sem alterar o id registrado.
- ✅ 6. Crie o endpoint DELETE `/talker/:id`: O endpoint deve deletar uma pessoa palestrante com base no id da rota.
- ✅ 7. Crie o endpoint GET `/talker/search?q=searchTerm`: O endpoint deve retornar um array de palestrantes que contenham em seu nome o termo pesquisado no queryParam da URL.
