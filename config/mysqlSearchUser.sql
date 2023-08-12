--Guia de comandos: https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql

-- Busca pelos usuários do sistema;
--select * from mysql.user;

--GRANT SELECT ON *.* TO 'mysql'@'localhost';

-- Altera o tipe de senha do usuário
--ALTER USER 'mysql'@'localhost' IDENTIFIED WITH mysql_native_password BY '123';

--FLUSH PRIVILEGES;

--ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123';

--flush privileges;