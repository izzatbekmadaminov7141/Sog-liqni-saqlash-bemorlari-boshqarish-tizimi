const Doctor = require("../model/doctors");
// Router /
// Method GET
// Access Public
const getRouterDoctor = (req, res) => {
  res.render("index", {
    title: "Sog'liqni saqlash bemorlari boshqarish tizimi",
    users: Doctor.findAll(),
  });
};
module.exports = {
  getRouterDoctor,
};
