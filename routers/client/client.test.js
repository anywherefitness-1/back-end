const db = require("../../database/config");
const Users = require("./client-model");
const server = require("../../api/server");
const supertest = require("supertest");
const { request } = require("../../api/server");

// checks if the env is running the test database (test.db3)
describe("environment", function () {
    it("should be using the testing database", function () {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });

  // authentication
describe("client model", function () {
  describe("insert()", function () {
    beforeEach(async () => {
      await db("user").truncate();
    });
// registers two test users into the database
    it("should insert users into database", async () => {
      // table was cleared by the beforeEach() function
      await Users.add({ username: "ryanmersmann", password: "hellogoodbye" });
      await Users.add({ username: "mohammad", password: "hellogoodbye2" });

      const users = await db("user");

      expect(users).toHaveLength(2);
    });
  });
  // if the registration is successful, does it return json/200/etc
  it("./register sucess", () => {
    supertest(server)
      .post("localhost:3300/api/client/register")
      .send({
        username: "username_test",
        password: "password_test",
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
  // if it fails
  it("./register fails with empty password,testing the invalid method", () => {
    supertest(server)
      .post("localhost:3300/api/client/register")
      .send({
        username: "Testing_Fail",
      })
      .expect("Content-Type", /json/)
      .expect(500)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
  // if the login is successful, does it returns json/200/etc
  it("./login sucess", () => {
    supertest(server)
      .post("localhost:3300/api/client/login")
      .send({
        username: "username_test",
        password: "password_test",
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
  // if it fails
  it("./login fails with wrong password", () => {
    supertest(server)
      .post("localhost:3300/api/client/login")
      .send({
        username: "Testing_Fail",
        password: "1",
      })
      .expect("Content-Type", /json/)
      .expect(500)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});