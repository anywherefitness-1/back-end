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

module.exports = {
    add, 
    find,
    findBy,
    findById
}