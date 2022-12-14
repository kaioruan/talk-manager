# Boas vindas ao reposit贸rio do Talker Manager!

Esse projeto foi desenvolvido durante o m贸dulo de BackEnd na Trybe! #vqv 馃殌

Aqui voc锚 vai encontrar os detalhes de como foi o desenvolvimento do projeto e quais foram os requisitos obrigat贸rios para o desenvolvimento.

---

# Habilidades desenvolvidas

Neste projeto, fui capaz de:

- Ler e escrever arquivos localmente com NodeJS;
- Escrever seus pr贸prios scripts que criam e consomem Promises;
- Reescrever c贸digo que usa callbacks para que use Promises;
- Detectar e solucionar problemas no c贸digo de forma mais objetiva;
- Entender o que 茅 o HTTP, o que 茅 uma API e o que os dois t锚m a ver com o Express;
- Escrever APIs utilizando Node e Express;
- Entender a estrutura de uma aplica莽茫o Express e como organizar seu c贸digo;
- Criar rotas e aplicar middlewares.
---

# Funcionamento da aplica莽茫o

鈿? **Aten莽茫o:** 鈿?

Para rodar a aplica莽茫o 茅 necess谩rio executar um dos comandos abaixo.

Modo de produ莽茫o:
```sh
npm start
```
Modo de desenvolvimento:
```sh
npm run dev
```
---
# Requisitos desenvolvidos no projeto:
### Requisitos Obrigat贸rios:

- 鉁? 1. Crie o endpoint GET `/talker`: O endpoint deve retornar um array com todas as pessoas palestrantes cadastradas.
- 鉁? 2. Crie o endpoint GET `/talker/:id`: O endpoint deve retornar uma pessoa palestrante com base no id da rota.

- 鉁? 3. Crie o endpoint POST `/login`: O endpoint deve ser capaz de retornar um token aleat贸rio de 16 caracteres que dever谩 ser utilizado nas demais requisi莽玫es.

- 鉁? 4. Crie o endpoint POST `/talker`: O endpoint deve ser capaz de adicionar uma nova pessoa palestrante ao seu arquivo.

- 鉁? 5. Crie o endpoint PUT `/talker/:id`: O endpoint deve ser capaz de editar uma pessoa palestrante com base no id da rota, sem alterar o id registrado.
- 鉁? 6. Crie o endpoint DELETE `/talker/:id`: O endpoint deve deletar uma pessoa palestrante com base no id da rota.
- 鉁? 7. Crie o endpoint GET `/talker/search?q=searchTerm`: O endpoint deve retornar um array de palestrantes que contenham em seu nome o termo pesquisado no queryParam da URL.
