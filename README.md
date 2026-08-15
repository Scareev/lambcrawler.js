# ⛏️ Lambcrawler

Um jogo de terminal (console) escrito em **JavaScript puro (Node.js)**, onde o jogador explora, minera e gerencia recursos através de comandos digitados diretamente no prompt.

## 📖 Sobre o projeto

Lambcrawler é um RPG minimalista rodando 100% no terminal. Sem interface gráfica, sem frameworks — só lógica de jogo, classes bem definidas e um loop de comandos simples.

O jogador controla um personagem que pode minerar recursos, gerenciar um inventário e equipar ferramentas que se desgastam com o uso.

## ✨ Funcionalidades atuais

- **Sistema de mineração** — minere aleatoriamente entre diferentes minérios (ferro, ouro, cobalto), cada um com seu próprio valor e raridade.
- **Picaretas com durabilidade** — cada picareta equipada perde durabilidade a cada mineração e quebra quando chega a zero, exigindo que o jogador troque de ferramenta.
- **Inventário dinâmico** — itens coletados são armazenados e exibidos com suas respectivas quantidades.
- **Player com atributos** — vida, mana, dinheiro e item equipado, tudo exibido em um painel de status a cada turno.
- **Menu interativo via terminal** — comandos simples de uma letra (`m` minerar, `i` inventário, `s` sair).

## 🛠️ Tecnologias

- **Node.js** com módulos ES (`import`/`export`)
- **[prompt-sync](https://www.npmjs.com/package/prompt-sync)** para captura de input síncrono no terminal

## ▶️ Como rodar

```bash
git clone https://github.com/Scareev/lambcrawler.js.git
cd lambcrawler.js
npm install
node main.js
```
