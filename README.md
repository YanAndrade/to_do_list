# to_do_list

**Passos Gerais:**
1. Configure um projeto Node.js com um servidor web (por exemplo, Express.js).
2. Configure um banco de dados (por exemplo, SQLite, MongoDB) para armazenar as tarefas.
3. Crie rotas para manipular operações CRUD (Criar, Ler, Atualizar e Deletar) de tarefas.
4. Crie páginas HTML ou endpoints para exibir e interagir com a lista de tarefas.

**Exemplos de Rotas:**

1. **Página Inicial:**
   - Rota: GET '/'
   - Descrição: Página inicial que exibe a lista de tarefas.

2. **Adicionar Tarefa:**
   - Rota: POST '/tasks'
   - Descrição: Adiciona uma nova tarefa à lista.
   - Exemplo de corpo da solicitação JSON:
     ```json
     {
       "title": "Comprar mantimentos",
       "completed": false
     }
     ```

3. **Editar Tarefa:**
   - Rota: PUT '/tasks/:id'
   - Descrição: Atualiza os detalhes de uma tarefa existente.
   - Exemplo de corpo da solicitação JSON:
     ```json'
     {  
       "title": "Comprar mantimentos para o jantar",
       "completed": true
     }
     ```

4. **Excluir Tarefa:**
   - Rota: DELETE '/tasks/:id'
   - Descrição: Remove uma tarefa da lista.
   
5. **Marcar Tarefa como Concluída/Não Concluída:**
   - Rota: PATCH '/tasks/:id'
   - Descrição: Atualiza o status de conclusão de uma tarefa.
   - Exemplo de corpo da solicitação JSON:
     ```json
     {
       "completed": true
     }
     ```

6. **Detalhes da Tarefa:**
   - Rota: GET '/tasks/:id'
   - Descrição: Exibe os detalhes de uma tarefa específica.