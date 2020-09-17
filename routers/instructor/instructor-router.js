const router = require('express').Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("./instructor-model")


router.get("/users", async(req, res, next)=>{

  try{
      res.status(200).json(await Users.find())
  }catch(err){
      next(err)
  }
})


router.post("/register", async (req, res, next) => {
  try {
      const { username, password } = req.body;
      const user = await Users.findBy({ username }).first();

      if (user) {
          return res.status(409).json({
              message: "Username is already taken"
          });
      }

      const newUser = await Users.add({
          username,
          password: await bcrypt.hash(password, 14)
      });

      res.status(201).json(newUser);
  } catch (err) {
      next(err);
  }
});


router.post("/login", async (req, res, next) => {
  try {
      const { username, password } = req.body;
      const user = await Users.findBy({ username }).first();

      if (!user) {
          return res.status(401).json({
              message: "You shall not pass!"
          });
      }

      const passwordValid = await bcrypt.compare(password, user.password)

      if (!passwordValid) {
          return res.status(401).json({
              message: "You shall not pass!"
          });
      }

      const token = jwt.sign({
          userID: user.id,
          
  }, "secret")

  
  res.cookie("token", token)
      res.json({
          message: `Welcome ${user.username}!`
      });
  } catch (err) {
      next(err);
  }

});


router.get("/logout", async (req, res, next) => {
  try {
      res.clearCookie("token")
      res.send("You have successfully logged out!");
      res.end()
  
  } catch (err) {
      next(err);
  }
});


module.exports = router;