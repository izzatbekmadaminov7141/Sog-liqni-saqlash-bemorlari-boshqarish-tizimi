const { Router } = require("express");
const router = Router();
const {
  getRouterHospital,
  postRouterHospital,
} = require("../controller/users");

router.get("/add-hospital", getRouterHospital);
router.post("/add-hospital", postRouterHospital);
module.exports = router;
