const User = require("../model/users");
const uuid = require("uuid");
// Router   /users/add-hospital
// Method   GET
// Access   Public

const getRouterHospital = (req, res) => {
  res.render("add-hospital");
};
//Router /users/add-hospital
// Method POST
// Access Public
const postRouterHospital = (req, res) => {
  const id = uuid.v4();
  const users = new User(
    id,
    req.body.ism,
    req.body.yosh,
    req.body.tibbiy_tarix,
    req.body.telefon,
    req.body.elektron_pochta,
    req.body.adres,
    req.body.yangilangan_at,
    req.body.yaratilgan_at
  );
  users.save();
  res.redirect("/");
};
module.exports = { getRouterHospital, postRouterHospital };
