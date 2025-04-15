# Desafio Front-End Júnior

## Objetivo

Criar uma pequena aplicação com duas telas (login e painel principal) utilizando
React ou Next.js. O foco principal deve ser em uma boa experiência do usuário (UX),
com interface visual agradável, responsiva e funcional.

## Tecnologias e Bibliotecas

O projeto utiliza as seguintes tecnologias e bibliotecas:

- **Framework:** 
  - **Next.js**
- **Bibliotecas:** 
  - **TailwindCSS**
  - **Radix UI** 
- **Gerenciamento de estado:** 
  - **Context API** do React.

## Design e Usabilidade

A aplicação foi projetada com foco em uma boa experiência do usuário (UX), com as seguintes definições:

- **Layout:**
  - **Tela de login:** Uma tela simples com credenciais fixas para simulação (usuário: `spotmkt`, senha: `123`), mockadas em JSON.
  - **Dashboard:** Exibe informações fictícias sobre métricas, insights e interações. Não há funcionalidades reais, mas a interface é intuitiva e bem estruturada.
  - **Simulação de IA:** No dashboard, foi incluída uma simulação de IA para gerar insights de maneira criativa e destacada.
- **Responsividade:**
  - A interface é adaptável para dispositivos móveis, tablets, notebooks e telas ultra-wide.
  - O header com o logo e a saudação "Olá, {usuário}" no topo
- **Ações de Login/Logout:** 
  - Foi implementado um botão de logout, com comportamento dinâmico conforme o estado de autenticação do usuário.

## Autenticação e Fluxo

Embora a autenticação real não seja necessária, foi implementado um middleware simples para simular a autenticação. O processo de autenticação utiliza as credenciais fixas (`usuário: spotmkt`, `senha: 123`).

## Manejo de Dados Fictícios

Como os dados são fictícios, eles são estruturados em um objeto JSON, simulando a resposta de uma API real.

## Métricas e Dados

Apesar de não existirem métricas reais, o dashboard exibe métricas e dados fictícios de maneira criativa e impactante, com a proposta de "Resumo de métricas de campanhas", "Calendário de ações", etc.

## Notificações e Histórico de Dados

- **Notificações:** Foram simuladas notificações que alertam o usuário sobre novas atualizações ou ações importantes.
- **Histórico de Dados:** Foi exibido um histórico simulado de interações anteriores, permitindo ao usuário acompanhar o que aconteceu anteriormente e qual o status atual.

## Estrutura do Código e Organização

O código foi estruturado para ser limpo, bem organizado e fácil de entender. As boas práticas de desenvolvimento foram seguidas, com a seguinte organização:

## Desempenho e Interatividade

A aplicação foi otimizada para ser rápida e leve, aproveitando ao máximo a renderização eficiente do Next.js. A interface é interativa, visualmente atrativa e focada na usabilidade, mesmo sem funcionalidades reais.

## Como Rodar a Aplicação

Siga os passos abaixo para clonar e rodar a aplicação localmente:

1. **Clone o Repositório**  
  Abra o terminal e execute o comando:
  ```bash
  git clone https://github.com/PedroSilvaGontijo/desafio-spotmkt.git
  ```

2. **Acesse o Diretório do Projeto**  
  Navegue até o diretório clonado:
  ```bash
  cd desafio-spot-mkt
  ```

3. **Instale as Dependências**  
  Certifique-se de que você tem o Node.js e o npm instalados. Em seguida, instale as dependências do projeto:
  ```bash
  npm install
  ```

4. **Inicie o Servidor de Desenvolvimento**  
  Após a instalação das dependências, inicie o servidor:
  ```bash
  npm run dev
  ```

5. **Acesse a Aplicação**  
  Abra o navegador e acesse:
  ```
  http://localhost:3000
  ```

6. **Credenciais de Login**  
  Use as credenciais fixas para acessar a aplicação:
  - Usuário: `spotmkt`
  - Senha: `123`

Pronto! Agora você pode explorar a aplicação localmente.