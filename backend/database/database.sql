create database Games;
use Games;

create table game(
    id int  primary key auto_increment,
    id_user int,
    titulo varchar(255),
    description varchar(255),
    url varchar(150),
    CONSTRAINT fk_game_user FOREIGN KEY (id_user) REFERENCES user(id_user)
)

create table user(
    id_user int  primary key auto_increment,
    nombre varchar(255),
    apellido varchar(255),
    email varchar(255),
    habilitado BOOLEAN default 1
    
)

insert into user (id_user,nombre,apellido,email,habilitado) 
values (null,"stewew :D","picari","picapica@yahoo.es",0);

insert into game(id,id_user,titulo,description,url) values (null,2,"tekken","este es un wen juego","www.mishuevos.com");
