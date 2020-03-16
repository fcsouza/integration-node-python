<p align="center">
  <a href="" rel="noopener">
 <img width=250px src=".github\logo-node.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Projeto para criar uma API RESTful em Node.Js que consome um serviço em Python</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/languages/count/fcsouza/integration-node-python)]()
[![GitHub Pull Requests](https://img.shields.io/github/last-commit/fcsouza/integration-node-python)]()
[![Made By](https://img.shields.io/badge/Made%20By-Fabricio%20Cavalcante-brightgreen)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

<p align="center">
  Foi Construído uma API RESTful utilizando Express para executar um script desenvolvido em Python direto do Node.js,
  o objetivo era utilizar a capacidade analítica do Python para ficar encarregado dos calculos matemáticos complexos, enquanto utilizamos o
  Node para envio e requisição dos resultados.
</p>

## 📝 Conteúdo
<p align="center">
<a href="#about">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#getting_started">Iniciando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#installing">Instalando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#usage">Uso</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#built_using">Tecnologias Utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#authors">Autor</a>
</p>

## 🧐 Sobre <a name = "about"></a>

Utilizamos o sistema de apostas de [D'Alembert](https://pt.wikipedia.org/wiki/Jean_le_Rond_d%E2%80%99Alembert), um sistema de progressão negativa, que implica
que o aumento de apostas vai se aumentando as perdas. O uso desse sistema promete a redução nos risco de grandes perdas, pelo motivo ser realizado um aumento
pequeno de apostas ao longo do tempo.

Esse princípio, parte do pressuposto que a vitória aumenta as chances de perda na próxima rodada, e inversamente, com uma derrota, suas chances de vitória aumentem.

Essa logica está no [programa](https://github.com/fcsouza/integration-node-python/blob/master/src/python/d_alembert.py) feito em Python.

Dados de Entrada:
```
  query.funds, // Nossos fundos
  query.size, // Tamanho da Aposta
  query.count, // Número de Apostas por Simulação
  query.sims, // Número Por Simulações
```

Dados de Retorno:
```
  total_invested: 1500, //Total do Investimento
  total_return: 2330, //Total de Retorno
  roi": 830, // Retorno Sobre o Investimento
  bust_rate: 73.33, //Melhor Retorno
  profit_rate: 26.67, //Taxa de Lucro
```

## 🏁 Iniciando <a name = "getting_started"></a>

Instruções de como acessar as rotas e instalação.

## 🎈 Uso <a name="usage"></a>

- `POST /dlambert?funds=100&size=10&count=100&sims=15`

### ⚒ Instalando <a name = "installing"></a>

```
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

yarn install || npm install
yarn dev || npm run dev
```

## ⛏️ Tecnologias Utilizadas <a name = "built_using"></a>

- [Express](https://expressjs.com/) - Server Framework
- [Python](https://www.python.org/) - Programming Language
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Sequelize](https://sequelize.org/) - Multi SQL dialect ORM
- [ESLint](https://eslint.org/) -  Tool for identifying and reporting on patterns found in ECMAScript/JavaScript code
- [Nodemon](https://www.npmjs.com/package/nodemon) - Simple monitor script for use during development
- [Prettier](https://prettier.io/) - Opinionated Code Formatter
- [Sucrase](https://www.npmjs.com/package/sucrase) - Sucrase is an alternative to Babel that allows super-fast development builds
- [PostgreSQL](https://www.postgresql.org/) - Open source database(SGBD)

## ✍️ Autor <a name = "authors"></a>

- [@fcsouza](https://github.com/fcsouza)
