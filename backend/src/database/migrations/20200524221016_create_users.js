
exports.up = function(knex) {
    return knex.schema.createTable('USERS', function(table){
        table.increments('ID');
        table.string('NAME').notNullable();
        table.string('EMAIL').notNullable(); 
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('USERS');
};
