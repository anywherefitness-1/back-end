const db = require("../../database/config");

async function add(user) {
    const [id] = await db("Client").insert(user);
    return findById(id);
}

function find() {
    return db("Client").select("id", "username");
}

function findBy(filter) {
    return db("Client").select("id", "username", "password").where(filter);
}

function findById(id) {
    return db("Client").select("id", "username").where({ id }).first();
}

function update(id, changes){
    return db("Client").where({id}).update(changes);
}
async function remove(id) {
    return await db("Client").where({ id }).del();
}
module.exports = {
    add, 
    find,
    findBy,
    findById,
    update,
    remove
}