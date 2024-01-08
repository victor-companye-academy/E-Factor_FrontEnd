# Efactor FrontEnd

Repositório da equipe do FrontEnd do projeto da plataforma EFactor.

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 16.2.3.

## Pré-requisitos

Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em sua máquina. Você pode baixá-los em [nodejs.org](https://nodejs.org/), a versão utilizada foi a 20.10.0. Além disso, você também precisará do Angular CLI instalado. Caso ainda não possua, basta executar o seguinte comando no terminal: `npm install -g @angular/cli`.

## Configuração do Projeto

1. Clone o repositório para a sua máquina. Rode o seguinte comando no terminal de onde ficará o projeto:
`git clone https://github.com/victor-companye-academy/E-Factor_FrontEnd.git`

2. Instale as dependências do projeto:
`npm install`

3. Instalação do bootstrap:
É importante que você instale algumas dependências necessárias para a instalação do Bootstrap. 
Para isto, basta rodar `npm install bootstrap jquery@3.3.1 popper.js@1.14.3 --save`. Depois, execute `npm install ng-bootstrap`. A versão do bootstrap utilizada foi a 5.3.2, saiba mais acessando [Bootstrap](https://getbootstrap.com/).

## Rodando o Projeto Localmente

Para iniciar o servidor de desenvolvimento e visualizar o projeto localmente, utilize o comando: `ng serve`. Finalizado o deploy navegue para: `http://localhost:4200/`.

## "Buildar" projeto

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

1. Exemplo de uso de ng build para gerar versão de produção:
`ng build --target=production`

O valor padrão é `development`, sendo assim, para fazer testes não é necessário especificar.

## Mais ajuda

Para conseguir mais informações sobre comandos que podem ser úteis você pode utilizar `ng help` ou visitar a página [Angular CLI Overview and Command Reference](https://angular.io/cli).
