const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { nomeAutor, dtNascAutor, biografiaAutor} = request.body;

    const idAutor = crypto.randomBytes(4).toString('HEX');

    await connection('autor').insert({
        idAutor, nomeAutor, dtNascAutor, biografiaAutor,
    });

    return response.json({ idAutor});
    },

    async index(request, response){
        const autor = await connection('autor').select('*');
    
        return response.json(autor);
    },

    async delete(request,response){
        const { id } = request.params;

        await connection('autor').where('idAutor', id).delete();
        return response.json({ Sucesso: 'Deletado com Sucesso'});
    }
}