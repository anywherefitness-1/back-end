const bcrypt = require("bcryptjs");

exports.seed = async function (knex) {
  await knex("Instructor").truncate()
    await knex("Instructor").insert([
       {
         id: 1,
         username: "instructor1",
         password: bcrypt.hashSync("password1")

       },
       {
         id: 2,
        username: "instructor2",
        password: bcrypt.hashSync("password2")
       }
    ]);
};