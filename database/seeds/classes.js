
exports.seed = async function (knex) {
  await knex("Classes").truncate()
  await knex("Classes").insert([
      {
          class_name: "Jogging",
          class_date: "2020-07-25",
          class_time: "09:00:00",
          duration: 45,
          intensity: "moderate",
          location: "track",
          number_of_attendees: 5,
          max_class_size: 10
      },
      {
          class_name: "Weight Training 101",
          class_date: "2020-07-26",
          class_time: "11:00:00",
          duration: 40,
          intensity: "low",
          location: "weight room 2a",
          number_of_attendees: 4,
          max_class_size: 5
      },
      {
          class_name: "Swimming 101",
          class_date: "2020-07-29",
          class_time: "15:30:00",
          duration: 45,
          intensity: "moderate",
          location: "pool",
          number_of_attendees: 5,
          max_class_size: 10
      },
      {
          class_name: "Tai Chi",
          class_date: "2020-08-02",
          class_time: "14:00:00",
          duration: 30,
          intensity: "low",
          location: "exercise room 5b",
          number_of_attendees: 5,
          max_class_size: 10
      },
      {
          class_name: "Yoga 101",
          class_date: "2020-08-04",
          class_time: "13:30:00",
          duration: 45,
          intensity: "low",
          location: "gym",
          number_of_attendees: 6,
          max_class_size: 15
      },
      {
          class_name: "Running 101",
          class_date: "2020-08-07",
          class_time: "10:00:00",
          duration: 30,
          intensity: "high",
          location: "track",
          number_of_attendees: 5,
          max_class_size: 10
      }
  ]);
};