const db = require("../../database/config");


async function add(course){
const [id] = await db("Classes").insert(course);
return findById(id);
}
function find() {
    return db("Classes")
    .select("id", 
            "class_name", 
            'class_date', 
            'class_time', 
            'duration', 
            'intensity', 
            'location', 
            'number_of_attendees', 
            'max_class_size')
}

function findById(id) {
    return db("classes")
        .where({id})
        .first();
}

function update(id, changes) {
    return db('Classes')
        .where('id', id)
        .update(changes)
        .then(count => {
            if (count > 0) {
                return findById(id);
            }
        })
}

async function remove(id) {
    return await db("Classes").where({id}).del();
}

module.exports = {
    add, 
    find,
    findById,
    update,
    remove
}