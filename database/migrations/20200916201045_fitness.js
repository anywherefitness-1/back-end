const { table } = require("../config");

exports.up = async function(knex) {

    await knex.schema
            .createTable('Client', tbl =>{
                tbl.increments();
                tbl.text('username').unique().notNullable();
                tbl.text('password').notNullable();
            })

            .createTable('Instructor', tbl =>{
                tbl.increments();
                tbl.text('username').unique().notNullable();
                tbl.text('password').notNullable();
            })
            
            .createTable('Classes', tbl => {
                tbl.increments();
                tbl.text('class_name').notNullable();
                tbl.date('class_date').notNullable();
			    tbl.time('class_time').notNullable();
			    tbl.integer('duration').notNullable();
			    tbl.text('intensity').notNullable();
			    tbl.text('location').notNullable();
			    tbl.integer('number_of_attendees').notNullable();
			    tbl.integer('max_class_size').notNullable();
            })
  
            .createTable('Assigned', tbl =>{
                tbl.integer('class_id')
                        .notNullable()
                        .references('id')
                        .inTable('Classes')
                        .onDelete('CASCADE')
                        .onUpdate('CASCADE');
                tbl.integer('instructor_id')
                        .notNullable()
                        .references('id')
                        .inTable('Instructor')
                        .onDelete('CASCADE')
                        .onUpdate('CASCADE');
            })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("Assigned")
    await knex.schema.dropTableIfExists("Classes")
    await knex.schema.dropTableIfExists("Instructor")
    await knex.schema.dropTableIfExists("Client")
};
