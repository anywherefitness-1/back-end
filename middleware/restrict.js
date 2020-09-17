const jwt = require("jsonwebtoken")

function restrict(){
  return async (req, res, next) =>{
    const authError = {
      message:"You shall not pass!"
    };

    try {
      const token = req.cookies.token;
      if(!token) {
        return res.status(401).json(authError);
      }
      jwt.verify(token, "secret", (err, decoded)=>{
        if(err){
          return res.status(401).json(authError)
        };

        next();
      });

    } catch(err){
      next(err)
    }
  }
}

module.exports = restrict;