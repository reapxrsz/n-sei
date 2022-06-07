import { Router } from 'express'
import { adicionarAnime, listarAnimes } from '../repository/animeRepository.js';

const server = Router();

server.post('/anime', async (req, resp) => {
    try{
        const novo = req.body;
        const anime = await adicionarAnime(novo);
        resp.send(anime)
    } catch(err) {
        resp.send({
            erro:err.message
        }) 
    }
})

server.get('/anime' , async (req, resp) => {
    try{
        const resposta = await listarAnimes();
        resp.send(resposta)
    }
    catch(err){
        resp.send({
            erro:err.message
        })  
    }
})


export default server;