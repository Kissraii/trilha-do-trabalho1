# Trilha do Trabalho no Visual Studio Code

Este projeto é uma aplicação frontend feita com **React, Vite, TypeScript e Tailwind CSS**. Ele pode ser aberto e executado diretamente no Visual Studio Code.

## Requisitos

- Visual Studio Code
- Node.js 18 ou superior
- npm ou pnpm

## Como abrir

1. Descompacte o arquivo do projeto.
2. Abra o Visual Studio Code.
3. Selecione **File > Open Folder**.
4. Escolha a pasta `trilha-do-trabalho`.

## Como instalar as dependências

Abra o terminal integrado do Visual Studio Code em **Terminal > New Terminal** e execute:

```bash
npm install
```

Ou, caso use pnpm:

```bash
pnpm install
```

## Como executar o projeto

Com npm:

```bash
npm run dev
```

Com pnpm:

```bash
pnpm dev
```

Depois, abra no navegador o endereço mostrado no terminal, normalmente:

```text
http://localhost:5173
```

## Como gerar a versão de produção

```bash
npm run build
```

A versão final será gerada na pasta `dist`.

## Estrutura principal

```text
client/
  index.html              página HTML principal
  src/
    App.tsx               componente principal
    pages/Home.tsx        interface completa da trilha
    index.css             estilos visuais

.vscode/
  tasks.json              tarefa para iniciar o servidor
  launch.json             configuração de execução

package.json              dependências e scripts
vite.config.ts            configuração do Vite
server/                   servidor auxiliar do template
```

## Observação sobre o certificado

O certificado é gerado no próprio navegador quando os cinco módulos são concluídos. Nenhum servidor Java é necessário para executar esta versão.

O progresso, as anotações e o nome do participante são salvos no `localStorage` do navegador.

## Sobre Java e Gulp

Esta versão não usa Java Spring Boot nem Gulp. Ela foi preparada como frontend React/Vite para facilitar a execução no Visual Studio Code.
