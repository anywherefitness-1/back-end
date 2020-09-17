
const bcrypt = require("bcryptjs");

exports.seed = async function (knex) {
  await knex("Client").truncate()
  
    await knex("Client").insert([
       {
         id: 1,
         username: "client1",
         password: bcrypt.hashSync("password1")

       },
       {
         id: 2,
        username: "client2",
        password: bcrypt.hashSync("password2")
       }
    ]);
};