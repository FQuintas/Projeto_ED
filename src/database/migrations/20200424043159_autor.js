
exports.up = function(knex) {
  return knex.schema.createTable('autor', function(table){
      table.string('idAutor').primary();
      table.string('nomeAutor').notNullable();
      table.string('dtNascAutor').notNullable();
      table.string('biografiaAutor').notNullable();
  });
};

exports.down = function(knex) {
   return knex.schema.dropTable('autor');
};
