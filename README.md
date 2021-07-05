# Gamegree 

Aplicação desenvolvida para a disciplina Tópicos Especiais em Desenvolvimento Web da Pós-Graduação em desenvolvimento Web e Mobile do IFPR.

## Sobre

Gamegree é uma plataforma de quiz sobre games desenvolvida com React no frontend e Nodejs no backend.

- Usuários comuns tem acesso ao jogo e ao ranking de melhores jogadores.
- Usuário administrador pode cadastrar novas perguntas e encontrar usuários específicos.

## Instruções

É necessário ter o MySQL instalado para rodar a aplicação. Os dados iniciais estão no arquivo backend/src/db/create-user-db.sql e podem ser inseridos via workbench.

O arquivo .env no diretório backend deve conter as credenciais de acesso ao banco.

Após configuração do banco de dados, no diretório do projeto execute:

### `cd backend`

### `npm run dev`

Em outro terminal, no diretório do projeto execute:

### `cd frontend`

### `npm run start`

A senha padrão para os usuários criados é '123456'.

## Próximas etapas

- Adaptar a UI da aplicação tomando como base um design predefinido. 
- Correção de bugs e melhorias de performance.
- Usuário administrador poderá excluir ou bloquear um usuário específico.
- Implementar a requisição das questões para o jogador baseadas no seu nível atual.


