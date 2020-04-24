
exports.up = function(knex) {
   return knex.schema.createTable('livro', function(table){
        table.increments();
        table.string('tituloLivro').notNullable();
        table.string('anoLivro').notNullable();
        table.string('paginasLivro').notNullable();
        table.string('resumoLivro').notNullable();
        table.string('capaLivro').notNullable();
        table.string('notaLivro').notNullable();


        table.string('autor_id').notNullable();
        table.foreign('autor_id').references('idAutor').inTable('autor');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('livros');
};
