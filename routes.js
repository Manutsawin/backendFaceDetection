const  express = require("express");
const  router = express.Router();
const { verifySignUp } = require("./middleware");
const { authJwt } = require("./middleware");
const controller = require("./controllers/auth.controller");
const detailController = require("./controllers/detail.controller");




//Authen------->

router.post(
  "/auth/signup",
  [
    verifySignUp.checkDuplicateUsernameOrEmail,
  ],
  controller.signup
);

router.post("/auth/signin", controller.signin);


// Detail ------>

router.post("/detail",
  [
    authJwt.verifyToken,
  ], 
  detailController.create
);

router.get("/detail",
  [
    authJwt.verifyToken,
  ], 
  detailController.get
);

module.exports = router;