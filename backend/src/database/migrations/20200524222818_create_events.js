exports.up = function(knex) {
    return knex.schema.createTable('EVENTS', function(table){
        table.increments('ID');
        table.string('DESCRIPTION').notNullable();
        table.date('DATE').notNullable(); 
        table.time('HOUR').notNullable(); 
        table.integer('ID_USER').notNullable(); 

        table.foreign('ID_USER').references('ID').inTable('USERS');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('EVENTS');  
};
