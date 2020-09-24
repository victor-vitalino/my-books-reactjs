# My favorite books
> Projeto em ReactJs para busca de títulos (livros) para criação de uma lista com seus livros favoritos

# Descrição
Projeto pessoal feito como proposta para teste Desenvolvedor FrontEnd ReactJs. <br>

Este projeto conta com a utilização da API aberta do Google Books, para busca de títulos e dados dos livros, 
embora seja possivel obter várias informaçoes através desta api, foi utilizada apenas as rotas abertas da mesma. <br>
O projeto é um SPA com as informações sendo salvas no Local Storage do navegador.

# Tecnologias Utilizadas
- ReactJs 
- React Hooks: o projeto foi feito seguindo o padrão funcional (sem classes), os hooks foram usados para controle de estado dos componentes
- React Router Dom: para as rotas e navegação
- Local Storage: utilizado para salvar os dados dos livros salvos, separando por usuários
- Styled Components: para estilização do projeto
- Polished: utilizado para dar variação as cores utilizadas
- React Icons: utilizado para adição de icones na aplicação
- Axios: para acesso a api rest
- Redux: para o controle de estado da aplicação
- Redux Saga: para os middlewares de controle de estado e interceptação de actions
- Immer: bilbioteca utilizada para processamento de estado, para manter o padrão de imutabilidade da store no redux
- Reactotron/Reactotron-Redux: utilizado em desenvolvimento para controle dos estados, actions e debug

# Comandos

- Yarn start: inicia a aplicação na porta 3000
