# BookShare API

API para empréstimo e devolução de livros entre alunos.

# 1. Clone o Repositório

git clone https://github.com/seuusuario/bookshare-api.git
cd bookshare-api

# 2. Instale as Dependências

npm install

# 3 Crie um arquivo .env com:

PORT=3000
MONGO_URI=mongodb+srv://<usuário>:<senha>@<cluster>.mongodb.net/bookshare?retryWrites=true&w=majority

# 4 Executando

node app.js

# 5 Endpoints

GET | /api/books | Lista todos os livros

GET | /api/books/:id | Busca livro por ID

POST | /api/books | Adiciona novo livro

PUT | /api/books/:id | Atualiza livro existente

DELETE | /api/books/:id | Remove livro por ID