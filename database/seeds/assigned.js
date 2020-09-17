exports.seed = async function (knex) {
  await knex("Assigned").truncate()
    await knex("Assigned").insert([
     {
      class_id: 1,
      instructor_id:1
     },

     {
      class_id: 2,
      instructor_id: 1
     },
     {
      class_id: 3,
      instructor_id: 2
     },
     {
      class_id: 4,
      instructor_id: 2
     }
    ]);
};