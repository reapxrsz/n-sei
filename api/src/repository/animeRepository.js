import { con } from './connection.js'

export async function adicionarAnime (anime){
    const comando = 
    `INSERT INTO tb_animes (id_anime, nm_anime)
	      VALUES (?, ?)`

    const [resposta] = await con.query(comando, [anime.id, anime.nome]);
    anime.id = resposta.insertId;

    return anime;
}

export async function listarAnimes(){
    const comando = 
    `SELECT id_anime 	id,
			nm_anime	nome
	   FROM tb_animes`

    const [linhas] = await con.query(comando);
    return linhas;
}