
CREATE TABLE tasks(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    title VARCHAR(255) COMMENT 'Nome da tarefa',
    completed BOOLEAN COMMENT 'Status da tarefa'
) COMMENT 'Tabela dos registros das tarefas';