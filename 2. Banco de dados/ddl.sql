CREATE DATABASE animessDB;
USE animesDB;

CREATE TABLE tb_animess (
	id_anime 		int primary key auto_increment not null unique,
    nm_anime		varchar(50)
);
