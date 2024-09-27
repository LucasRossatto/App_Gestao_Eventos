# API Gestão de Eventos

<p>🚀 API que permite que os usuários criem, leiam, atualizem e excluam eventos e participantes, além de gerenciar as associações entre eles.</p>

## Stack utilizada

**Back-end:** Node, Express, Sequelize, MySQL

### Features

- [x] CRUD de Evento
- [x] CRUD de Participante
- [x] Rota para Listar todos os participantes de um evento específico.
- [x] Rota para Listar todos os participantes de um evento específico usando o eventoId (Chave estrangeira).

## Getting Started

O projeto deve ser construído com npm, então escolha uma das abordagens abaixo caso você não tenha nenhuma instalada no seu sistema.

- O Npm é distribuído com o Node.js, o que significa que quando você baixa o Node.js, você automaticamente obtém o npm instalado no seu computador. Baixar Node.js

## Configurando banco de dados

<p>O projeto Utiliza o Banco de dados MySQL</p>

## Instalação 
- Para baixar o projeto siga as instruções abaixo:

```
1. git clone https://github.com/LucasRossatto/App_Gestao_Eventos.git
2. cd AppGestaoEventos
```

- Instale as dependências e inicie o servidor:

```
3. npm init -y
4. npm i express
3. npm i nodemon
4. npm i sequelize
5. npm install mysql2
```

- Inialize o Data Base no MySQL Workbench

```
1. CREATE DATABASE gestaoeentos
```
