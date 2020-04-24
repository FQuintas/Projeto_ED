
exports.up = function(knex) {
   return knex.schema.createTable('livro', function(table){
        table.increments();
        table.string('nomeAutor').notNullable();
        table.string('dtNascAutor').notNullable();
        table.string('biografiaAutor').notNullable();


        table.string('autor_id').notNullable();
        table.foreign('autor_id').references('idAutor').inTable('autor');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('livros');
};
