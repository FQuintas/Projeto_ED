const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { tituloLivro, anoLivro, paginasLivro, resumoLivro, capaLivro, notaLivro} = request.body;
        const autor_id = request.headers.authorization;

        const[id] = await connection('livro').insert({
            tituloLivro, 
            anoLivro, 
            paginasLivro, 
            resumoLivro, 
            capaLivro, 
            notaLivro,
            autor_id,
        });
        return response.json({ id });
    },

    async index(request, response){
        const livro = await connection('livro').select('*');

        return response.json(livro);
    },

    async delete(request, response){
        const { id } = request.params;
    
         await connection('livro').where('id', id).delete();
         return response.json({ Sucesso: 'Deletado com Sucesso'});
    }
};