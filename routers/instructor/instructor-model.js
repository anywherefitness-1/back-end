const db = require("../../database/config");

async function add(user) {
    const [id] = await db("Instructor").insert(user);
    return findById(id);
}

function find() {
    return db("Instructor").select("id", "username");
}

function findBy(filter) {
    return db("Instructor").select("id", "username", "password").where(filter);
}

function findById(id) {
    return db("Instructor").select("id", "username").where({ id }).first();
}

function update(id, changes){
    return db("Instructor").where({id}).update(changes);
}
async function remove(id) {
    return await db("Instructor").where({ id }).del();
}
module.exports = {
    add, 
    find,
    findBy,
    findById,
    update,
    remove
}