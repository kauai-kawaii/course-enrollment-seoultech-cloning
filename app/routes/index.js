var express = require("express");
var router = express.Router();
const ctrl = require("../controllers/page");

/* GET home page. */
router.get("/", ctrl.output.home);
router.get("/basket", ctrl.output.basket);
router.get("/enrollCheck", ctrl.output.enrollCheck);
router.get("/register", ctrl.output.register);
router.get("/search", ctrl.output.search);
router.get("/signUp", ctrl.output.signUp);

module.exports = router;
