const db = require("../models");
const User = db.user;
checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
    User.findOne({
    where: {
      username: req.body.username
    }
    }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!"
      });
      return;
    }
    // Email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }
    });

    //Pass
    if(req.body.password.length<8||req.body.password.length>16){
      res.status(400).send({
        message: "Password not allowed!"
      });
      return;
    }
    if(req.body.password.toLowerCase()==req.body.password){
      res.status(400).send({
        message: "Password must be upper case at least one"
      });
      return;
    }
    if(req.body.password.toUpperCase()==req.body.password){
      res.status(400).send({
        message: "Password must be lower case at least one"
      });
      return;
    }
    // (?=.*[^a-zA-Z0-9])
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,16}$/;
    if(!decimal.test(req.body.password)) {
      res.status(400).send({
        message: "Password not allowed!"
      });
      return;
    }
    next();
  });
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
};
module.exports = verifySignUp;