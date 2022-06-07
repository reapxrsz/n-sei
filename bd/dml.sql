USE animessDB;

-- adicionar anime
INSERT INTO tb_animess (id_anime, nm_anime)
		VALUES (1, 'Berserk');
        
 -- consultar todos animes
SELECT id_anime 		id,
       nm_anime			nome
 FROM  tb_animess;