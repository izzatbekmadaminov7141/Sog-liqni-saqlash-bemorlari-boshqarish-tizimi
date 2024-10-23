const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index"); // "index" faylini render qilish
});

module.exports = router;
